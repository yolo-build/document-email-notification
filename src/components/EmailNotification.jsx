export default function EmailNotification({
  senderName = 'Awal Rahandito',
  senderEmail = 'awal.rahandito@privy.id',
  recipientName = 'mama cici',
  documentTitle = '862499-PID-FIN-PAY-I-26-PAID',
  reviewUrl = '#',
}) {
  const securityCode = '160EDB1DC34D4A73B276887EBDB342CE7'

  return (
    <div className="min-h-screen bg-gray-100 py-0 sm:py-10 font-sans">
      <div className="mx-auto w-full max-w-[600px] bg-white shadow-sm">

        {/* ── Logo Header ── */}
        <div className="flex justify-center items-center py-6 px-6">
          <div className="flex items-center gap-2">
            {/* Privy shield icon */}
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14 2L4 6.5V13.5C4 18.75 8.4 23.67 14 25C19.6 23.67 24 18.75 24 13.5V6.5L14 2Z"
                fill="#008AFF"
              />
              <path
                d="M11 13.5L13 15.5L17.5 11"
                stroke="white"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-2xl font-semibold tracking-tight text-gray-900">
              privy
            </span>
          </div>
        </div>

        {/* ── Hero Card ── */}
        <div className="mx-4 sm:mx-6 mb-4 rounded-2xl overflow-hidden" style={{ background: '#0D0821' }}>
          <div className="flex flex-col items-center px-8 py-10 gap-5">

            {/* Pen icon box */}
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center"
              style={{ background: 'rgba(0,138,255,0.15)', border: '1px solid rgba(0,138,255,0.3)' }}
            >
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25ZM20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C17.98 2.9 17.35 2.9 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04Z"
                  fill="#008AFF"
                />
              </svg>
            </div>

            {/* Message */}
            <p className="text-white text-center text-base leading-relaxed max-w-xs">
              <span className="font-semibold">{senderName}</span> sent you a document to review and sign.
            </p>

            {/* CTA Button */}
            <a
              href={reviewUrl}
              className="inline-block px-8 py-3 rounded-full font-semibold text-white text-sm transition-opacity hover:opacity-90 active:opacity-80"
              style={{ background: '#008AFF' }}
            >
              Review Document
            </a>
          </div>
        </div>

        {/* ── Info Card ── */}
        <div className="mx-4 sm:mx-6 mb-6 rounded-2xl border border-gray-100 bg-white px-6 py-5">
          <p className="font-semibold text-gray-900 text-sm">{senderName}</p>
          <a
            href={`mailto:${senderEmail}`}
            className="text-sm font-medium"
            style={{ color: '#008AFF' }}
          >
            {senderEmail}
          </a>

          <div className="mt-4 space-y-1">
            <p className="text-gray-700 text-sm">{recipientName},</p>
            <p className="text-gray-700 text-sm">
              Complete with Privy: {documentTitle}
            </p>
          </div>

          <p className="mt-4 text-gray-700 text-sm">Thank You, {senderName}</p>
        </div>

        {/* ── Divider ── */}
        <hr className="mx-4 sm:mx-6 border-gray-100" />

{/* ── Notes ── */}
        <div className="relative overflow-hidden bg-[#002c5c] px-10 py-5 flex flex-col gap-1">
          <p className="font-normal text-base leading-6 tracking-[0.2px] text-[#fdfdfd]">
            Catatan: Pesan ini dikirimkan ke alamat surat elektronik yang tidak dipantau. Jangan balas pesan ini. Jika ada pertanyaan, silakan hubungi kami di helpdesk@privy.id.
          </p>
          <p className="font-normal text-xs leading-4 tracking-[0.2px] text-[#a0abb9]">
            {`Note: Don't reply to this email. This email is sent from an unmonitored e-mail address. If you have questions, please reach us at helpdesk@privy.id`}
          </p>
        </div>

        {/* ── Footer ── */}
        <div className="px-10 py-5 flex items-center justify-between">
          <div className="flex flex-col">
            <p className="font-bold text-sm leading-5 tracking-[0.2px] text-[#0d1117]">PT Privy Identitas Digital</p>
            <p className="font-normal text-sm leading-5 tracking-[0.2px] text-[#1f2329]">Jl. Kemang Raya no. 15 Jakarta Selatan 12730</p>
          </div>
          <div className="flex gap-3 items-center">
            <a href="#" className="w-7 h-7 rounded-full bg-[#167eef] flex items-center justify-center">
              <svg width="8" height="15" viewBox="0 0 8 15" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.2 2.5H7V0H5C3.34 0 2 1.34 2 3v1.5H0V7h2v8h2.5V7H6.5L7 4.5H4.5V3c0-.28.22-.5.5-.5H5.2z"/>
              </svg>
            </a>
            <a href="#" className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.19 5.93 13.16 0h-1.2L7.65 5.15 4.2 0H0l5.22 7.78L0 14h1.2l4.56-5.44L9.4 14h4.2L8.19 5.93ZM6.36 7.85l-.52-.77L1.64.91H3.6l6.37 9.22H7.97L6.36 7.85Z"/>
              </svg>
            </a>
            <a href="#" className="w-7 h-7 rounded-full bg-[#fe046d] flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 1.26c1.87 0 2.09.01 2.83.04.68.03 1.05.14 1.3.24.33.13.56.28.8.52.25.25.4.48.52.8.1.25.21.62.24 1.3.03.74.04.96.04 2.84s-.01 2.09-.04 2.83c-.03.68-.14 1.05-.24 1.3-.13.33-.28.56-.52.8-.25.25-.48.4-.8.52-.25.1-.62.21-1.3.24-.74.03-.96.04-2.83.04s-2.09-.01-2.83-.04c-.68-.03-1.05-.14-1.3-.24a2.17 2.17 0 0 1-.8-.52 2.17 2.17 0 0 1-.52-.8c-.1-.25-.21-.62-.24-1.3C1.27 9.09 1.26 8.87 1.26 7s.01-2.09.04-2.83c.03-.68.14-1.05.24-1.3.13-.33.28-.56.52-.8.25-.25.48-.4.8-.52.25-.1.62-.21 1.3-.24.74-.03.96-.04 2.84-.04M7 0C5.1 0 4.87.01 4.12.04c-.75.03-1.27.15-1.72.31a3.47 3.47 0 0 0-1.25.81A3.47 3.47 0 0 0 .34 2.4C.18 2.85.06 3.37.03 4.12.01 4.87 0 5.1 0 7s.01 2.13.04 2.88c.03.75.15 1.27.31 1.72.18.46.42.86.81 1.25.39.39.79.63 1.25.81.45.16.97.28 1.72.31C4.87 13.99 5.1 14 7 14s2.13-.01 2.88-.04c.75-.03 1.27-.15 1.72-.31.46-.18.86-.42 1.25-.81.39-.39.63-.79.81-1.25.16-.45.28-.97.31-1.72C13.99 9.13 14 8.9 14 7s-.01-2.13-.04-2.88c-.03-.75-.15-1.27-.31-1.72a3.47 3.47 0 0 0-.81-1.25A3.47 3.47 0 0 0 11.6.34C11.15.18 10.63.06 9.88.03 9.13.01 8.9 0 7 0zm0 3.4a3.6 3.6 0 1 0 0 7.2A3.6 3.6 0 0 0 7 3.4zm0 5.94a2.34 2.34 0 1 1 0-4.68 2.34 2.34 0 0 1 0 4.68zM10.74 2.4a.84.84 0 1 0 0 1.68.84.84 0 0 0 0-1.68z"/>
              </svg>
            </a>
            <a href="#" className="w-7 h-7 rounded-full bg-[#008aff] flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="white" strokeWidth="1.2" xmlns="http://www.w3.org/2000/svg">
                <circle cx="7" cy="7" r="6"/>
                <ellipse cx="7" cy="7" rx="2.5" ry="6"/>
                <line x1="1" y1="7" x2="13" y2="7"/>
                <line x1="1.5" y1="4.5" x2="12.5" y2="4.5"/>
                <line x1="1.5" y1="9.5" x2="12.5" y2="9.5"/>
              </svg>
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}
