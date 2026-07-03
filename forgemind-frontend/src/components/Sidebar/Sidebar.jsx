import { motion } from 'framer-motion'
import AgentStatus from '@/components/AgentStatus'

const WORKFLOW_STEPS = [
  {
    label: 'SkillLens analysis',
    description: 'Assessing your current strengths and learning gaps.',
  },
  {
    label: 'ProjectScout discovery',
    description: 'Curating high-impact portfolio opportunities.',
  },
  {
    label: 'SprintPlanner setup',
    description: 'Drafting an actionable implementation timeline.',
  },
  {
    label: 'PortfolioForge standby',
    description: 'Preparing review readiness for your profile assets.',
  },
]

export default function Sidebar({ agents }) {
  return (
    <aside className="flex h-full w-full flex-col border-l border-white/10 bg-white/[0.06] backdrop-blur-2xl lg:w-96">
      <header className="border-b border-white/10 px-5 py-4">
        <h2 className="text-base font-semibold text-white">AI Workflow</h2>
        <p className="mt-1 text-xs leading-relaxed text-zinc-500">
          Specialists work behind the scenes. ForgeMind coordinates them automatically.
        </p>
      </header>

      <div className="flex-1 overflow-y-auto p-4">
        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="rounded-[2rem] border border-white/10 bg-gradient-to-b from-surface/80 to-white/[0.06] p-5 shadow-[0_32px_80px_-34px_rgba(0,0,0,0.45)]"
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-sm font-semibold text-white">Workflow Timeline</p>
              <p className="mt-1 text-xs text-zinc-500">Live orchestration across all agents.</p>
            </div>
            <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-emerald-300">
              Active
            </span>
          </div>

          <div className="relative mt-6 pl-7">
            <div className="absolute left-3 top-3 bottom-0 w-px bg-white/10" />
            {WORKFLOW_STEPS.map((step, index) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                className="relative mb-6 last:mb-0"
              >
                <span className="absolute left-0 top-1 h-3.5 w-3.5 rounded-full border border-white/20 bg-brand-400 shadow-[0_0_0_8px_rgba(59,130,246,0.12)]" />
                <p className="text-sm font-semibold text-white">{step.label}</p>
                <p className="mt-1 text-xs leading-6 text-zinc-500">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <div className="mt-4 space-y-3">
          {agents.map((agent) => (
            <AgentStatus key={agent.id} name={agent.name} task={agent.task} status={agent.status} />
          ))}
        </div>
      </div>
    </aside>
  )
}
