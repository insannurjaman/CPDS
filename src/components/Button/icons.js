// Local SVG assets (imported so Vite bundles/serves them)
import leftIconUrl from './assets/icon-left.svg'
import rightIconUrl from './assets/icon-right.svg'
import plus from '../../assets/plus.svg'

export const leftIcon = leftIconUrl
export const rightIcon = rightIconUrl
export const defaultIcon = plus

function normalizeIconLabel(filename) {
  return filename
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase())
}

const assetModules = import.meta.glob('../../assets/*.svg', { eager: true })
const assetIcons = Object.entries(assetModules).reduce((acc, [path, module]) => {
  const fileName = path.split('/').pop().replace('.svg', '')
  if (fileName === 'plus') return acc
  acc[normalizeIconLabel(fileName)] = module.default
  return acc
}, {})

export const iconOptions = {
  none: null,
  '--- Default ---': null,
  'Plus (Default)': plus,
  'Default Left': leftIconUrl,
  'Default Right': rightIconUrl,
  '--- Assets ---': null,
  ...Object.fromEntries(Object.entries(assetIcons).sort(([a], [b]) => a.localeCompare(b))),
}

export default { leftIcon, rightIcon, defaultIcon, iconOptions }
