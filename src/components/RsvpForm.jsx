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
  return <section className="rsvp-panel">
    <header className="rsvp-heading">
      <h2 className="font-display">RSVP</h2>
      <p>Let us know who will be joining us.</p>
    </header>
    <div className="rsvp-count">
      <label className="rsvp-count-label" htmlFor="guest-count">Number of guests (including yourself)</label>
      <div className="rsvp-count-controls">
        <input id="guest-count" type="number" min="1" max="20" value={guestCount} onChange={event => setGuestCount(event.target.value)} className="rsvp-count-input" />
        <button type="button" onClick={generateGuests} className="rsvp-action">Generate RSVP form</button>
      </div>
    </div>
    {guests.length > 0 && <div className="rsvp-table-wrap"><table className="rsvp-guest-table"><thead><tr><th>Name</th><th>Attending</th><th>Music wish</th></tr></thead><tbody>{guests.map((guest, index) => <tr key={index}><td><input value={guest.name} onChange={event => updateGuest(index, 'name', event.target.value)} placeholder="Guest name" /></td><td><select value={guest.attendance} onChange={event => updateGuest(index, 'attendance', event.target.value)}><option value="yes">Yes</option><option value="no">No</option></select></td><td><input value={guest.musicWish} onChange={event => updateGuest(index, 'musicWish', event.target.value)} placeholder="Optional" /></td></tr>)}</tbody></table><button type="button" onClick={submitRsvp} className="rsvp-action rsvp-submit">Submit RSVP</button></div>}
    {status && <p className="rsvp-status" role="status">{status}</p>}
  </section>
}
