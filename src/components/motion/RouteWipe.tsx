import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { useReducedMotion } from '../../hooks/useReducedMotion'

/** A short directional wipe that follows route changes without hiding the route itself. */
export function RouteWipe() {
  const { pathname } = useLocation()
  const reducedMotion = useReducedMotion()
  const wipeRef = useRef<HTMLDivElement>(null)
  const firstRender = useRef(true)

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
      return
    }
    if (reducedMotion) return

    const wipe = wipeRef.current
    if (!wipe) return
    wipe.classList.remove('go')
    void wipe.offsetWidth
    wipe.classList.add('go')

    const clear = () => wipe.classList.remove('go')
    wipe.addEventListener('animationend', clear, { once: true })
    return () => wipe.removeEventListener('animationend', clear)
  }, [pathname, reducedMotion])

  return (
    <div id="p5-wipe" ref={wipeRef} aria-hidden="true">
      <span className="p1" />
      <span className="p2" />
      <span className="p3" />
    </div>
  )
}
