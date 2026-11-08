import { parkingUrl, venueUrl } from '../data/events'

export default function ShuttleInfo() {
  return <section className="shuttle-panel">
    <p className="shuttle-eyebrow">GETTING TO THE CELEBRATION</p>
    <h2 className="shuttle-title font-display">Park, hop on &amp; celebrate</h2>
    <p className="shuttle-intro">The venue is easiest to reach by shuttle. Here&apos;s where to meet us.</p>
    <div className="shuttle-route">
      <article className="shuttle-stop">
        <span className="shuttle-stop-number">01</span>
        <svg className="shuttle-stop-icon" viewBox="0 0 48 48" aria-hidden="true">
          <path d="M5 29v-5.5c0-1.8 1.2-3.3 3-3.8l5-1.3 5.2-7.1a4 4 0 0 1 3.2-1.6h8.8a4 4 0 0 1 3.3 1.7l4.8 6.7 4.1 1.3a4 4 0 0 1 2.8 3.8V29H5Z" />
          <path d="m15 18.5 4.2-6h10.3l4.3 6H15Zm-6.5 4h3m25 0h3" />
          <path d="M5 26h40v3H5z" fill="#f1d8ce" stroke="none" />
          <circle cx="13" cy="29" r="3.2" fill="#fffaf4" />
          <circle cx="13" cy="29" r="1.4" fill="#bd9b61" stroke="none" />
          <circle cx="36" cy="29" r="3.2" fill="#fffaf4" />
          <circle cx="36" cy="29" r="1.4" fill="#bd9b61" stroke="none" />
        </svg>
        <h3>Drive to the parking</h3>
        <a className="shuttle-map-link" href={parkingUrl} target="_blank" rel="noreferrer">Parkplatz Margarethenhöhe <span aria-hidden="true">↗</span></a>
        <a className="shuttle-directions" href={parkingUrl} target="_blank" rel="noreferrer">Open parking in Google Maps</a>
      </article>
      <article className="shuttle-stop shuttle-stop--highlight">
        <span className="shuttle-stop-number">02</span>
        <svg className="shuttle-stop-icon" viewBox="0 0 48 48" aria-hidden="true">
          <path d="M7 32V15a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v17H7Z" />
          <path d="M11 15h8v8h-8zm12 0h12v8H23z" />
          <path d="M7 26h32m-8 0v6m-15-6v6" />
          <path d="M10 28h3m22 0h1" />
          <circle cx="14" cy="33" r="3" fill="#fffaf4" />
          <circle cx="14" cy="33" r="1.3" fill="#bd9b61" stroke="none" />
          <circle cx="34" cy="33" r="3" fill="#fffaf4" />
          <circle cx="34" cy="33" r="1.3" fill="#bd9b61" stroke="none" />
        </svg>
        <h3>Catch the wedding shuttle</h3>
        <p className="shuttle-departure-label">Departures from the parking</p>
        <div className="shuttle-times" aria-label="Shuttle departure times">
          <time>14:00</time><time>14:10</time><time>14:20</time>
        </div>
      </article>
      <article className="shuttle-stop">
        <span className="shuttle-stop-number">03</span>
        <svg className="shuttle-stop-icon" viewBox="0 0 48 48" aria-hidden="true">
          <path d="m8 22 16-13 16 13M13 20v18h22V20M20 38V26h8v12" />
          <path d="M18 17h12" />
          <path d="m21 17 3-4 3 4" />
        </svg>
        <h3>Arrive at the venue</h3>
        <a className="shuttle-map-link" href={venueUrl} target="_blank" rel="noreferrer">Milchhäuschen Königswinter <span aria-hidden="true">↗</span></a>
        <p className="shuttle-stop-note">We&apos;ll take you straight to the celebration.</p>
      </article>
    </div>
    <p className="shuttle-reminder">Please make your way to the parking area in time for your preferred departure.</p>
  </section>
}
