export default function ChatMessage({ role, content }) {
  const isUser = role === 'user'

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`relative max-w-[85%] rounded-[2rem] border border-white/10 px-5 py-4 text-sm leading-7 shadow-[0_24px_60px_rgba(0,0,0,0.18)] ${
          isUser
            ? 'bg-brand-500 text-white'
            : 'bg-white/[0.05] text-zinc-100 backdrop-blur-2xl'
        }`}
      >
        {!isUser && (
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-brand-300">
            ForgeMind
          </p>
        )}
        <p>{content}</p>
      </div>
    </div>
  )
}
