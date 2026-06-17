import fs from 'node:fs'
import zlib from 'node:zlib'

const input = 'src/assets/glass-pill-button.png'
const output = 'src/assets/glass-pill-button-alpha.png'

const png = fs.readFileSync(input)
const signature = png.subarray(0, 8)
const expected = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10])

if (!signature.equals(expected)) {
  throw new Error('Input is not a PNG file')
}

let offset = 8
let width = 0
let height = 0
let colorType = 0
let bitDepth = 0
const idat = []

while (offset < png.length) {
  const length = png.readUInt32BE(offset)
  const type = png.subarray(offset + 4, offset + 8).toString('ascii')
  const data = png.subarray(offset + 8, offset + 8 + length)

  if (type === 'IHDR') {
    width = data.readUInt32BE(0)
    height = data.readUInt32BE(4)
    bitDepth = data[8]
    colorType = data[9]
  }

  if (type === 'IDAT') {
    idat.push(data)
  }

  if (type === 'IEND') {
    break
  }

  offset += 12 + length
}

if (bitDepth !== 8 || colorType !== 2) {
  throw new Error(`Expected 8-bit RGB PNG, got bitDepth=${bitDepth}, colorType=${colorType}`)
}

const bytesPerPixel = 3
const stride = width * bytesPerPixel
const inflated = zlib.inflateSync(Buffer.concat(idat))
const rgb = Buffer.alloc(width * height * bytesPerPixel)

function paeth(a, b, c) {
  const p = a + b - c
  const pa = Math.abs(p - a)
  const pb = Math.abs(p - b)
  const pc = Math.abs(p - c)
  if (pa <= pb && pa <= pc) return a
  if (pb <= pc) return b
  return c
}

let sourceOffset = 0
for (let y = 0; y < height; y += 1) {
  const filter = inflated[sourceOffset]
  sourceOffset += 1

  for (let x = 0; x < stride; x += 1) {
    const raw = inflated[sourceOffset + x]
    const left = x >= bytesPerPixel ? rgb[y * stride + x - bytesPerPixel] : 0
    const up = y > 0 ? rgb[(y - 1) * stride + x] : 0
    const upLeft = y > 0 && x >= bytesPerPixel ? rgb[(y - 1) * stride + x - bytesPerPixel] : 0
    let value = raw

    if (filter === 1) value = raw + left
    if (filter === 2) value = raw + up
    if (filter === 3) value = raw + Math.floor((left + up) / 2)
    if (filter === 4) value = raw + paeth(left, up, upLeft)

    rgb[y * stride + x] = value & 255
  }

  sourceOffset += stride
}

function clamp(value, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value))
}

function smoothstep(edge0, edge1, x) {
  const t = clamp((x - edge0) / (edge1 - edge0))
  return t * t * (3 - 2 * t)
}

function capsuleDistance(px, py, ax, ay, bx, by, radius) {
  const abx = bx - ax
  const aby = by - ay
  const apx = px - ax
  const apy = py - ay
  const t = clamp((apx * abx + apy * aby) / (abx * abx + aby * aby))
  const cx = ax + abx * t
  const cy = ay + aby * t
  return Math.hypot(px - cx, py - cy) - radius
}

function ellipseMask(px, py, cx, cy, rx, ry, softness) {
  const distance = Math.sqrt(((px - cx) / rx) ** 2 + ((py - cy) / ry) ** 2)
  return 1 - smoothstep(1, 1 + softness, distance)
}

const rgba = Buffer.alloc(width * height * 4)
const cy = height * 0.485
const radius = height * 0.22
const ax = width * 0.24
const bx = width * 0.765

for (let y = 0; y < height; y += 1) {
  for (let x = 0; x < width; x += 1) {
    const source = (y * width + x) * 3
    const target = (y * width + x) * 4

    const bodyDistance = capsuleDistance(x, y, ax, cy, bx, cy, radius)
    const bodyAlpha = 1 - smoothstep(-12, 42, bodyDistance)
    const rimAlpha = 1 - smoothstep(0, 75, Math.abs(bodyDistance))
    const shadowAlpha = ellipseMask(x, y, width * 0.49, height * 0.645, width * 0.42, height * 0.16, 0.55) * 0.42
    const yellowGlowAlpha = ellipseMask(x, y, width * 0.77, height * 0.61, width * 0.14, height * 0.14, 0.65) * 0.72
    const leftBlueGlowAlpha = ellipseMask(x, y, width * 0.135, height * 0.51, width * 0.1, height * 0.13, 0.7) * 0.45
    const alpha = clamp(Math.max(bodyAlpha, rimAlpha * 0.55, shadowAlpha, yellowGlowAlpha, leftBlueGlowAlpha))

    rgba[target] = rgb[source]
    rgba[target + 1] = rgb[source + 1]
    rgba[target + 2] = rgb[source + 2]
    rgba[target + 3] = Math.round(alpha * 255)
  }
}

const raw = Buffer.alloc(height * (width * 4 + 1))
for (let y = 0; y < height; y += 1) {
  raw[y * (width * 4 + 1)] = 0
  rgba.copy(raw, y * (width * 4 + 1) + 1, y * width * 4, (y + 1) * width * 4)
}

function crc32(buffer) {
  let crc = 0xffffffff
  for (const byte of buffer) {
    crc ^= byte
    for (let i = 0; i < 8; i += 1) {
      crc = crc & 1 ? 0xedb88320 ^ (crc >>> 1) : crc >>> 1
    }
  }
  return (crc ^ 0xffffffff) >>> 0
}

function chunk(type, data) {
  const typeBuffer = Buffer.from(type, 'ascii')
  const out = Buffer.alloc(12 + data.length)
  out.writeUInt32BE(data.length, 0)
  typeBuffer.copy(out, 4)
  data.copy(out, 8)
  out.writeUInt32BE(crc32(Buffer.concat([typeBuffer, data])), 8 + data.length)
  return out
}

const ihdr = Buffer.alloc(13)
ihdr.writeUInt32BE(width, 0)
ihdr.writeUInt32BE(height, 4)
ihdr[8] = 8
ihdr[9] = 6
ihdr[10] = 0
ihdr[11] = 0
ihdr[12] = 0

fs.writeFileSync(
  output,
  Buffer.concat([
    expected,
    chunk('IHDR', ihdr),
    chunk('IDAT', zlib.deflateSync(raw, { level: 9 })),
    chunk('IEND', Buffer.alloc(0)),
  ]),
)

console.log(`Wrote ${output}`)
