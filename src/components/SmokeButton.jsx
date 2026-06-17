import smokePillButton from '../assets/smoke-pill-button.png'

/**
 * @param {Object} props
 * @param {import('react').ReactNode} [props.children]
 * @param {string} [props.className]
 * @param {'button' | 'submit' | 'reset'} [props.type]
 * @param {number} [props.width]
 * @param {string} [props.href]
 */
function SmokeButton({ children = 'Icon button', className = '', type = 'button', width, href }) {
  const style = width ? { '--button-width': `${width}px` } : undefined
  const classNames = `smoke-pill-button ${className}`.trim()
  const content = (
    <>
      <img className="smoke-pill-render" src={smokePillButton} alt="" aria-hidden="true" />
      <span className="smoke-pill-text">{children}</span>
    </>
  )

  if (href) {
    return (
      <a className={classNames} style={style} href={href}>
        {content}
      </a>
    )
  }

  return (
    <button
      className={classNames}
      style={style}
      type={type}
    >
      {content}
    </button>
  )
}

export default SmokeButton
