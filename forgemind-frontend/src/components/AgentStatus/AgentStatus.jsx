import { HiCheck, HiMinus } from 'react-icons/hi2'
import { motion } from 'framer-motion'

const STATUS_CONFIG = {
  idle: {
    label: 'Idle',
    dot: 'bg-zinc-500',
    ring: 'ring-zinc-500/20',
    border: 'border-white/10',
    bg: 'bg-white/[0.03]',
    text: 'text-zinc-500',
  },
  working: {
    label: 'Working',
    dot: 'bg-brand-400',
    ring: 'ring-brand-500/30',
    border: 'border-brand-500/30',
    bg: 'bg-brand-500/10',
    text: 'text-brand-400',
  },
  completed: {
    label: 'Completed',
    dot: 'bg-emerald-400',
    ring: 'ring-emerald-500/30',
    border: 'border-emerald-500/30',
    bg: 'bg-emerald-500/10',
    text: 'text-emerald-400',
  },
}

export default function AgentStatus({ name, task, status = 'idle' }) {
  const config = STATUS_CONFIG[status] ?? STATUS_CONFIG.idle

  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: 12 }}
      animate={{ opacity: 1, x: 0 }}
      className={`rounded-xl border p-4 ${config.border} ${config.bg} backdrop-blur-sm`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-white">{name}</p>
          <p className="mt-1 truncate text-xs text-zinc-400">{task}</p>
        </div>
        <StatusIndicator status={status} config={config} />
      </div>
      <p className={`mt-3 text-xs font-medium ${config.text}`}>{config.label}</p>
    </motion.div>
  )
}

function StatusIndicator({ status, config }) {
  if (status === 'completed') {
    return (
      <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ring-1 ${config.ring} ${config.bg}`}>
        <HiCheck className="h-4 w-4 text-emerald-400" />
      </span>
    )
  }

  if (status === 'working') {
    return (
      <span className={`relative flex h-7 w-7 shrink-0 items-center justify-center rounded-full ring-1 ${config.ring} ${config.bg}`}>
        <span className="absolute inset-0 animate-ping rounded-full bg-brand-400/30" />
        <span className={`relative h-2.5 w-2.5 rounded-full ${config.dot}`} />
      </span>
    )
  }

  return (
    <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ring-1 ${config.ring} ${config.bg}`}>
      <HiMinus className="h-3.5 w-3.5 text-zinc-500" />
    </span>
  )
}
