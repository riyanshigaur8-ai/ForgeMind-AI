import { useState } from 'react'
import { apiClient } from '@/services/api'
import { useDocumentTitle } from '@/hooks'
import { ChatBox, Navbar, Sidebar } from '@/components'
import { MOCK_AGENTS, MOCK_MESSAGES, MOCK_REPLY } from '@/data/mock'

export default function CareerChatPage() {
  useDocumentTitle('Workspace — ForgeMind AI')

  const [messages, setMessages] = useState(MOCK_MESSAGES)
  const [agents, setAgents] = useState(MOCK_AGENTS)
  const [isTyping, setIsTyping] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)

  async function handleSend(content) {
  const userMessage = {
    id: `user-${Date.now()}`,
    role: 'user',
    content,
  }

  setMessages((current) => [...current, userMessage])

  setIsTyping(true)
  setIsProcessing(true)

  try {
    const response = await apiClient.sendMessage({
      message: content,
    })

    const assistantMessage = {
      id: `assistant-${Date.now()}`,
      role: 'assistant',
      content: response.response,
    }

    setMessages((current) => [...current, assistantMessage])

    setAgents((current) =>
      current.map((agent) => ({
        ...agent,
        status: 'completed',
        task: 'Completed',
      })),
    )
  } catch (error) {
    const assistantMessage = {
      id: `assistant-${Date.now()}`,
      role: 'assistant',
      content:
        '⚠️ Unable to connect to ForgeMind backend. Please make sure the backend server is running.',
    }

    setMessages((current) => [...current, assistantMessage])

    console.error(error)
  } finally {
    setIsTyping(false)
    setIsProcessing(false)
  }
}

  return (
    <div className="flex h-svh flex-col">
      <Navbar />

      <div className="flex min-h-0 flex-1 flex-col pt-16 lg:flex-row">
        <main className="glass-strong min-h-0 flex-1 lg:rounded-none">
          <ChatBox
            messages={messages}
            onSend={handleSend}
            isTyping={isTyping}
            isProcessing={isProcessing}
          />
        </main>

        <Sidebar agents={agents} />
      </div>
    </div>
  )
}
