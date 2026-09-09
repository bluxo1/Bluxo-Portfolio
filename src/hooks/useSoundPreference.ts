import { useEffect, useState } from 'react'
export function useSoundPreference() {
  const [enabled, setEnabled] = useState(() => localStorage.getItem('sound-enabled') === 'true')
  useEffect(() => { localStorage.setItem('sound-enabled', String(enabled)) }, [enabled])
  return [enabled, () => setEnabled((value) => !value)] as const
}
