import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

function init() {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

  animationInit()
}

const imageRightClipEntry = {
  from: {
    clipPath: 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)',
    xPercent: 25,
  },
  to: {
    clipPath: 'polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)',
    xPercent: 0,
    duration: 1.25,
  },
}

function animationInit() {
  gsap.fromTo('.started-buner-content>*', imageRightClipEntry.from, {
    ...imageRightClipEntry.to,
    stagger: 0.1,
    ease: 'elastic.out(1, 1)',
    scrollTrigger: '.started',
  })
}

export default { init }
