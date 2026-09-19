import { normalCursor, linkCursor } from '../../lib/assets'
import { useCursorSprite } from '../../hooks/useCursorSprite'

export function CursorSprite() {
  const { cursorRef, isLink, hidden } = useCursorSprite()
  return (
    <div
      ref={cursorRef}
      id="p5-cursor"
      aria-hidden="true"
      style={{ backgroundImage: `url(${isLink ? linkCursor : normalCursor})`, opacity: hidden ? 0 : 1 }}
    />
  )
}
