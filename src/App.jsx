import { Routes, Route } from 'react-router-dom'
import InvitationPage from './pages/InvitationPage'
import SaveTheDatePage from './pages/SaveTheDatePage'
import StandesamtPage from './pages/StandesamtPage'

export default function App() {
  return <Routes>
    <Route path="/" element={<SaveTheDatePage />} />
    <Route path="/invitation" element={<InvitationPage />} />
    <Route path="/save-the-date" element={<SaveTheDatePage />} />
    <Route path="/standesamt" element={<StandesamtPage />} />
    <Route path="*" element={null} />
  </Routes>
}
