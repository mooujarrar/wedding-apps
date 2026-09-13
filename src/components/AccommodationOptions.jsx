import { accommodationOptions } from '../data/events'

export default function AccommodationOptions() {
  return <section className="mt-5 rounded-2xl border border-[#8b4513]/30 bg-[#fffdf1]/90 p-4 text-left shadow-md">
    <div className="mb-3 flex items-end justify-between gap-3 border-b border-[#8b4513]/20 pb-3">
      <div><p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8b4513]">For our guests</p><h3 className="font-display text-3xl font-bold text-[#2d5016]">Accommodation options</h3></div>
      <span aria-hidden="true" className="font-display text-3xl text-[#8b4513]">✦</span>
    </div>
    <div className="grid gap-2">
      {accommodationOptions.map((option, index) => <a key={option.name} href={option.url} target="_blank" rel="noreferrer" className="group flex items-center gap-3 rounded-xl border border-transparent bg-white/70 p-3 transition hover:-translate-y-0.5 hover:border-[#8b4513]/40 hover:bg-white">
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#2d5016] font-bold text-white">{String(index + 1).padStart(2, '0')}</span>
        <span className="min-w-0 flex-1"><strong className="block text-sm text-[#3e2723]">{option.name}</strong><span className="text-xs text-[#6b3e26]">{option.area}</span></span>
        <span aria-hidden="true" className="text-xl text-[#8b4513] transition group-hover:translate-x-1">→</span>
      </a>)}
    </div>
  </section>
}
