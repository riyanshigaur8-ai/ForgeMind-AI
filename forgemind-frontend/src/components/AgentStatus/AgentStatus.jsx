import { HiCheck, HiMinus } from 'react-icons/hi2'
import { motion } from 'framer-motion'

const STATUS_CONFIG = {
  idle: {
    label: 'Idle',
    dot: 'bg-zinc-500',
    ring: 'ring-zinc-500/20',
    border: 'border-white/10',
    bg: 'bg-white/[0.04]',
    text: 'text-zinc-400',
    progress: '25%',
  },
  working: {
    label: 'Working',
    dot: 'bg-brand-400',
    ring: 'ring-brand-500/30',
    border: 'border-brand-500/30',
    bg: 'bg-brand-500/10',
    text: 'text-brand-300',
    progress: '70%',
  },
  completed: {
    label: 'Completed',
    dot: 'bg-emerald-400',
    ring: 'ring-emerald-500/30',
    border: 'border-emerald-500/30',
    bg: 'bg-emerald-500/10',
    text: 'text-emerald-300',
    progress: '100%',
  },
}

export default function AgentStatus({ name, task, status = 'idle' }) {
  const config = STATUS_CONFIG[status] ?? STATUS_CONFIG.idle

  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: 12 }}
      animate={{ opacity: 1, x: 0 }}
      className={`rounded-[1.75rem] border border-white/10 bg-white/[0.05] p-5 shadow-[0_28px_60px_rgba(0,0,0,0.18)] backdrop-blur-2xl`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-white">{name}</p>
          <p className="mt-1 truncate text-xs text-zinc-400">{task}</p>
        </div>

        <StatusIndicator status={status} config={config} />
      </div>

      <div className="mt-4 rounded-2xl border border-white/10 bg-surface/80 p-3">
        <div className="flex items-center justify-between text-xs uppercase tracking-[0.24em] text-zinc-500">
          <span>Progress</span>
          <span className={`font-semibold ${config.text}`}>{config.label}</span>
        </div>
        <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-2.5 rounded-full bg-gradient-to-r from-brand-400 via-sky-400 to-indigo-400 transition-all duration-500"
            style={{ width: config.progress }}
          />
        </div>
      </div>
    </motion.div>
  )
}

function StatusIndicator({ status, config }) {
  if (status === 'completed') {
    return (
      <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ring-1 ${config.ring} ${config.bg}`}>
        <HiCheck className="h-4 w-4 text-emerald-400" />
      </span>
    )
  }

  if (status === 'working') {
    return (
      <span className={`relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full ring-1 ${config.ring} ${config.bg}`}>
        <span className="absolute inset-0 animate-ping rounded-full bg-brand-400/20" />
        <span className={`relative h-3 w-3 rounded-full ${config.dot}`} />
      </span>
    )
  }

  return (
    <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ring-1 ${config.ring} ${config.bg}`}>
      <HiMinus className="h-3.5 w-3.5 text-zinc-500" />
    </span>
  )
}
