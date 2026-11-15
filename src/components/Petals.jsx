import { useState } from 'react'

export default function Petals() {
  const [hearts] = useState(() => {
    const palette = ['#a8325e', '#67417a', '#b04b3d']
    const shuffledPalette = [...palette].sort(() => Math.random() - 0.5)
    const colors = shuffledPalette.slice(0, Math.random() < 0.5 ? 2 : 3)

    return Array.from({ length: 22 }, (_, index) => ({
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: `${-Math.random() * 18}s`,
      duration: `${12 + Math.random() * 8}s`,
      drift: `${(Math.random() - 0.5) * 18}vw`,
      left: `${Math.random() * 100}%`,
      rotation: `${(Math.random() - 0.5) * 70}deg`,
      size: `${9 + Math.random() * 10}px`,
      scale: 0.8 + Math.random() * 0.6,
      key: index,
    }))
  })

  return <div aria-hidden="true">{hearts.map(heart => <svg key={heart.key} className="floating-heart" viewBox="0 0 24 24" style={{ left: heart.left, animationDelay: heart.delay, animationDuration: heart.duration, width: heart.size, height: heart.size, fill: heart.color, ['--drift']: heart.drift, ['--rotation']: heart.rotation, ['--scale']: heart.scale }}>
    <path d="M12 21.35 10.55 20C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.5L12 21.35Z" />
  </svg>)}</div>
}
