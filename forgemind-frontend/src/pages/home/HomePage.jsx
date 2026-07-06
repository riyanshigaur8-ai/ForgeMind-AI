import { motion } from 'framer-motion'
import {
  HiAcademicCap,
  HiBriefcase,
  HiCalendarDays,
  HiCpuChip,
  HiMap,
  HiPresentationChartBar,
  HiRocketLaunch,
} from 'react-icons/hi2'
import { FEATURES } from '@/data/mock'
import { useDocumentTitle } from '@/hooks'
import { FeatureCard, Footer, Hero, Navbar } from '@/components'
import { FloatingParticles, MouseSpotlight } from '@/components/effects'
import { fadeUp, staggerContainer } from '@/utils/motion'

const WHY_FORGEMIND_FEATURES = [
  {
    id: 'specialists',
    title: 'AI Career Specialists',
    description:
      'Collaborate with intelligent AI specialists dedicated to skills, projects, planning, and portfolio growth.',
    icon: HiCpuChip,
  },
  {
    id: 'roadmaps',
    title: 'Personalized Roadmaps',
    description:
      'Receive tailored learning paths based on your current skills, career goals, and progress.',
    icon: HiMap,
  },
  {
    id: 'portfolio',
    title: 'Portfolio Builder',
    description:
      'Transform ideas into production-ready projects with guided execution and AI recommendations.',
    icon: HiPresentationChartBar,
  },
  {
    id: 'internships',
    title: 'Internship Preparation',
    description:
      'Prepare for internships with resume feedback, project suggestions, interview readiness, and continuous guidance.',
    icon: HiAcademicCap,
  },
]

const AI_SPECIALISTS = [
  {
    id: 'skilllens',
    title: 'SkillLens',
    description:
      'Analyzes your current skills, identifies strengths and weaknesses, detects skill gaps, and recommends the next technologies you should master.',
    icon: HiCpuChip,
  },
  {
    id: 'projectscout',
    title: 'ProjectScout',
    description:
      'Recommends portfolio projects, AI applications, GitHub ideas, and software solutions perfectly aligned with your career goals.',
    icon: HiRocketLaunch,
  },
  {
    id: 'sprintplanner',
    title: 'SprintPlanner',
    description:
      'Creates personalized weekly learning plans, project execution strategies, and milestone-based career roadmaps.',
    icon: HiCalendarDays,
  },
  {
    id: 'portfolioforge',
    title: 'PortfolioForge',
    description:
      'Improves your resume, GitHub profile, LinkedIn presence, and portfolio to maximize internship opportunities.',
    icon: HiBriefcase,
  },
]

export default function HomePage() {
  useDocumentTitle('ForgeMind AI — AI Career Operating System')

  return (
    <>
      <MouseSpotlight />
      <Navbar />
      <Hero />

      <section className="relative border-t border-white/5 px-4 py-28 sm:px-6 sm:py-32 lg:px-8 lg:py-36">
        <FloatingParticles count={10} className="opacity-40" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.07),transparent_55%)]" />

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="mx-auto max-w-2xl text-center lg:max-w-3xl"
          >
            <motion.p variants={fadeUp} className="text-sm font-medium tracking-wide text-brand-400">
              Why ForgeMind?
            </motion.p>
            <motion.h2 variants={fadeUp} className="section-heading mt-4">
              Why ForgeMind?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-body mx-auto mt-5 max-w-2xl text-base sm:text-lg">
              Everything you need to grow from student to industry-ready developer in one AI-powered platform.
            </motion.p>
          </motion.div>

          <div className="mt-16 grid gap-6 sm:mt-20 sm:gap-7 md:grid-cols-2 lg:mt-24 lg:gap-8">
            {WHY_FORGEMIND_FEATURES.map((feature, index) => (
              <FeatureCard
                key={feature.id}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="relative border-t border-white/5 px-4 py-28 sm:px-6 sm:py-32 lg:px-8 lg:py-36">
        <FloatingParticles count={10} className="opacity-35" />
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
              Meet Your AI Specialists
            </motion.p>
            <motion.h2 variants={fadeUp} className="section-heading mt-4">
              Meet Your AI Specialists
            </motion.h2>
            <motion.p variants={fadeUp} className="text-body mx-auto mt-5 max-w-2xl text-base sm:text-lg">
              ForgeMind is powered by a team of specialized AI agents that collaborate to guide every stage of your career journey.
            </motion.p>
          </motion.div>

          <div className="mt-16 grid gap-6 sm:mt-20 sm:gap-7 md:grid-cols-2 lg:mt-24 lg:gap-8">
            {AI_SPECIALISTS.map((specialist, index) => (
              <FeatureCard
                key={specialist.id}
                title={specialist.title}
                description={specialist.description}
                icon={specialist.icon}
                actionLabel="Learn More"
                index={index}
              />
            ))}
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="mx-auto mt-12 max-w-3xl text-center"
          >
            <p className="text-sm leading-8 text-zinc-400 sm:text-base">
              Each specialist focuses on one responsibility, working together to create your personalized AI Career Operating System.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-brand-500/20 bg-brand-500/10 px-4 py-2 text-sm text-brand-300 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]">
              <span aria-hidden className="text-base">✨</span>
              <span>Powered by Google ADK Multi-Agent Architecture</span>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  )
}
