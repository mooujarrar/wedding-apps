import { useState } from 'react'
import EnvelopeOpening from '../components/EnvelopeOpening'
import StandesamtRsvpForm from '../components/StandesamtRsvpForm'
import { calendarDays, standesamtMapUrl, standesamtTranslations } from '../data/events'

export default function StandesamtPage() {
  const [language, setLanguage] = useState('de')
  const copy = standesamtTranslations[language]
  const saveToCalendar = () => {
    const ics = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'PRODID:-//Nina and Mohyiddine//Standesamt//EN',
      'BEGIN:VEVENT',
      `UID:standesamt-${Date.now()}@nina-mohyiddine`,
      'DTSTAMP:20260912T120000Z',
      'DTSTART:20270605T140000',
      'DTEND:20270605T150000',
      `SUMMARY:${copy.eventSummary}`,
      `DESCRIPTION:${copy.eventDescription}`,
      'LOCATION:Standesamt, Frankfurter Str. 97, 53773 Hennef (Sieg)',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n')
    const url = URL.createObjectURL(new Blob([ics], { type: 'text/calendar;charset=utf-8' }))
    const link = document.createElement('a')
    link.href = url
    link.download = 'standesamt-nina-mohyiddine.ics'
    link.click()
    URL.revokeObjectURL(url)
  }

  return <main className="standesamt-page flex min-h-screen items-center justify-center overflow-hidden px-4 py-8 text-[#3f2d36]">
    <EnvelopeOpening prompt={copy.openPrompt} />
    <div aria-hidden="true" className="standesamt-sparkles"><span /><span /><span /><span /><span /></div>
    <section className="standesamt-card relative w-full max-w-2xl overflow-hidden p-5 text-center sm:p-8" lang={language}>
      <button type="button" className="standesamt-language" onClick={() => setLanguage(current => current === 'de' ? 'en' : 'de')} aria-label={copy.langLabel} title={copy.langLabel}>
        <span aria-hidden="true">{language === 'de' ? 'EN' : 'DE'}</span> {language === 'de' ? 'English' : 'Deutsch'}
      </button>
      <div className="standesamt-ribbon">05 · 06 · 27</div>
      <p className="standesamt-kicker">{copy.kicker}</p>
      <h1 className="standesamt-title mt-3">{copy.title}</h1>
      <p className="standesamt-subtitle">Nina <span>&amp;</span> Mohyiddine</p>
      <figure className="standesamt-photo mt-5">
        <img src="/assets/img/hands.jpg" alt="Our hands with the engagement ring against the sunset" />
        <figcaption>{copy.caption}</figcaption>
      </figure>
      <div className="standesamt-orbit" aria-hidden="true"><span>05</span><i /><b>JUN</b></div>
      <div className="standesamt-details mx-auto mt-5 grid max-w-lg gap-3 sm:grid-cols-2">
        <div><span className="standesamt-label">{copy.dateLabel}</span><strong>{copy.date}</strong><strong>{copy.time}</strong></div>
        <div><span className="standesamt-label">{copy.locationLabel}</span><strong>{copy.location}</strong><a href={standesamtMapUrl} target="_blank" rel="noreferrer">Frankfurter Str. 97<br />53773 Hennef (Sieg)</a></div>
      </div>
      <div className="standesamt-calendar mt-5">
        <div className="flex items-center justify-between"><span>{copy.month}</span><small>{copy.calendarDay}</small></div>
        <div className="standesamt-weekdays">{copy.weekdays.map(day => <span key={day}>{day}</span>)}</div>
        <div className="standesamt-grid">{calendarDays.map((day, index) => <span key={index} className={day === 5 ? 'is-selected' : ''}>{day}</span>)}</div>
      </div>
      <StandesamtRsvpForm copy={copy} />
      <div className="mt-5 flex flex-col justify-center gap-3 sm:flex-row">
        <button type="button" onClick={saveToCalendar} className="standesamt-button standesamt-button-primary"><span aria-hidden="true">+</span> {copy.save}</button>
        <a href={standesamtMapUrl} target="_blank" rel="noreferrer" className="standesamt-button standesamt-button-secondary"><span aria-hidden="true">↗</span> {copy.openAddress}</a>
      </div>
      <p className="standesamt-note mt-5">{copy.note}</p>
    </section>
  </main>
}
