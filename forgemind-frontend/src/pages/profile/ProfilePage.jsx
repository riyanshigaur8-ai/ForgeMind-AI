import { Navbar } from '@/components';

import ProfileHeader from '@/components/profile/ProfileHeader';
import AboutCard from '@/components/profile/AboutCard';
import SkillsCard from '@/components/profile/SkillsCard';
import EducationCard from '@/components/profile/EducationCard';
import SocialLinksCard from '@/components/profile/SocialLinksCard';
import AchievementCard from '@/components/profile/AchievementCard';

const profileData = {
  name: 'Riyanshi Gaur',
  role: 'AI Product Strategist & Career Builder',
  bio: 'Designing sharper career narratives for ambitious builders in AI and product teams.',
  location: 'Bengaluru, India',
  availability: 'Open to senior AI product roles',
  about: 'I combine product thinking, execution strategy, and AI fluency to help professionals grow into leadership-facing roles with clarity and momentum.',
  skills: ['AI Strategy', 'Product Thinking', 'Prompt Design', 'Growth Systems'],
  missingSkills: ['Leadership Storytelling', 'Go-to-Market Design', 'Advanced MLOps'],
  education: [
    {
      title: 'B.Tech in Computer Science',
      college: 'University of Engineering',
      degree: 'B.Tech',
      branch: 'Computer Science',
      currentYear: '3rd Year',
      graduationYear: '2026',
    },
  ],
  socials: [
    { label: 'GitHub', href: 'https://github.com', icon: 'github' },
    { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'linkedin' },
    { label: 'Portfolio', href: 'https://example.com', icon: 'portfolio' },
    { label: 'Email', href: 'mailto:hello@forgemind.ai', icon: 'email' },
  ],
  achievements: [
    { title: 'Joined ForgeMind', detail: 'Began your AI career journey inside the ForgeMind community.', icon: 'trophy' },
    { title: 'First AI Chat', detail: 'Completed your first intelligent career-guidance conversation.', icon: 'star' },
    { title: 'Completed Skill Analysis', detail: 'Unlocked a deeper view of your growth areas and strengths.', icon: 'spark' },
    { title: 'Resume Uploaded', detail: 'Shared your experience and background for smarter recommendations.', icon: 'briefcase' },
    { title: 'GitHub Connected', detail: 'Linked your coding profile to enrich your developer story.', icon: 'github' },
  ],
};

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-surface text-zinc-100">
      <Navbar />

      <main className="mx-auto flex max-w-7xl flex-col gap-8 px-4 pb-16 pt-24 sm:px-6 lg:px-8 lg:pb-20">
        <ProfileHeader
          name={profileData.name}
          role="AI Engineer Student"
          university="University of Engineering"
          completion={82}
          avatarFallback="RG"
          editLabel="Edit Profile"
        />

        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <AboutCard
              title="About"
              aboutMe="I build AI-first products and turn complex ideas into polished, user-centered experiences."
              careerGoal="Become a senior AI engineer who bridges product thinking, engineering craft, and thoughtful growth strategy."
              currentInterests="LLM product design, developer tooling, systems thinking, and building smarter workflows for teams."
              shortBio="I’m a curious builder focused on helping ambitious developers grow through practical AI and product fluency."
            />
            <SkillsCard
              currentSkills={profileData.skills}
              learningNext={profileData.missingSkills}
            />
          </div>

          <div className="space-y-6">
            <EducationCard education={profileData.education} />
            <SocialLinksCard links={profileData.socials} />
            <AchievementCard achievements={profileData.achievements} />
          </div>
        </section>
      </main>
    </div>
  );
}