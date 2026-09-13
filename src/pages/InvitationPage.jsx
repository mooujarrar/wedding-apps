import { useEffect, useMemo, useState } from 'react'
import GoogleMap from '../components/GoogleMap'
import AccommodationOptions from '../components/AccommodationOptions'
import Countdown from '../components/Countdown'
import OpeningCurtain from '../components/OpeningCurtain'
import Petals from '../components/Petals'
import RsvpForm from '../components/RsvpForm'
import { venueUrl } from '../data/events'

export default function InvitationPage() {
  const [slide, setSlide] = useState(0)
  const slides = useMemo(() => [
    <div className="text-center"><h1 className="font-display text-6xl font-bold text-[#2d5016]">Nina</h1><span className="font-display text-3xl text-[#8b4513]">&</span><h1 className="font-display text-6xl font-bold text-[#2d5016]">Mohyiddine</h1><h3 className="mt-2 uppercase tracking-[0.3em] text-[#2d5016]">Are getting married</h3><p className="mt-8 uppercase tracking-wider">on <b className="text-[#8b4513]">Friday, 18 June 2027</b>, at <b className="text-[#8b4513]">Milchhäuschen Königswinter</b></p></div>,
    <div className="flex flex-col items-center gap-5"><p className="font-display text-4xl text-[#2d5016]">Still</p><Countdown /><p className="font-display text-4xl text-[#2d5016]">to go!</p><div className="flex flex-wrap justify-center gap-3"><a href={venueUrl} target="_blank" rel="noreferrer" className="rounded-xl bg-[#228b22] px-4 py-3 text-xs font-bold text-white">SEE THE VENUE</a><a href="https://github.com/mohyiddine/mohyiddine/raw/master/docs/Nina%20%26%20Mohyiddine.pdf" download className="rounded-xl bg-[#228b22] px-4 py-3 text-xs font-bold text-white">DOWNLOAD INVITATION CARD</a></div></div>,
    <div className="w-full overflow-hidden rounded-2xl bg-[#f5f5dc]/90 p-4 shadow-lg"><h2 className="mb-4 font-display text-4xl text-[#2d5016]">Venue Location</h2><GoogleMap className="h-80 w-full" /><AccommodationOptions /></div>,
    <RsvpForm />,
    <div className="rounded-2xl bg-[#f5f5dc]/90 p-6 text-center text-lg leading-relaxed shadow-lg">Can&apos;t wait to celebrate that moment with family and friends!<br />For inquiries, <a className="font-bold text-[#8b4513] underline" href="mailto:recipient@example.com">send Judith an email</a>.</div>,
  ], [])
  const move = direction => setSlide(current => Math.min(4, Math.max(0, current + direction)))
  useEffect(() => { const onKeyDown = event => { if (event.key === 'ArrowRight') move(1); if (event.key === 'ArrowLeft') move(-1) }; window.addEventListener('keydown', onKeyDown); return () => window.removeEventListener('keydown', onKeyDown) }, [])
  return <main className="invitation-page relative flex min-h-screen items-center justify-center overflow-hidden px-5 py-16 text-[#3e2723]"><OpeningCurtain /><Petals /><div className="invitation-content relative z-1 w-full max-w-xl text-center"><div className="fade-in min-h-112.5 content-center">{slides[slide]}</div><div className="fixed bottom-8 left-0 right-0 z-10 flex items-center justify-between px-5 sm:absolute sm:bottom-0 sm:translate-y-20"><button type="button" aria-label="Previous slide" disabled={slide === 0} onClick={() => move(-1)} className="grid h-12 w-12 place-items-center rounded-full bg-[#228b22]/90 text-2xl text-white shadow disabled:cursor-not-allowed disabled:opacity-40">←</button><span className="font-bold text-[#f5f5dc]">{slide + 1} / 5</span><button type="button" aria-label="Next slide" disabled={slide === 4} onClick={() => move(1)} className="grid h-12 w-12 place-items-center rounded-full bg-[#228b22]/90 text-2xl text-white shadow disabled:cursor-not-allowed disabled:opacity-40">→</button></div><p className="mt-8 font-display text-2xl font-bold text-[#f5f5dc]">Join us in our happiness!</p></div></main>
}
