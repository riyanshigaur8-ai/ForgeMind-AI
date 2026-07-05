import { motion } from 'framer-motion'

export default function ProfileHeader({
  avatarUrl,
  avatarFallback = 'RG',
  name,
  role,
  university,
  completion = 78,
  editLabel = 'Edit Profile',
  onEdit,
}) {
  const safeCompletion = Math.min(100, Math.max(0, Number(completion) || 0))

  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      whileHover={{ y: -4, scale: 1.01, transition: { type: 'spring', stiffness: 220, damping: 24 } }}
      className="overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.22),_transparent_38%),linear-gradient(135deg,rgba(255,255,255,0.10),rgba(255,255,255,0.04))] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:p-8 lg:p-10"
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
          <div className="relative h-24 w-24 shrink-0 rounded-full border border-white/15 bg-gradient-to-br from-cyan-400/30 via-sky-500/20 to-violet-500/30 p-[2px] shadow-[0_0_40px_rgba(34,211,238,0.18)]">
            {avatarUrl ? (
              <img
                src={avatarUrl}
                alt={`${name} avatar`}
                className="h-full w-full rounded-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center rounded-full bg-slate-950/90 text-xl font-semibold text-white">
                {avatarFallback}
              </div>
            )}
          </div>

          <div className="max-w-2xl">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-200">
              <span className="h-2 w-2 rounded-full bg-cyan-400" />
              Developer profile
            </div>
            <h1 className="text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
              {name}
            </h1>
            <p className="mt-2 text-lg font-medium text-cyan-200">{role}</p>
            <p className="mt-2 text-sm text-zinc-300">{university}</p>

            <div className="mt-5 max-w-md">
              <div className="mb-2 flex items-center justify-between text-sm text-zinc-300">
                <span>Profile completion</span>
                <span className="font-medium text-white">{safeCompletion}%</span>
              </div>
              <div className="h-2.5 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-sky-500 to-violet-500"
                  style={{ width: `${safeCompletion}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        <motion.button
          type="button"
          onClick={onEdit}
          whileHover={{ y: -2, scale: 1.02, transition: { type: 'spring', stiffness: 220, damping: 20 } }}
          className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/15 hover:shadow-[0_12px_30px_rgba(34,211,238,0.16)]"
        >
          {editLabel}
        </motion.button>
      </div>
    </motion.section>
  )
}
