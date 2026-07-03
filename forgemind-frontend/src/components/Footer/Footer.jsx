import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ROUTES } from '@/utils/routes'
import { fadeUp } from '@/utils/motion'

export default function Footer() {
  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      variants={fadeUp}
      className="relative border-t border-white/5 bg-surface-elevated/60 backdrop-blur-xl"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-4 py-12 sm:flex-row sm:px-6 lg:px-8 lg:py-14">
        <p className="text-sm text-zinc-500">
          &copy; {new Date().getFullYear()} ForgeMind AI. All rights reserved.
        </p>
        <div className="flex flex-wrap justify-center gap-6 text-sm text-zinc-500 sm:justify-end">
          <Link to={ROUTES.CAREER_CHAT} className="transition-colors duration-300 hover:text-zinc-300">
            Workspace
          </Link>
          <a href="#features" className="transition-colors duration-300 hover:text-zinc-300">
            Features
          </a>
          <a href="#specialists" className="transition-colors duration-300 hover:text-zinc-300">
            Specialists
          </a>
        </div>
      </div>
    </motion.footer>
  )
}
