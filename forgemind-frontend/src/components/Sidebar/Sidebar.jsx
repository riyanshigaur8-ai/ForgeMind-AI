import AgentStatus from '@/components/AgentStatus'

export default function Sidebar({ agents }) {
  return (
    <aside className="flex h-full w-full flex-col border-l border-white/5 bg-white/[0.02] backdrop-blur-xl lg:w-96">
      <header className="border-b border-white/5 px-5 py-4">
        <h2 className="text-base font-semibold text-white">AI Workflow</h2>
        <p className="mt-1 text-xs leading-relaxed text-zinc-500">
          Specialists work behind the scenes. ForgeMind coordinates them
          automatically — you never switch agents manually.
        </p>
      </header>

      <div className="flex-1 space-y-3 overflow-y-auto p-4">
        {agents.map((agent) => (
          <AgentStatus
            key={agent.id}
            name={agent.name}
            task={agent.task}
            status={agent.status}
          />
        ))}
      </div>
    </aside>
  )
}
