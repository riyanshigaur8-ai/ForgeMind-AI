import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi2'
import { EASE_OUT } from '@/utils/motion'

export default function FeatureCard({
  title,
  description,
  index = 0,
  badge,
  icon: Icon,
  actionLabel,
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 36, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.65,
        delay: index * 0.12,
        ease: EASE_OUT,
      }}
      whileHover={{ y: -6, scale: 1.01 }}
      className="glass-card group p-6 sm:p-8 lg:p-9"
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-brand-500/15 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-brand-500/[0.04]" />
      </div>

      <div className="relative">
        {badge && (
          <span className="mb-5 inline-block rounded-full border border-brand-500/20 bg-brand-500/10 px-3.5 py-1 text-xs font-medium tracking-wide text-brand-400 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]">
            {badge}
          </span>
        )}
        {Icon && (
          <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-brand-400 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]">
            <Icon className="h-5 w-5" />
          </div>
        )}
        <h3 className="text-lg font-semibold tracking-tight text-white sm:text-xl">
          {title}
        </h3>
        <p className="text-body mt-3.5 text-sm leading-7 sm:text-[0.95rem]">{description}</p>

        {actionLabel && (
          <motion.button
            type="button"
            whileHover={{ y: -2, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className="mt-6 inline-flex items-center rounded-full border border-brand-500/20 bg-brand-500/10 px-4 py-2 text-sm font-medium text-brand-300 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] transition-colors duration-300 hover:border-brand-400/30 hover:bg-brand-500/15"
          >
            <span>{actionLabel}</span>
            <HiArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </motion.button>
        )}
      </div>
    </motion.article>
  )
}
