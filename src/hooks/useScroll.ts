import { useEffect, useState } from 'react'

export function useScrollPast(threshold = 80) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])

  return scrolled
}

export function useScrollPastElement(elementId: string) {
  const [past, setPast] = useState(false)

  useEffect(() => {
    const element = document.getElementById(elementId)
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => setPast(!entry.isIntersecting),
      { threshold: 0, rootMargin: '0px 0px -40% 0px' },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [elementId])

  return past
}
