import { motion } from 'framer-motion'
import { FEATURES, SPECIALISTS } from '@/data/mock'
import { useDocumentTitle } from '@/hooks'
import { FeatureCard, Footer, Hero, Navbar } from '@/components'

export default function HomePage() {
  useDocumentTitle('ForgeMind AI — AI Career Operating System')

  return (
    <>
      <Navbar />
      <Hero />

      <section id="features" className="relative px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <p className="text-sm font-medium text-brand-400">Why ForgeMind</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Built for career operators, not chat sessions
            </h2>
            <p className="mt-4 text-zinc-400">
              A premium operating system that turns ambition into structured
              progress — with intelligence that works as one unified system.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
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
        className="relative border-t border-white/5 px-4 py-24 sm:px-6 lg:px-8"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.08),transparent_50%)]" />

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <p className="text-sm font-medium text-brand-400">Meet the Specialists</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Four agents. One orchestrated experience.
            </h2>
            <p className="mt-4 text-zinc-400">
              These AI specialists never appear as separate apps. ForgeMind routes
              your requests to the right agent automatically — you stay focused on
              your career, not tooling.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2">
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
