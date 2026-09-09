import { useCallback, useRef } from 'react'
import { selectSfx } from '../lib/assets'

export function useSelectSound(): () => void {
  const audio = useRef<HTMLAudioElement | null>(null)
  return useCallback(() => {
    if (!audio.current) audio.current = new Audio(selectSfx)
    audio.current.currentTime = 0
    const p = audio.current.play()
    if (p?.catch) p.catch(() => {})
  }, [])
}
