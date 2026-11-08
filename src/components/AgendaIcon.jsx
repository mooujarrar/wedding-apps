export default function AgendaIcon({ type }) {
  return <svg className="agenda-svg" viewBox="0 0 40 40" aria-hidden="true" focusable="false">
    {type === 'gathering' && <g strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 31c.4-4.4 3-7 7-7s6.5 2.6 7 7v2h-14z" fill="#dce4d8" stroke="#8b9b84" strokeWidth="1.6" />
      <path d="M21.5 31c.4-4.4 3-7 7-7s6.5 2.6 7 7v2h-14z" fill="#f1d8ce" stroke="#bd9b61" strokeWidth="1.6" />
      <path d="M11 33v-3m18 3v-3" stroke="#fffaf4" strokeWidth="1.4" />
      <circle cx="11.5" cy="16" r="5" fill="#f1d8ce" stroke="#7b4e59" strokeWidth="1.7" />
      <circle cx="28.5" cy="16" r="5" fill="#dce4d8" stroke="#7b4e59" strokeWidth="1.7" />
      <path d="M13.5 32c.4-5.8 3.2-9 6.5-9s6.1 3.2 6.5 9v1h-13z" fill="#fffaf4" stroke="#7b4e59" strokeWidth="1.7" />
      <circle cx="20" cy="15" r="5.5" fill="#f1d8ce" stroke="#7b4e59" strokeWidth="1.7" />
      <path d="m8 7 1.1 2.2L11 10l-1.9.8L8 13l-.9-2.2L5 10l2.1-.8z" fill="#bd9b61" />
      <path d="m32 7 .8 1.5L34.5 9l-1.7.6L32 11l-.7-1.4-1.8-.6 1.8-.5z" fill="#d9a8a1" />
    </g>}
    {type === 'ceremony' && <g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8">
      <circle cx="16" cy="22" r="8" stroke="#bd9b61" />
      <circle cx="24" cy="22" r="8" stroke="#7b4e59" />
      <path d="m18.7 12.5 1.3-2 1.3 2 2.2.4-1.6 1.5.4 2.2-2.3-1.1-2.1 1.1.4-2.2-1.6-1.5z" fill="#d9a8a1" stroke="#bd9b61" strokeWidth="1.2" />
    </g>}
    {type === 'coffee' && <g fill="none" stroke="#7b4e59" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7">
      <path d="M11 18h17v8a6 6 0 0 1-6 6h-5a6 6 0 0 1-6-6z" fill="#f1d8ce" />
      <path d="M28 20h2a3.5 3.5 0 0 1 0 7h-2M9 34h22" />
      <path d="M16 14c-2-2 2-3 0-6m7 6c-2-2 2-3 0-6" stroke="#8b9b84" />
    </g>}
    {type === 'activities' && <g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7">
      <path d="M5 10.5a4 4 0 0 1 4-4h13a4 4 0 0 1 4 4v7a4 4 0 0 1-4 4h-7l-5 4v-4.2a4 4 0 0 1-5-3.8z" fill="#f1d8ce" stroke="#7b4e59" />
      <path d="M17 25h8l5 4v-4.2a4 4 0 0 0 5-3.8v-6a4 4 0 0 0-4-4h-3" fill="#dce4d8" stroke="#8b9b84" />
      <circle cx="12" cy="14" r="1" fill="#bd9b61" stroke="none" />
      <circle cx="16" cy="14" r="1" fill="#bd9b61" stroke="none" />
      <circle cx="20" cy="14" r="1" fill="#bd9b61" stroke="none" />
    </g>}
    {type === 'dinner' && <g fill="none" stroke="#7b4e59" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7">
      <circle cx="21" cy="21" r="11" stroke="#bd9b61" />
      <circle cx="21" cy="21" r="7" stroke="#d9a8a1" />
      <path d="M7 10v8m-3-8v5a3 3 0 0 0 6 0v-5m-3 8v14m25-22v22m0-22c-3 3-4 7-4 11h4" />
    </g>}
    {type === 'celebration' && <g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8">
      <path d="M14 28V10l16-3v18" stroke="#7b4e59" />
      <ellipse cx="10.5" cy="29" rx="4.5" ry="3" transform="rotate(-18 10.5 29)" fill="#f1d8ce" stroke="#7b4e59" />
      <ellipse cx="26.5" cy="26" rx="4.5" ry="3" transform="rotate(-18 26.5 26)" fill="#dce4d8" stroke="#7b4e59" />
      <path d="M14 14 30 11" stroke="#bd9b61" />
      <path d="M7 10V7m-2 4H2m7-6L7 3m26 20v-3m2 4h3m-7-7 2-2" stroke="#d9a8a1" />
    </g>}
  </svg>
}
