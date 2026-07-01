export const FEATURES = [
  {
    id: 'intelligence',
    title: 'Unified Career Intelligence',
    description:
      'One operating system that understands your goals, skills, and trajectory — not scattered tools.',
  },
  {
    id: 'orchestration',
    title: 'Orchestrated Specialists',
    description:
      'Four AI agents collaborate behind the scenes. You focus on growth; ForgeMind handles coordination.',
  },
  {
    id: 'roadmaps',
    title: 'Actionable Roadmaps',
    description:
      'From skill gaps to weekly sprints and portfolio reviews, every insight becomes a clear next step.',
  },
]

export const SPECIALISTS = [
  {
    id: 'skill-lens',
    name: 'SkillLens',
    role: 'Skills Analyst',
    description:
      'Analyzes your skills, identifies gaps, and suggests technologies to close them.',
  },
  {
    id: 'project-scout',
    name: 'ProjectScout',
    role: 'Portfolio Strategist',
    description:
      'Recommends portfolio projects tailored to your target role and skill level.',
  },
  {
    id: 'sprint-planner',
    name: 'SprintPlanner',
    role: 'Implementation Coach',
    description:
      'Creates weekly roadmaps so you know exactly what to build and learn next.',
  },
  {
    id: 'portfolio-forge',
    name: 'PortfolioForge',
    role: 'Career Reviewer',
    description:
      'Reviews your GitHub, resume, and portfolio to maximize hiring impact.',
  },
]

export const MOCK_MESSAGES = [
  {
    id: '1',
    role: 'assistant',
    content:
      'Welcome to ForgeMind — your AI Career Operating System. Share your goals and I will orchestrate the right specialists for you.',
  },
  {
    id: '2',
    role: 'user',
    content:
      'I want to move into full-stack development. I know React but need stronger backend skills.',
  },
  {
    id: '3',
    role: 'assistant',
    content:
      'Understood. I have activated SkillLens to map your skill gaps and ProjectScout to surface portfolio projects. Track their progress in the workflow panel.',
  },
]

export const MOCK_AGENTS = [
  {
    id: 'skill-lens',
    name: 'SkillLens',
    task: 'Skill gap analysis complete',
    status: 'completed',
  },
  {
    id: 'project-scout',
    name: 'ProjectScout',
    task: 'Curating portfolio projects',
    status: 'working',
  },
  {
    id: 'sprint-planner',
    name: 'SprintPlanner',
    task: 'Awaiting project selection',
    status: 'idle',
  },
  {
    id: 'portfolio-forge',
    name: 'PortfolioForge',
    task: 'Standby for review',
    status: 'idle',
  },
]

export const MOCK_REPLY =
  'I am coordinating your specialists now. SkillLens and ProjectScout are already at work — check the workflow panel for live status updates.'
