import { accommodationOptions } from '../data/events'

export default function AccommodationOptions() {
  return <section className="accommodation-options rounded-xl border border-[#b86d75]/30 bg-[#fffaf4]/95 p-4 text-left shadow-md">
    <div className="mb-3 flex items-end justify-between gap-3 border-b border-[#b86d75]/20 pb-3">
      <div><p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a1616b]">For our guests</p><h3 className="font-display text-3xl font-bold text-[#526b58]">Accommodation options</h3></div>
      <span aria-hidden="true" className="font-display text-3xl text-[#b86d75]">🏨</span>
    </div>
    <div className="grid gap-2">
      {accommodationOptions.map((option, index) => <a key={option.name} href={option.url} target="_blank" rel="noreferrer" className="group flex items-center gap-3 rounded-lg border border-transparent bg-white/75 p-2.5 transition hover:-translate-y-0.5 hover:border-[#b86d75]/40 hover:bg-white">
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#526b58] font-bold text-white">{String(index + 1).padStart(2, '0')}</span>
        <span className="min-w-0 flex-1"><strong className="block text-sm text-[#7b4e59]">{option.name}</strong><span className="text-xs text-[#6c625d]">{option.area}</span></span>
        <span aria-hidden="true" className="text-xl text-[#a1616b] transition group-hover:translate-x-1">→</span>
      </a>)}
    </div>
  </section>
}
