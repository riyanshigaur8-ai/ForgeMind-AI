import { Link } from 'react-router-dom'
import { ROUTES } from '@/utils/routes'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-surface-elevated/50">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-10 sm:flex-row sm:px-6 lg:px-8">
        <p className="text-sm text-zinc-500">
          &copy; {new Date().getFullYear()} ForgeMind AI. All rights reserved.
        </p>
        <div className="flex gap-6 text-sm text-zinc-500">
          <Link to={ROUTES.CAREER_CHAT} className="transition hover:text-zinc-300">
            Workspace
          </Link>
          <a href="#features" className="transition hover:text-zinc-300">
            Features
          </a>
          <a href="#specialists" className="transition hover:text-zinc-300">
            Specialists
          </a>
        </div>
      </div>
    </footer>
  )
}
