import { useState } from 'react'
import { MOCK_AGENTS, MOCK_MESSAGES, MOCK_REPLY } from '@/data/mock'
import { useDocumentTitle } from '@/hooks'
import { ChatBox, Navbar, Sidebar } from '@/components'

export default function CareerChatPage() {
  useDocumentTitle('Workspace — ForgeMind AI')

  const [messages, setMessages] = useState(MOCK_MESSAGES)
  const [agents] = useState(MOCK_AGENTS)

  function handleSend(content) {
    const userMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content,
    }

    const assistantMessage = {
      id: `assistant-${Date.now()}`,
      role: 'assistant',
      content: MOCK_REPLY,
    }

    setMessages((current) => [...current, userMessage, assistantMessage])
  }

  return (
    <div className="flex h-svh flex-col">
      <Navbar />

      <div className="flex min-h-0 flex-1 flex-col pt-16 lg:flex-row">
        <main className="glass-strong min-h-0 flex-1 lg:rounded-none">
          <ChatBox messages={messages} onSend={handleSend} />
        </main>

        <Sidebar agents={agents} />
      </div>
    </div>
  )
}
