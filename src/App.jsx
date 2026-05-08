import { useState } from 'react'
import EmailNotification from './components/EmailNotification'
import DevPanel from './components/DevPanel'

export default function App() {
  const [theme, setTheme] = useState('light')

  return (
    <>
      <EmailNotification
        theme={theme}
        senderName="Awal Rahandito"
        senderEmail="awal.rahandito@privy.id"
        recipientName="mama cici"
        documentTitle="862499-PID-FIN-PAY-I-26-PAID"
        reviewUrl="#"
      />
      <DevPanel theme={theme} onThemeChange={setTheme} />
    </>
  )
}
