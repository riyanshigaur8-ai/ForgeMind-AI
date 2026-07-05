import { Navbar } from '@/components';
import {
  FiArrowRight,
  FiBookOpen,
  FiClock,
  FiCompass,
  FiCpu,
  FiStar,
  FiZap,
} from 'react-icons/fi';

import DashboardHero from '@/components/dashboard/DashboardHero';
import CareerScoreCard from '@/components/dashboard/CareerScoreCard';
import SkillsCard from '@/components/dashboard/SkillsCard';
import RecommendationCard from '@/components/dashboard/RecommendationCard';
import QuickActions from '@/components/dashboard/QuickActions';
import RecentActivity from '@/components/dashboard/RecentActivity';

const careerSnapshot = {
  score: 92,
  label: 'Career momentum',
  change: '+8% vs last month',
  summary: 'You are pacing ahead of your target for senior AI product roles.',
  highlights: [
    { label: 'Role fit', value: 'Product Strategy' },
    { label: 'Readiness', value: '92%' },
    { label: 'Next milestone', value: 'Lead AI roadmap' },
  ],
};

const skillHighlights = [
  { name: 'AI Product Strategy', level: 94 },
  { name: 'Prompt Engineering', level: 89 },
  { name: 'Data Storytelling', level: 86 },
  { name: 'Execution Design', level: 91 },
];

const recommendations = [
  {
    title: 'Refine your AI portfolio narrative',
    description: 'Your recent agent work aligns strongly with startup GTM roles.',
    impact: 'High impact',
  },
  {
    title: 'Prioritize a senior product case study',
    description: 'A roadmap-led project would strengthen your next interview loop.',
    impact: 'Medium impact',
  },
];

const quickActions = [
  {
    title: 'Portfolio audit',
    description: 'Tighten positioning and surface your strongest wins.',
    icon: FiStar,
  },
  {
    title: 'Skill sprint',
    description: 'Launch a focused growth sprint for leadership readiness.',
    icon: FiZap,
  },
  {
    title: 'Opportunity scan',
    description: 'Discover aligned roles and hiring signals quickly.',
    icon: FiCompass,
  },
  {
    title: 'Agent briefing',
    description: 'Prepare an executive-ready strategy note for tomorrow.',
    icon: FiCpu,
  },
];

const activities = [
  {
    title: 'Portfolio analysis completed',
    detail: '3 new strengths surfaced for AI product leadership.',
    time: '12 min ago',
    icon: FiBookOpen,
  },
  {
    title: 'Skill lens updated',
    detail: 'Prompt engineering rose to a new confidence threshold.',
    time: '1 hr ago',
    icon: FiClock,
  },
  {
    title: 'Recommendation queued',
    detail: 'A roadmap-focused project brief is now ready to review.',
    time: 'Today',
    icon: FiArrowRight,
  },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-surface text-zinc-100">
      <Navbar />

      <main className="mx-auto flex max-w-7xl flex-col gap-8 px-4 pb-14 pt-24 sm:px-6 lg:px-8 lg:pb-20">
        <DashboardHero
          name="Ava"
          title="Your next career leap is already in motion"
          description="ForgeMind is turning your work into a sharper narrative for high-growth AI roles."
          stats={[
            { label: 'Active agents', value: '6' },
            { label: 'Opportunities', value: '3' },
            { label: 'Focus score', value: '9.4/10' },
          ]}
        />

        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <CareerScoreCard {...careerSnapshot} />
            <SkillsCard skills={skillHighlights} />
          </div>

          <div className="space-y-6">
            <RecommendationCard recommendations={recommendations} />
            <QuickActions actions={quickActions} />
          </div>
        </section>

        <RecentActivity activities={activities} />
      </main>
    </div>
  );
}