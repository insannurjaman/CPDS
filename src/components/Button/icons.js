// Local SVG assets (imported so Vite bundles/serves them)
import leftIconUrl from './assets/icon-left.svg'
import rightIconUrl from './assets/icon-right.svg'

export const leftIcon = leftIconUrl
export const rightIcon = rightIconUrl

// Icon options map for Storybook controls
export const iconOptions = {
  none: null,
  leftIcon: leftIconUrl,
  rightIcon: rightIconUrl,
}

export default { leftIcon, rightIcon, iconOptions }
