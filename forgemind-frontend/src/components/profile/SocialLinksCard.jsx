import { motion } from 'framer-motion'
import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail, FiGlobe } from 'react-icons/fi'

const iconMap = {
  github: FiGithub,
  linkedin: FiLinkedin,
  portfolio: FiGlobe,
  email: FiMail,
}

export default function SocialLinksCard({ links = [] }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      whileHover={{ y: -4, scale: 1.01, transition: { type: 'spring', stiffness: 220, damping: 24 } }}
      className="rounded-[1.75rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.10),rgba(255,255,255,0.04))] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.24)] backdrop-blur-2xl sm:p-8"
    >
      <div className="mb-6">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200/80">Connections</p>
        <h2 className="mt-2 text-2xl font-semibold tracking-[-0.02em] text-white">Social Links</h2>
      </div>

      <div className="space-y-3">
        {links.map((link) => {
          const Icon = iconMap[link.icon] || FiGlobe

          return (
            <motion.div
              key={link.label}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              whileHover={{ y: -2, scale: 1.01, transition: { type: 'spring', stiffness: 220, damping: 20 } }}
              className="flex items-center justify-between gap-3 rounded-[1.1rem] border border-white/10 bg-slate-950/35 px-4 py-3.5"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-200">
                  <Icon className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{link.label}</p>
                  <p className="text-xs text-zinc-400">{link.href.replace(/^https?:\/\//, '')}</p>
                </div>
              </div>

              <motion.a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -1, scale: 1.02, transition: { type: 'spring', stiffness: 220, damping: 20 } }}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-zinc-200 transition hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-white"
              >
                Visit
                <FiArrowUpRight className="h-4 w-4" />
              </motion.a>
            </motion.div>
          )
        })}
      </div>
    </motion.section>
  )
}
