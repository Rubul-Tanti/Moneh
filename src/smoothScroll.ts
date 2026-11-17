import type LocomotiveScroll from 'locomotive-scroll'

let scrollInstance: LocomotiveScroll | null = null

export function setSmoothScrollInstance(instance: LocomotiveScroll | null) {
  scrollInstance = instance
}

export function scrollToElement(element: HTMLElement, offset = -110) {
  if (scrollInstance) {
    scrollInstance.scrollTo(element, { offset, duration: 0.9 })
    return
  }

  element.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
