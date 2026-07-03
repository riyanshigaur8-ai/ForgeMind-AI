import { useState } from 'react'
import { useDocumentTitle } from '@/hooks'
import { ChatBox, Navbar, Sidebar } from '@/components'
import { MOCK_AGENTS, MOCK_MESSAGES, MOCK_REPLY } from '@/data/mock'

export default function CareerChatPage() {
  useDocumentTitle('Workspace — ForgeMind AI')

  const [messages, setMessages] = useState(MOCK_MESSAGES)
  const [agents, setAgents] = useState(MOCK_AGENTS)
  const [isTyping, setIsTyping] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)

  function handleSend(content) {
    const userMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content,
    }

    setMessages((current) => [...current, userMessage])
    setIsProcessing(true)
    setIsTyping(true)

    setAgents((current) =>
      current.map((agent) => {
        if (agent.id === 'project-scout') {
          return { ...agent, status: 'working', task: 'Curating a portfolio path' }
        }

        if (agent.id === 'sprint-planner') {
          return { ...agent, status: 'working', task: 'Preparing sprint structure' }
        }

        return agent
      }),
    )

    setTimeout(() => {
      setIsTyping(false)
    }, 1200)

    setTimeout(() => {
      const assistantMessage = {
        id: `assistant-${Date.now()}`,
        role: 'assistant',
        content: MOCK_REPLY,
      }

      setMessages((current) => [...current, assistantMessage])
      setIsProcessing(false)

      setAgents((current) =>
        current.map((agent) => {
          if (agent.id === 'skill-lens') {
            return { ...agent, status: 'completed', task: 'Skill gap analysis complete' }
          }

          if (agent.id === 'project-scout') {
            return { ...agent, status: 'completed', task: 'Portfolio project set' }
          }

          if (agent.id === 'sprint-planner') {
            return { ...agent, status: 'working', task: 'Fine-tuning the roadmap' }
          }

          return agent
        }),
      )
    }, 2200)
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
