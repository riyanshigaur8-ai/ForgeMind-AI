import { motion } from 'framer-motion'

export default function SkillsCard({
  title = 'Skills',
  currentSkills = [],
  learningNext = [],
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      whileHover={{ y: -4, scale: 1.01, transition: { type: 'spring', stiffness: 220, damping: 24 } }}
      className="rounded-[1.75rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.10),rgba(255,255,255,0.04))] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.24)] backdrop-blur-2xl sm:p-8"
    >
      <div className="mb-6">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200/80">{title}</p>
        <h2 className="mt-2 text-2xl font-semibold tracking-[-0.02em] text-white">Current Skills</h2>
      </div>

      <div className="flex flex-wrap gap-2.5">
        {currentSkills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3.5 py-2 text-sm font-medium text-cyan-100 shadow-[0_0_20px_rgba(34,211,238,0.08)]"
          >
            {skill}
          </span>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.08, duration: 0.35, ease: 'easeOut' }}
        whileHover={{ y: -2, scale: 1.01, transition: { type: 'spring', stiffness: 220, damping: 20 } }}
        className="mt-7 rounded-[1.25rem] border border-white/10 bg-slate-950/35 p-4 sm:p-5"
      >
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-zinc-400">Learning Next</p>
            <p className="mt-1 text-sm text-zinc-300">Focused growth areas for the next milestone.</p>
          </div>
          <div className="rounded-full border border-violet-400/20 bg-violet-400/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-violet-200">
            Next
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2.5">
          {learningNext.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-violet-400/20 bg-violet-500/10 px-3.5 py-2 text-sm font-medium text-violet-100"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.section>
  )
}
