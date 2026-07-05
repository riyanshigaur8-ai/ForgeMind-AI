import { motion } from 'framer-motion'

export default function AboutCard({
  title = 'About Me',
  aboutMe = '',
  careerGoal = '',
  currentInterests = '',
  shortBio = '',
}) {
  const sections = [
    { label: 'About Me', value: aboutMe },
    { label: 'Career Goal', value: careerGoal },
    { label: 'Current Interests', value: currentInterests },
    { label: 'Short Bio', value: shortBio },
  ]

  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      whileHover={{ y: -4, scale: 1.01, transition: { type: 'spring', stiffness: 220, damping: 24 } }}
      className="rounded-[1.75rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.10),rgba(255,255,255,0.04))] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.24)] backdrop-blur-2xl sm:p-8"
    >
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200/80">{title}</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-[-0.02em] text-white">Developer story</h2>
        </div>
        <div className="hidden h-10 w-10 rounded-full border border-cyan-400/20 bg-cyan-400/10 sm:block" />
      </div>

      <div className="space-y-5">
        {sections.map((section) => (
          <motion.div
            key={section.label}
            whileHover={{ y: -2, scale: 1.01, transition: { type: 'spring', stiffness: 220, damping: 20 } }}
            className="rounded-[1.2rem] border border-white/10 bg-slate-950/30 p-4"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-zinc-400">{section.label}</p>
            <p className="mt-2 text-sm leading-7 text-zinc-300">{section.value}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
