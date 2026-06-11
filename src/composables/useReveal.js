import { onMounted, onUnmounted, nextTick } from 'vue'

export function useReveal() {
  let observer = null

  function init() {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const el = entry.target
          const delay = parseFloat(el.dataset.delay || '0') * 1000
          setTimeout(() => el.classList.add('revealed'), delay)
          observer.unobserve(el)
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    document
      .querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale')
      .forEach((el) => observer.observe(el))
  }

  onMounted(() => nextTick(init))
  onUnmounted(() => observer?.disconnect())
}
