import { useEffect, useRef, useState } from 'react'

export function useCursorSprite() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const pos = useRef({ x: -100, y: -100 })
  const [isLink, setIsLink] = useState(false)

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)')
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (!fine.matches || reduced.matches) return

    document.body.classList.add('cursor-on')
    let rafId: number
    let lastFrameTime = 0
    let frame = 0

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY }
      const el = document.elementFromPoint(e.clientX, e.clientY)
      setIsLink(!!el?.closest('a, button, [role="button"]'))
    }

    const tick = (ts: number) => {
      const el = cursorRef.current
      if (el) {
        el.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`
        if (ts - lastFrameTime > 50) {
          frame = (frame + 1) % 30
          el.style.backgroundPosition = `-${frame * 48}px 0`
          lastFrameTime = ts
        }
      }
      rafId = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMove)
    rafId = requestAnimationFrame(tick)

    return () => {
      document.body.classList.remove('cursor-on')
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return { cursorRef, isLink }
}
