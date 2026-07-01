import { useState } from 'react'
import { HiPaperAirplane } from 'react-icons/hi2'

export default function ChatInput({ onSend, disabled = false }) {
  const [value, setValue] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    const trimmed = value.trim()
    if (!trimmed || disabled) return
    onSend?.(trimmed)
    setValue('')
  }

  return (
    <form onSubmit={handleSubmit} className="border-t border-white/5 p-4">
      <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-2 backdrop-blur-sm focus-within:border-brand-500/40">
        <input
          type="text"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          placeholder="Describe your career goals..."
          disabled={disabled}
          className="flex-1 bg-transparent text-sm text-white placeholder:text-zinc-500 focus:outline-none disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={disabled || !value.trim()}
          className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-500 text-white transition hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-40"
          aria-label="Send message"
        >
          <HiPaperAirplane className="h-4 w-4" />
        </button>
      </div>
    </form>
  )
}
