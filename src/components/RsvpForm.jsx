import { useState } from 'react'
import { addDoc, collection, Timestamp } from 'firebase/firestore'
import { db } from '../firebase'

export default function RsvpForm() {
  const [guestCount, setGuestCount] = useState('')
  const [guests, setGuests] = useState([])
  const [status, setStatus] = useState('')
  const generateGuests = () => {
    const count = Number(guestCount)
    if (count < 1 || count > 20) { setStatus('Please enter between 1 and 20 guests.'); return }
    setGuests(Array.from({ length: count }, () => ({ name: '', attendance: 'yes', musicWish: '' })))
    setStatus('')
  }
  const updateGuest = (index, key, value) => setGuests(current => current.map((guest, guestIndex) => guestIndex === index ? { ...guest, [key]: value } : guest))
  const submitRsvp = async () => {
    if (!guests.length) { setStatus('Generate the RSVP form first.'); return }
    setStatus('Sending your RSVP...')
    try {
      await addDoc(collection(db, 'rsvps'), { guests, timestamp: Timestamp.now(), wedding: 'Nina & Mohyiddine' })
      setStatus('Thank you for your RSVP. We will be in touch!')
    } catch (error) {
      console.error(error)
      setStatus('Something went wrong while sending your RSVP. Please try again.')
    }
  }
  return <div className="rounded-2xl bg-[#f5f5dc]/90 p-5 text-left shadow-lg">
    <h2 className="mb-4 font-display text-4xl text-[#2d5016]">Save the Date</h2>
    <label className="mb-2 block text-sm font-bold" htmlFor="guest-count">Number of guests (including yourself)</label>
    <div className="flex flex-wrap gap-2"><input id="guest-count" type="number" min="1" max="20" value={guestCount} onChange={event => setGuestCount(event.target.value)} className="w-28 rounded-lg border border-[#8b4513] bg-white px-3 py-2" /><button type="button" onClick={generateGuests} className="rounded-lg bg-[#228b22] px-4 py-2 font-bold text-white transition hover:bg-[#32cd32]">Generate RSVP form</button></div>
    {guests.length > 0 && <div className="mt-5 overflow-x-auto"><table className="w-full min-w-130 border-collapse bg-white/80 text-sm"><thead className="bg-[#228b22] text-left text-white"><tr><th className="p-2">Name</th><th className="p-2">Attending</th><th className="p-2">Music wish</th></tr></thead><tbody>{guests.map((guest, index) => <tr key={index} className="border-b border-[#8b4513]/40"><td className="p-2"><input value={guest.name} onChange={event => updateGuest(index, 'name', event.target.value)} placeholder="Guest name" className="w-full rounded border p-2" /></td><td className="p-2"><select value={guest.attendance} onChange={event => updateGuest(index, 'attendance', event.target.value)} className="rounded border p-2"><option value="yes">Yes</option><option value="no">No</option></select></td><td className="p-2"><input value={guest.musicWish} onChange={event => updateGuest(index, 'musicWish', event.target.value)} placeholder="Optional" className="w-full rounded border p-2" /></td></tr>)}</tbody></table><button type="button" onClick={submitRsvp} className="mt-4 rounded-lg bg-[#2d5016] px-5 py-2 font-bold text-white">Submit RSVP</button></div>}
    {status && <p className="mt-3 text-sm font-bold" role="status">{status}</p>}
  </div>
}
