import { motion } from 'framer-motion'

export default function FeatureCard({ title, description, index = 0, badge }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass group rounded-2xl p-6 transition hover:border-white/20 hover:bg-white/[0.07] sm:p-8"
    >
      {badge && (
        <span className="mb-4 inline-block rounded-full bg-brand-500/10 px-3 py-1 text-xs font-medium text-brand-400 ring-1 ring-brand-500/20">
          {badge}
        </span>
      )}
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-zinc-400">{description}</p>
    </motion.article>
  )
}
