import './Button.css'
import { defaultIcon } from './icons'

function normalize(v) {
  if (!v) return ''
  return String(v).toLowerCase()
}

function Button(props) {
  const {
    variant = 'primary',
    size = 'large',
    state = 'default',
    text = 'Button',
    leftIcon = null,
    rightIcon = null,
    showLeftIcon = true,
    showRightIcon = true,
    className = '',
    ...rest
  } = props

  const variantKey = normalize(variant)
  const sizeKey = normalize(size)
  const stateKey = normalize(state)

  const isDisabled = stateKey === 'disabled'

  const classes = [
    'button',
    `button--${variantKey}`,
    `button--size-${sizeKey}`,
    stateKey !== 'default' ? `button--state-${stateKey}` : '',
    className,
  ]

  return (
    <button
      type={rest.type || 'button'}
      className={classes.filter(Boolean).join(' ')}
      disabled={isDisabled}
      {...rest}
    >
      {showLeftIcon && (
        <span className={`button__icon button__icon--left button__icon--${sizeKey}`} aria-hidden>
          {leftIcon ? (typeof leftIcon === 'string' ? <img src={leftIcon} alt="" /> : leftIcon) : <img src={defaultIcon} alt="" />}
        </span>
      )}

      <span className="button__label">{text}</span>

      {showRightIcon && (
        <span className={`button__icon button__icon--right button__icon--${sizeKey}`} aria-hidden>
          {rightIcon ? (typeof rightIcon === 'string' ? <img src={rightIcon} alt="" /> : rightIcon) : <img src={defaultIcon} alt="" />}
        </span>
      )}
    </button>
  )
}

export default Button
