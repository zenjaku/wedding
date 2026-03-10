import type { Directive } from 'vue'

type RevealValue =
  | string
  | {
      animation?: string
      once?: boolean
      threshold?: number
      rootMargin?: string
    }

function getOptions(value: RevealValue | undefined) {
  if (!value) return {}
  if (typeof value === 'string') return { animation: value }
  return value
}

export const revealDirective: Directive<HTMLElement, RevealValue> = {
  mounted(el, binding) {
    const { animation, once = false, threshold = 0.15, rootMargin = '0px 0px -10% 0px' } =
      getOptions(binding.value)

    el.classList.add('reveal')
    if (animation) el.classList.add(`reveal--${animation}`)

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.classList.add('is-revealed')
            if (once) observer.unobserve(el)
          } else if (!once) {
            el.classList.remove('is-revealed')
          }
        }
      },
      { threshold, rootMargin },
    )

    observer.observe(el)
    ;(el as any).__revealObserver = observer
  },
  unmounted(el) {
    const observer: IntersectionObserver | undefined = (el as any).__revealObserver
    if (observer) observer.disconnect()
  },
}
