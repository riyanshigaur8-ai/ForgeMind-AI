import { motion } from 'framer-motion'

export default function EducationCard({ education = [] }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      whileHover={{ y: -4, scale: 1.01, transition: { type: 'spring', stiffness: 220, damping: 24 } }}
      className="rounded-[1.75rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.10),rgba(255,255,255,0.04))] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.24)] backdrop-blur-2xl sm:p-8"
    >
      <div className="mb-6">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200/80">Education</p>
        <h2 className="mt-2 text-2xl font-semibold tracking-[-0.02em] text-white">Academic Journey</h2>
      </div>

      <div className="space-y-4">
        {education.map((item) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            whileHover={{ y: -2, scale: 1.01, transition: { type: 'spring', stiffness: 220, damping: 20 } }}
            className="relative rounded-[1.25rem] border border-white/10 bg-slate-950/35 p-5 pl-6"
          >
            <div className="absolute left-2.5 top-6 h-3 w-3 rounded-full border border-cyan-400/40 bg-cyan-400/70 shadow-[0_0_16px_rgba(34,211,238,0.35)]" />
            <div className="ml-3">
              <p className="text-lg font-semibold text-white">{item.college}</p>
              <p className="mt-2 text-sm font-medium text-cyan-200">{item.degree} • {item.branch}</p>
              <div className="mt-4 flex flex-wrap gap-3 text-sm text-zinc-300">
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Current Year: {item.currentYear}</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Graduation: {item.graduationYear}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
