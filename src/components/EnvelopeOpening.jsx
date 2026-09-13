import { useState } from 'react'

export default function EnvelopeOpening({ prompt = 'Tap to open', dismissOnOpen = true }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  const openEnvelope = () => {
    if (isOpen) return
    setIsOpen(true)
    if (dismissOnOpen) window.setTimeout(() => setIsVisible(false), 1150)
  }

  const handleKeyDown = event => {
    if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); openEnvelope() }
  }

  return <div className={`envelope-opening ${isOpen ? 'is-open' : ''} ${isVisible ? '' : 'is-finished'}`} role="button" tabIndex="0" aria-label="Open the invitation" onClick={openEnvelope} onKeyDown={handleKeyDown}>
    <div className="envelope-scene">
      <div className="envelope-body" />
      <div className="envelope-flap" />
      <div className="envelope-paper"><span>Nina <b>&amp;</b> Mohyiddine</span><small>Standesamt Hennef</small></div>
      <div className="envelope-front" />
      <span className="envelope-prompt">{prompt}</span>
    </div>
  </div>
}
