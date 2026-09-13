import { useEffect, useState } from 'react'

export default function OpeningCurtain() {
  const [isOpening, setIsOpening] = useState(true)

  useEffect(() => {
    const duration = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 50 : 1500
    const timer = window.setTimeout(() => setIsOpening(false), duration)
    return () => window.clearTimeout(timer)
  }, [])

  return <div className={`invitation-opening ${isOpening ? '' : 'is-finished'}`} aria-hidden="true">
    <div className="opening-curtain opening-curtain-left" />
    <div className="opening-curtain opening-curtain-right" />
    <div className="opening-title"><span>Nina</span><b>&amp;</b><span>Mohyiddine</span></div>
  </div>
}
