export const weddingDate = new Date('2027-06-18T00:00:00')
export const venueUrl = 'https://www.google.com/maps?q=50.671868284110005,7.222807890730933'
export const mapUrl = 'https://www.google.com/maps/search/?api=1&query=Milchhäuschen+Königswinter'
export const mapLocation = { lat: 50.6721661, lng: 7.2229812 }
export const calendarDays = ['', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
export const standesamtMapUrl = 'https://www.google.com/maps/place//data=!4m2!3m1!1s0x47bee8054c09434f:0x9db4bf2a70dbaca1?sa=X&ved=1t:8290&ictx=111'

export const accommodationOptions = [
  { name: 'ibis budget Bonn Süd Königswinter', area: 'Königswinter-Ittenbach', url: 'https://all.accor.com/booking/de/ibis/hotel/8285?destination=53639-konigswinter-ittenbach-germany&compositions=1&dateIn=2026-09-06&dateOut=2026-09-07&nights=1&hideWDR=false&accessibleRoom=false' },
  { name: 'Haus Marienhof', area: 'Königswinter', url: 'https://tagen.erzbistum-koeln.de/marienhof/hotel/zimmer/' },
  { name: 'Gasthaus Otto', area: 'Königswinter-Thomasberg', url: 'https://gasthaus-otto.de/' },
  { name: 'Haus Schlesien', area: 'Königswinter-Thomasberg', url: 'https://www.hausschlesien.de/hotel-und-restaurant/uebernachtung#preise' },
]

export const standesamtTranslations = {
  de: {
    langLabel: 'English version',
    openPrompt: 'Tippen zum Öffnen · Tap to open',
    kicker: 'Eine kleine Zeremonie, ein grosser Moment',
    title: 'Standesamt Hennef',
    dateLabel: 'Wann',
    date: 'Samstag, 05. Juni 2027',
    time: '14:00 Uhr',
    locationLabel: 'Wo',
    location: 'Standesamt Hennef',
    month: 'Juni 2027',
    calendarDay: 'SA · unser Tag',
    weekdays: ['MO', 'DI', 'MI', 'DO', 'FR', 'SA', 'SO'],
    save: 'In Kalender speichern',
    openAddress: 'Adresse öffnen',
    caption: 'Der Anfang von immer',
    note: 'Wir freuen uns, diesen besonderen Moment mit Euch zu teilen.',
    formTitle: 'Kommt ihr zu uns?',
    formQuestion: 'Seid ihr dabei?',
    formYes: 'Ja',
    formNo: 'Nein',
    formNamesLabel: 'Name oder Namen',
    formNamesPlaceholder: 'Bitte alle Namen eintragen',
    formSubmit: 'Antwort senden',
    formNameRequired: 'Bitte mindestens einen Namen eintragen.',
    formSending: 'Antwort wird gesendet ...',
    formSuccess: 'Vielen Dank für eure Antwort!',
    formError: 'Beim Senden ist etwas schiefgegangen. Bitte versucht es erneut.',
    eventSummary: 'Standesamt - Nina & Mohyiddine',
    eventDescription: 'Unsere standesamtliche Trauung. Wir freuen uns auf Euch!',
  },
  en: {
    langLabel: 'Deutsche Version',
    openPrompt: 'Tippen zum Öffnen · Tap to open',
    kicker: 'A small ceremony, a great moment',
    title: 'Standesamt Hennef',
    dateLabel: 'When',
    date: 'Saturday, 05 June 2027',
    time: '2:00 PM',
    locationLabel: 'Where',
    location: 'Standesamt Hennef',
    month: 'June 2027',
    calendarDay: 'SAT · our day',
    weekdays: ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'],
    save: 'Save to calendar',
    openAddress: 'Open address',
    caption: 'The beginning of forever',
    note: 'We are so happy to share this special moment with you.',
    formTitle: 'Will you join us?',
    formQuestion: 'Are you willing to come?',
    formYes: 'Yes',
    formNo: 'No',
    formNamesLabel: 'Name or names',
    formNamesPlaceholder: 'Please enter all names',
    formSubmit: 'Send response',
    formNameRequired: 'Please enter at least one name.',
    formSending: 'Sending your response ...',
    formSuccess: 'Thank you for your response!',
    formError: 'Something went wrong. Please try again.',
    eventSummary: 'Civil ceremony - Nina & Mohyiddine',
    eventDescription: 'Our civil ceremony. We are looking forward to celebrating with you!',
  },
}

export const saveDateTranslations = {
  de: {
    save: 'Speichern',
    map: 'Karte öffnen',
    title: 'Save the Date',
    month: 'Juni 2027',
    weekdays: ['MO', 'DI', 'MI', 'DO', 'FR', 'SA', 'SO'],
    footer: 'Wir heiraten ♥\nReserviert diesen Termin für uns.\nDetails folgen.',
    eventSummary: 'Hochzeit: Nina & Mohyiddine',
  },
  en: {
    save: 'Save',
    map: 'Open map',
    title: 'Save the Date',
    month: 'June 2027',
    weekdays: ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'],
    footer: 'We are getting married ♥\nSave this date for us.\nDetails soon.',
    eventSummary: 'Wedding: Nina & Mohyiddine',
  },
}
