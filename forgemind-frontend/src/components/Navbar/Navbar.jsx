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
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-surface/70 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to={ROUTES.HOME} className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-500/20 text-sm font-bold text-brand-400 ring-1 ring-brand-500/30">
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
                className="text-sm text-zinc-400 transition-colors hover:text-white"
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
              className="rounded-full px-4 py-2 text-sm text-zinc-400 transition-colors hover:text-white"
            >
              Home
            </Link>
          ) : (
            <Link
              to={ROUTES.CAREER_CHAT}
              className="rounded-full bg-brand-500 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-brand-500/25 transition hover:bg-brand-600"
            >
              Open Workspace
            </Link>
          )}
        </div>
      </div>
    </motion.header>
  )
}
