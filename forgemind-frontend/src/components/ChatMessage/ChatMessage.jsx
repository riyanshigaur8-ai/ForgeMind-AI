export default function ChatMessage({ role, content }) {
  const isUser = role === 'user'

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed sm:max-w-[75%] ${
          isUser
            ? 'bg-brand-500 text-white'
            : 'glass text-zinc-200'
        }`}
      >
        {!isUser && (
          <p className="mb-1.5 text-xs font-medium text-brand-400">ForgeMind</p>
        )}
        {content}
      </div>
    </div>
  )
}
