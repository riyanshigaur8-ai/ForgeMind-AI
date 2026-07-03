import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ROUTES } from '@/utils/routes'

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Specialists', href: '#specialists' },
]

export default function Navbar() {
  const { pathname } = useLocation()
  const isWorkspace = pathname === ROUTES.CAREER_CHAT

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-surface/50 shadow-[0_8px_32px_rgba(0,0,0,0.18)] backdrop-blur-2xl"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-[4.25rem] sm:px-6 lg:px-8">
        <Link to={ROUTES.HOME} className="group flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-500/15 text-sm font-bold text-brand-400 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] ring-1 ring-brand-500/30 transition group-hover:bg-brand-500/25">
            F
          </span>
          <span className="text-sm font-semibold tracking-tight text-white sm:text-base">
            ForgeMind
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {!isWorkspace &&
            navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-zinc-400 transition-colors duration-300 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          {isWorkspace && (
            <span className="text-sm font-medium text-brand-400">Workspace</span>
          )}
        </nav>

        <div className="flex items-center gap-3">
          {isWorkspace ? (
            <Link
              to={ROUTES.HOME}
              className="rounded-full px-4 py-2 text-sm text-zinc-400 transition-colors duration-300 hover:text-white"
            >
              Home
            </Link>
          ) : (
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link
                to={ROUTES.CAREER_CHAT}
                className="rounded-full bg-brand-500 px-4 py-2 text-sm font-medium text-white shadow-[0_10px_30px_-10px_rgba(59,130,246,0.65)] transition-colors duration-300 hover:bg-brand-600"
              >
                Open Workspace
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </motion.header>
  )
}
