import ChatInput from '@/components/ChatInput'
import ChatMessage from '@/components/ChatMessage'

export default function ChatBox({ messages, onSend }) {
  return (
    <div className="flex h-full flex-col">
      <header className="border-b border-white/5 px-6 py-4">
        <h1 className="text-lg font-semibold text-white">Career Assistant</h1>
        <p className="mt-1 text-sm text-zinc-500">
          One interface. ForgeMind routes your request to the right specialists.
        </p>
      </header>

      <div className="flex-1 space-y-4 overflow-y-auto px-4 py-6 sm:px-6">
        {messages.map((message) => (
          <ChatMessage key={message.id} role={message.role} content={message.content} />
        ))}
      </div>

      <ChatInput onSend={onSend} />
    </div>
  )
}
