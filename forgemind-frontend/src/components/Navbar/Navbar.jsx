import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { ROUTES } from "@/utils/routes";

const guestLinks = [
  { label: "Features", href: "#features" },
  { label: "Specialists", href: "#specialists" },
];

export default function Navbar() {
  const { pathname } = useLocation();

  const loggedIn =
    pathname.startsWith("/dashboard") ||
    pathname.startsWith("/career-chat") ||
    pathname.startsWith("/profile") ||
    pathname.startsWith("/resume") ||
    pathname.startsWith("/github");

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55 }}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-surface/50 backdrop-blur-2xl"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        <Link to="/" className="text-xl font-bold text-white">
          ForgeMind
        </Link>

        {/* Center Navigation */}

        <nav className="hidden md:flex items-center gap-8">

          {!loggedIn &&
            guestLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-zinc-400 hover:text-white"
              >
                {link.label}
              </a>
            ))}

          {loggedIn && (
            <>
              <Link to="/dashboard" className="text-zinc-300 hover:text-white">
                Dashboard
              </Link>

              <Link to="/profile" className="text-zinc-300 hover:text-white">
                Profile
              </Link>

              <Link to="/career-chat" className="text-zinc-300 hover:text-white">
                Career Chat
              </Link>
            </>
          )}

        </nav>

        {/* Right Buttons */}

        <div className="flex items-center gap-3">

          {!loggedIn ? (
            <>
              <Link
                to="/login"
                className="rounded-full px-4 py-2 text-zinc-300 hover:text-white"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="rounded-full bg-brand-500 px-5 py-2 text-white"
              >
                Register
              </Link>
            </>
          ) : (
            <Link
              to="/"
              className="rounded-full bg-red-500 px-5 py-2 text-white"
            >
              Logout
            </Link>
          )}

        </div>

      </div>
    </motion.header>
  );
}