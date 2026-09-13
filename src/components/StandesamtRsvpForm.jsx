import { useState } from 'react'
import { addDoc, collection, Timestamp } from 'firebase/firestore'
import { db } from '../firebase'

export default function StandesamtRsvpForm({ copy }) {
  const [attendance, setAttendance] = useState('yes')
  const [names, setNames] = useState('')
  const [status, setStatus] = useState('')

  const submitRsvp = async event => {
    event.preventDefault()
    if (!names.trim()) {
      setStatus(copy.formNameRequired)
      return
    }

    setStatus(copy.formSending)
    try {
      await addDoc(collection(db, 'rsvps'), {
        attendance,
        event: 'standesamt',
        names: names.trim(),
        timestamp: Timestamp.now(),
        wedding: 'Nina & Mohyiddine',
      })
      setStatus(copy.formSuccess)
      setNames('')
    } catch (error) {
      console.error(error)
      setStatus(copy.formError)
    }
  }

  return <form className="standesamt-rsvp mt-5" onSubmit={submitRsvp}>
    <h2 className="standesamt-rsvp-title">{copy.formTitle}</h2>
    <p className="standesamt-rsvp-question">{copy.formQuestion}</p>
    <div className="standesamt-rsvp-options" role="group" aria-label={copy.formQuestion}>
      <label><input type="radio" name="standesamt-attendance" value="yes" checked={attendance === 'yes'} onChange={event => setAttendance(event.target.value)} /> {copy.formYes}</label>
      <label><input type="radio" name="standesamt-attendance" value="no" checked={attendance === 'no'} onChange={event => setAttendance(event.target.value)} /> {copy.formNo}</label>
    </div>
    <label className="standesamt-rsvp-label" htmlFor="standesamt-names">{copy.formNamesLabel}</label>
    <textarea id="standesamt-names" value={names} onChange={event => setNames(event.target.value)} placeholder={copy.formNamesPlaceholder} rows="2" />
    <button type="submit" className="standesamt-button standesamt-button-primary">{copy.formSubmit}</button>
    {status && <p className="standesamt-rsvp-status" role="status">{status}</p>}
  </form>
}