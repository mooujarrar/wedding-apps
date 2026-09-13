import { useEffect, useState } from 'react'
import { weddingDate } from '../data/events'

function getTimeLeft() {
  const distance = weddingDate.getTime() - Date.now()
  if (distance <= 0) return { done: true, values: {} }
  return { done: false, values: { Days: Math.floor(distance / 86400000), Hours: Math.floor(distance / 3600000) % 24, Minutes: Math.floor(distance / 60000) % 60, Seconds: Math.floor(distance / 1000) % 60 } }
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft())
  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000)
    return () => clearInterval(timer)
  }, [])
  if (timeLeft.done) return <div className="rounded-2xl bg-[#556b2f] p-5 text-xl text-white">Bless the married couple for a happy life!</div>
  return <div className="grid aspect-square w-72 grid-cols-2 overflow-hidden rounded-2xl text-white shadow-xl">
    {Object.entries(timeLeft.values).map(([label, value], index) => <div key={label} className={`flex flex-col items-center justify-center text-lg font-bold ${['bg-linear-to-br from-[#556b2f] to-[#6b8e23]', 'bg-linear-to-br from-[#8fbc8f] to-[#90ee90]', 'bg-[#daa520]', 'bg-[#32cd32]'][index]}`}><strong className="text-3xl">{value}</strong>{label}</div>)}
  </div>
}
