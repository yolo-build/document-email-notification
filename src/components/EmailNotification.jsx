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

        {/* ── Security Section ── */}
        <div className="px-6 sm:px-8 py-6 space-y-4 text-xs text-gray-500 leading-relaxed">
          <div>
            <p className="font-semibold text-gray-700 mb-1">Do Not Share This Email</p>
            <p>
              This email contains a secure link to Privy. Please do not share this email,
              link, or access code with others.
            </p>
          </div>

          <div>
            <p className="font-semibold text-gray-700 mb-1">Alternate Signing Method</p>
            <p>
              Visit Privy.com, click &apos;Access Documents&apos;, and enter the security code:
            </p>
            <p className="mt-1 font-mono text-gray-600 break-all">{securityCode}</p>
          </div>
        </div>

        {/* ── Divider ── */}
        <hr className="mx-4 sm:mx-6 border-gray-100" />

        {/* ── Legal Footer ── */}
        <div className="px-6 sm:px-8 py-6 text-xs text-gray-400 leading-relaxed space-y-3">
          <p>Copyright &copy; 2026 Privy, Inc. All rights reserved. 221 Main Street, Suite 1550 San Francisco, CA 94105</p>

          <p>
            This message was sent to you by{' '}
            <span className="text-gray-500">{senderName}</span> who is using the Privy
            Electronic Signature Service. If you would rather not receive email from this
            sender you may contact the sender with your request.
          </p>

          {/* Links */}
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-gray-500">
            {['Contact Us', 'Terms of Use', 'Privacy', 'Support', 'Report Email'].map((link) => (
              <a key={link} href="#" className="hover:underline">
                {link}
              </a>
            ))}
          </div>

          <p>
            <a href="#" className="text-gray-500 hover:underline">
              Download the Privy App
            </a>
          </p>
        </div>

      </div>
    </div>
  )
}
