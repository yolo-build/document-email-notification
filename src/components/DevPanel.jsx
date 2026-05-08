export default function DevPanel({ theme, onThemeChange }) {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2 rounded-2xl border border-white/10 bg-[#0d0821]/90 px-4 py-3 shadow-2xl backdrop-blur-md">
      <p className="text-[10px] font-semibold uppercase tracking-widest text-white/40 select-none">
        Dev Panel
      </p>
      <div className="flex gap-2">
        <button
          onClick={() => onThemeChange('light')}
          className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
            theme === 'light'
              ? 'bg-white text-[#0d0821] shadow'
              : 'text-white/60 hover:text-white hover:bg-white/10'
          }`}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0 2a7 7 0 1 1 0-14 7 7 0 0 1 0 14zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z"/>
          </svg>
          Light
        </button>
        <button
          onClick={() => onThemeChange('dark')}
          className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
            theme === 'dark'
              ? 'bg-white/10 text-white shadow border border-white/20'
              : 'text-white/60 hover:text-white hover:bg-white/10'
          }`}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
            <path d="M10 7a7 7 0 0 0 12 4.9v.1c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2h.1A6.979 6.979 0 0 0 10 7zm-6 5a8 8 0 0 0 15.062 3.762A9 9 0 0 1 8.238 4.938 7.999 7.999 0 0 0 4 12z"/>
          </svg>
          Dark
        </button>
      </div>
    </div>
  )
}
