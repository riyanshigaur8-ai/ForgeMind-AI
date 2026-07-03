import { motion } from 'framer-motion'

export default function AnimatedGradient({ className = '' }) {
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 ${className}`}>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#0a0a0f_0%,#0d1117_45%,#0a0a0f_100%)]" />

      <motion.div
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0 opacity-80 bg-[length:200%_200%] bg-[linear-gradient(115deg,rgba(37,99,235,0.22)_0%,rgba(99,102,241,0.12)_35%,rgba(14,165,233,0.08)_55%,rgba(37,99,235,0.18)_100%)]"
      />

      <motion.div
        animate={{ x: [0, 90, 0], y: [0, -50, 0], scale: [1, 1.12, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -left-32 top-[15%] h-[32rem] w-[32rem] rounded-full bg-brand-600/30 blur-[100px]"
      />

      <motion.div
        animate={{ x: [0, -70, 0], y: [0, 60, 0], scale: [1, 1.18, 1] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -right-24 top-[20%] h-96 w-96 rounded-full bg-indigo-500/25 blur-[90px]"
      />

      <motion.div
        animate={{ opacity: [0.25, 0.55, 0.25] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.16),transparent_62%)]"
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.04),transparent_45%)]" />
    </div>
  )
}
