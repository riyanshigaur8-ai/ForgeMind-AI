import { AnimatePresence, motion } from 'framer-motion'
import ChatInput from '@/components/ChatInput'
import ChatMessage from '@/components/ChatMessage'

export default function ChatBox({ messages, onSend, isTyping, isProcessing }) {
  return (
    <div className="flex h-full flex-col">
      <header className="border-b border-white/5 px-6 py-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-lg font-semibold text-white">Career Assistant</h1>
            <p className="mt-1 text-sm text-zinc-500">
              One interface. ForgeMind routes your request to the right specialists.
            </p>
          </div>

          {isProcessing && (
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-400/15 bg-brand-500/10 px-3 py-2 text-xs text-brand-200">
              <span className="h-2.5 w-2.5 rounded-full bg-brand-400 animate-pulse" />
              Processing workflow...
            </div>
          )}
        </div>
      </header>

      <div className="flex-1 overflow-hidden px-4 py-6 sm:px-6">
        <div className="flex h-full flex-col gap-4 overflow-y-auto pr-2">
          <AnimatePresence initial={false}>
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              >
                <ChatMessage role={message.role} content={message.content} />
              </motion.div>
            ))}

            {isTyping && (
              <motion.div
                key="typing-indicator"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex justify-start">
                  <div className="glass relative inline-flex items-center gap-3 rounded-[2rem] border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-zinc-300 shadow-[0_18px_46px_rgba(0,0,0,0.18)] backdrop-blur-2xl">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.06]">
                      <span className="h-3 w-3 rounded-full bg-brand-400 animate-pulse" />
                    </div>

                    <div className="space-y-1">
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-300">
                        ForgeMind is typing
                      </p>
                      <div className="flex items-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-brand-400 animate-pulse" />
                        <span className="h-2.5 w-2.5 rounded-full bg-brand-400/70 animate-pulse" />
                        <span className="h-2.5 w-2.5 rounded-full bg-brand-400/40 animate-pulse" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <ChatInput onSend={onSend} disabled={isProcessing} />
    </div>
  )
}
