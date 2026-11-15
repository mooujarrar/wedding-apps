import { useState } from 'react'
import { addDoc, collection, Timestamp } from 'firebase/firestore'
import { db } from '../firebase'

export default function RsvpForm() {
  const [guestCount, setGuestCount] = useState('3')
  const [guests, setGuests] = useState(Array.from({ length: 3 }, () => ({ name: '', attendance: 'yes', musicWish: '' })))
  const [status, setStatus] = useState('')
  const namedGuests = guests.filter(guest => guest.name.trim())
  const updateGuest = (index, key, value) => setGuests(current => current.map((guest, guestIndex) => guestIndex === index ? { ...guest, [key]: value } : guest))
  const addGuestRow = () => {
    setGuests(current => [...current, { name: '', attendance: 'yes', musicWish: '' }])
    setGuestCount(current => (parseInt(current) + 1).toString())
  }
  const submitRsvp = async () => {
    if (!namedGuests.length) { setStatus('Please enter at least one guest name.'); return }
    setStatus('Sending your RSVP...')
    try {
      await addDoc(collection(db, 'rsvps'), { guests: namedGuests.map(guest => ({ ...guest, name: guest.name.trim() })), timestamp: Timestamp.now(), wedding: 'Nina & Mohyiddine' })
      setStatus('Thank you for your RSVP. We will be in touch!')
    } catch (error) {
      console.error(error)
      setStatus('Something went wrong while sending your RSVP. Please try again.')
    }
  }
  return <section className="rsvp-panel">
    <header className="rsvp-heading">
      <h2 className="font-display">RSVP</h2>
      <p>Let us know who will be joining us.<br />We ask that you respond by <strong>March 31, 2027</strong>.</p>
    </header>
    {guests.length > 0 && <div className="rsvp-table-wrap"><table className="rsvp-guest-table"><thead><tr><th>Name</th><th>Attending</th><th>Music wish</th></tr></thead><tbody>{guests.map((guest, index) => <tr key={index}><td><input value={guest.name} onChange={event => updateGuest(index, 'name', event.target.value)} placeholder="Guest name" /></td><td><select value={guest.attendance} onChange={event => updateGuest(index, 'attendance', event.target.value)}><option value="yes">Yes</option><option value="no">No</option></select></td><td><input value={guest.musicWish} onChange={event => updateGuest(index, 'musicWish', event.target.value)} placeholder="Optional" /></td></tr>)}</tbody></table>
    <div className="rsvp-actions">
      <button type="button" onClick={addGuestRow} className="add-guest-button">
        <img src="/assets/img/emoji-add.svg" alt="" aria-hidden="true" width="36" height="36" />
      </button>
    </div>
    <button type="button" onClick={submitRsvp} className="rsvp-action rsvp-submit" disabled={!namedGuests.length}>Submit RSVP</button>
    </div>}
    {status && <p className="rsvp-status" role="status">{status}</p>}
  </section>
}
