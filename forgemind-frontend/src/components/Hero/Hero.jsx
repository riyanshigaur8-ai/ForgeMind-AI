import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi2'
import { ROUTES } from '@/utils/routes'

export default function Hero() {
  return (
    <section className="relative flex min-h-svh items-center justify-center overflow-hidden px-4 pt-16 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{ x: [0, 80, 0], y: [0, -40, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -left-24 top-1/4 h-[28rem] w-[28rem] rounded-full bg-brand-600/25 blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -60, 0], y: [0, 50, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -right-16 top-1/3 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl"
        />
        <motion.div
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.12),transparent_60%)]"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-zinc-300 backdrop-blur-sm"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
          AI Career Operating System
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Orchestrate your career
          <span className="block bg-gradient-to-r from-brand-400 via-blue-300 to-indigo-400 bg-clip-text text-transparent">
            with intelligent precision
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg"
        >
          ForgeMind is not a chatbot. It is a career operating system that
          coordinates specialized AI agents to analyze skills, plan sprints, and
          forge your portfolio — all in one unified workspace.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link
            to={ROUTES.CAREER_CHAT}
            className="group inline-flex items-center gap-2 rounded-full bg-brand-500 px-8 py-3.5 text-sm font-semibold text-white shadow-xl shadow-brand-500/30 transition hover:bg-brand-600"
          >
            Start Your Journey
            <HiArrowRight className="transition-transform group-hover:translate-x-0.5" />
          </Link>
          <a
            href="#features"
            className="rounded-full border border-white/10 px-8 py-3.5 text-sm font-medium text-zinc-300 transition hover:border-white/20 hover:text-white"
          >
            Explore Features
          </a>
        </motion.div>
      </div>
    </section>
  )
}
