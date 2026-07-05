import { motion } from 'framer-motion'
import { FiAward, FiStar, FiZap, FiBriefcase, FiGithub } from 'react-icons/fi'

const iconMap = {
  trophy: FiAward,
  star: FiStar,
  spark: FiZap,
  briefcase: FiBriefcase,
  github: FiGithub,
}

export default function AchievementCard({ achievements = [] }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      whileHover={{ y: -4, scale: 1.01, transition: { type: 'spring', stiffness: 220, damping: 24 } }}
      className="rounded-[1.75rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.10),rgba(255,255,255,0.04))] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.24)] backdrop-blur-2xl sm:p-8"
    >
      <div className="mb-6">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200/80">Milestones</p>
        <h2 className="mt-2 text-2xl font-semibold tracking-[-0.02em] text-white">Achievements</h2>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {achievements.map((item) => {
          const Icon = iconMap[item.icon] || FiAward

          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              whileHover={{ y: -2, scale: 1.01, transition: { type: 'spring', stiffness: 220, damping: 20 } }}
              className="rounded-[1.2rem] border border-white/10 bg-slate-950/35 p-4"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-200">
                  <Icon className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{item.title}</p>
                  <p className="text-sm leading-6 text-zinc-400">{item.detail}</p>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </motion.section>
  )
}
