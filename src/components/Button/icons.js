// Local SVG assets (imported so Vite bundles/serves them)
import leftIconUrl from './assets/icon-left.svg'
import rightIconUrl from './assets/icon-right.svg'

// Import all available icons from assets
import plus from '../../assets/plus.svg'
import arrowLeft from '../../assets/arrow-left.svg'
import arrowRight from '../../assets/arrow-right.svg'
import arrowUp from '../../assets/arrow-up.svg'
import arrowDown from '../../assets/arrow-down.svg'
import chevronLeft from '../../assets/chevron-left.svg'
import chevronRight from '../../assets/chevron-right.svg'
import chevronUp from '../../assets/chevron-up.svg'
import chevronDown from '../../assets/chevron-down.svg'
import check from '../../assets/check-line.svg'
import checkCircle from '../../assets/check-circle.svg'
import close from '../../assets/close.svg'
import closeCircle from '../../assets/close-circle.svg'
import download from '../../assets/download.svg'
import edit from '../../assets/pencil.svg'
import share from '../../assets/share.svg'
import refresh from '../../assets/refresh-1.svg'
import settings from '../../assets/setting.svg'
import search from '../../assets/sidebar-search.svg'
import home from '../../assets/home.svg'
import inbox from '../../assets/inbox.svg'
import mail from '../../assets/mail.svg'
import phone from '../../assets/phone.svg'
import lock from '../../assets/lock.svg'
import unlock from '../../assets/eye-open.svg'
import eye from '../../assets/eye-open.svg'
import eyeClosed from '../../assets/eye-closed.svg'
import info from '../../assets/info.svg'
import warning from '../../assets/warning-triangle.svg'
import alert from '../../assets/warning-circle.svg'
import calendar from '../../assets/calendar.svg'
import clock from '../../assets/time.svg'
import user from '../../assets/people.svg'
import users from '../../assets/group.svg'
import heart from '../../assets/star.svg'
import star from '../../assets/star.svg'
import starFilled from '../../assets/star-filled.svg'

export const leftIcon = leftIconUrl
export const rightIcon = rightIconUrl
export const defaultIcon = plus

// Icon options map for Storybook controls - organized by category
export const iconOptions = {
  'none': null,
  '--- Default ---': null,
  'Plus (Default)': plus,
  'Default Left': leftIconUrl,
  'Default Right': rightIconUrl,
  '--- Arrows ---': null,
  'Arrow Left': arrowLeft,
  'Arrow Right': arrowRight,
  'Arrow Up': arrowUp,
  'Arrow Down': arrowDown,
  '--- Chevrons ---': null,
  'Chevron Left': chevronLeft,
  'Chevron Right': chevronRight,
  'Chevron Up': chevronUp,
  'Chevron Down': chevronDown,
  '--- Status ---': null,
  'Check': check,
  'Check Circle': checkCircle,
  'Close': close,
  'Close Circle': closeCircle,
  '--- Actions ---': null,
  'Download': download,
  'Edit': edit,
  'Share': share,
  'Refresh': refresh,
  'Settings': settings,
  '--- Navigation ---': null,
  'Home': home,
  'Inbox': inbox,
  'Search': search,
  '--- Communication ---': null,
  'Mail': mail,
  'Phone': phone,
  '--- Security ---': null,
  'Lock': lock,
  'Eye': eye,
  'Eye Closed': eyeClosed,
  '--- Info ---': null,
  'Info': info,
  'Warning': warning,
  'Alert': alert,
  '--- Time ---': null,
  'Calendar': calendar,
  'Clock': clock,
  '--- Users ---': null,
  'User': user,
  'Users': users,
  '--- Favorites ---': null,
  'Heart': heart,
  'Star': star,
  'Star Filled': starFilled,
}

export default { leftIcon, rightIcon, defaultIcon, iconOptions }
