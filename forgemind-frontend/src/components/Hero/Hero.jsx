import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi2'
import { AnimatedGradient } from '@/components/effects'
import { ROUTES } from '@/utils/routes'
import { heroItem, heroStagger } from '@/utils/motion'

export default function Hero() {
  return (
    <section className="relative flex min-h-svh items-center justify-center overflow-hidden px-4 pt-20 sm:px-6 sm:pt-24 lg:px-8">
      <AnimatedGradient />

      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-surface to-transparent" />

      <motion.div
        variants={heroStagger}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto w-full max-w-5xl text-center"
      >
        <motion.div
          aria-hidden
          animate={{
            scale: [0.98, 1.04, 0.98],
            opacity: [0.55, 0.92, 0.55],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute left-1/2 top-1/2 -z-10 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-400/10 shadow-[0_0_0_1px_rgba(96,165,250,0.12)] ring-1 ring-brand-400/20 blur-[90px]"
        />

        <motion.div
          variants={heroItem}
          className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.05] px-5 py-2 text-sm text-zinc-300 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] backdrop-blur-xl"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-400" />
          </span>
          AI Career Operating System
        </motion.div>

        <motion.h1
          variants={heroItem}
          className="text-display text-4xl leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.25rem]"
        >
          Orchestrate your career
          <span className="mt-4 block bg-gradient-to-r from-brand-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent sm:mt-5">
            with intelligent precision
          </span>
        </motion.h1>

        <motion.p
          variants={heroItem}
          className="text-body mx-auto mt-8 max-w-2xl text-base leading-8 text-zinc-300 sm:mt-10 sm:text-lg lg:max-w-3xl lg:text-xl"
        >
          ForgeMind is a premium AI career OS that coordinates your specialist
          agents, maps growth, and turns your skills into portfolio-ready
          momentum — all from one elegant workspace.
        </motion.p>

        <motion.div
          variants={heroItem}
          className="mt-14 flex flex-col items-center justify-center gap-4 sm:mt-16 sm:flex-row sm:gap-5"
        >
          <motion.div
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 420, damping: 22 }}
          >
            <Link to={ROUTES.REGISTER} className="cta-primary group gap-2.5">
              <motion.span
                aria-hidden
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
                initial={{ x: '-120%' }}
                animate={{ x: '120%' }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  repeatDelay: 1.4,
                  ease: 'easeInOut',
                }}
              />
              <span className="relative z-10">Start Your Journey</span>
              <HiArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 420, damping: 24 }}
          >
            <a
              href="#features"
              className="cta-secondary transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
            >
              Explore Features
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
