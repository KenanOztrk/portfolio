import glassPillButton from '../assets/glass-pill-button-body.png'

function Button({
  children = 'Icon button',
  type = 'button',
  width,
  imgLoading = 'lazy',
  imgFetchPriority,
}) {
  return (
    <button
      className="glass-pill-button"
      style={width ? { '--button-width': `${width}px` } : undefined}
      type={type}
    >
      <img
        className="glass-pill-render"
        src={glassPillButton}
        alt=""
        aria-hidden="true"
        loading={imgLoading}
        decoding="async"
        fetchPriority={imgFetchPriority}
      />
      <span className="glass-pill-text">{children}</span>
    </button>
  )
}

export default Button
