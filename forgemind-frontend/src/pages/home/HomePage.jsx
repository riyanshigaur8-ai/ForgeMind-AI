import { motion } from 'framer-motion'
import { FEATURES, SPECIALISTS } from '@/data/mock'
import { useDocumentTitle } from '@/hooks'
import { FeatureCard, Footer, Hero, Navbar } from '@/components'
import { FloatingParticles, MouseSpotlight } from '@/components/effects'
import { fadeUp, staggerContainer } from '@/utils/motion'

export default function HomePage() {
  useDocumentTitle('ForgeMind AI — AI Career Operating System')

  return (
    <>
      <MouseSpotlight />
      <Navbar />
      <Hero />

      <section id="features" className="relative px-4 py-28 sm:px-6 sm:py-32 lg:px-8 lg:py-36">
        <FloatingParticles count={14} className="opacity-60" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.08),transparent_55%)]" />

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="mx-auto max-w-2xl text-center lg:max-w-3xl"
          >
            <motion.p variants={fadeUp} className="text-sm font-medium tracking-wide text-brand-400">
              Why ForgeMind
            </motion.p>
            <motion.h2 variants={fadeUp} className="section-heading mt-4">
              Built for career operators, not chat sessions
            </motion.h2>
            <motion.p variants={fadeUp} className="text-body mx-auto mt-5 max-w-2xl text-base sm:text-lg">
              A premium operating system that turns ambition into structured
              progress — with intelligence that works as one unified system.
            </motion.p>
          </motion.div>

          <div className="mt-16 grid gap-6 sm:mt-20 sm:gap-7 md:grid-cols-3 lg:mt-24 lg:gap-8">
            {FEATURES.map((feature, index) => (
              <FeatureCard
                key={feature.id}
                title={feature.title}
                description={feature.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <section
        id="specialists"
        className="relative border-t border-white/5 px-4 py-28 sm:px-6 sm:py-32 lg:px-8 lg:py-36"
      >
        <FloatingParticles count={12} className="opacity-50" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent" />

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="mx-auto max-w-2xl text-center lg:max-w-3xl"
          >
            <motion.p variants={fadeUp} className="text-sm font-medium tracking-wide text-brand-400">
              Meet the Specialists
            </motion.p>
            <motion.h2 variants={fadeUp} className="section-heading mt-4">
              Four agents. One orchestrated experience.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-body mx-auto mt-5 max-w-2xl text-base sm:text-lg">
              These AI specialists never appear as separate apps. ForgeMind routes
              your requests to the right agent automatically — you stay focused on
              your career, not tooling.
            </motion.p>
          </motion.div>

          <div className="mt-16 grid gap-6 sm:mt-20 sm:gap-7 sm:grid-cols-2 lg:mt-24 lg:gap-8">
            {SPECIALISTS.map((specialist, index) => (
              <FeatureCard
                key={specialist.id}
                badge={specialist.role}
                title={specialist.name}
                description={specialist.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
