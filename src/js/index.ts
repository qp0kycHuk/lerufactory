import showPass from './show-pass'
import theme from './theme'
import phonemask from './phonemask/phonemask'
import scrollTo from './scrollTo'
import fancybox from './fancybox'
import tab from 'npm-kit-tab'
import toggle from 'npm-kit-toggle'
import ripple from '@qpokychuk/ripple'
import Swiper, { Navigation, Pagination, Scrollbar, Autoplay, Grid, Thumbs, EffectFade } from 'swiper'
// import animations from './animations'

import '../scss/index.scss'

Swiper.use([Navigation, Pagination, Scrollbar, Autoplay, Grid, Thumbs, EffectFade])
Swiper.defaults.touchStartPreventDefault = false
window.Swiper = Swiper

interface CustomWindow extends Window {
  Swiper: typeof Swiper
}

declare let window: CustomWindow

window.addEventListener('DOMContentLoaded', () => loadHandler())

function loadHandler() {
  showPass.init()
  // animations.init()
  scrollTo.init()
  tab.init()
  toggle.init()
  ripple.init()
  theme.init()
  fancybox.init()
  phonemask.init('[type="tel"]')

  ripple.attach('.btn')
  ripple.attach('.waved')
  ripple.deAttach('.btn-text')
}
