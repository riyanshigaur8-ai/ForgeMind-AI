import {
  FiBookOpen,
  FiCompass,
  FiCpu,
  FiFileText,
} from 'react-icons/fi';

const defaultActions = [
  {
    id: 'career-chat',
    title: 'Career Chat',
    subtitle: 'Talk with your AI strategist',
    icon: FiCpu,
    onClick: () => {},
  },
  {
    id: 'resume-review',
    title: 'Resume Review',
    subtitle: 'Improve your positioning instantly',
    icon: FiFileText,
    onClick: () => {},
  },
  {
    id: 'project-ideas',
    title: 'Project Ideas',
    subtitle: 'Generate standout concepts',
    icon: FiCompass,
    onClick: () => {},
  },
  {
    id: 'learning-roadmap',
    title: 'Learning Roadmap',
    subtitle: 'Plan your next growth sprint',
    icon: FiBookOpen,
    onClick: () => {},
  },
];

export default function QuickActions({ actions = defaultActions, onActionClick }) {
  return (
    <section className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.24)] backdrop-blur-2xl sm:p-7">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-zinc-400">Quick actions</p>
          <h2 className="mt-2 text-xl font-semibold text-white">Accelerate your momentum</h2>
        </div>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <button
              key={action.id || action.title}
              type="button"
              onClick={() => {
                if (action.onClick) action.onClick();
                if (onActionClick) onActionClick(action);
              }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-surface/50 p-4 text-left transition duration-300 hover:-translate-y-1 hover:border-transparent"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-500/15 via-transparent to-cyan-400/10 opacity-0 transition duration-300 group-hover:opacity-100" />
              <div className="absolute inset-0 rounded-2xl border border-transparent bg-[linear-gradient(135deg,rgba(255,255,255,0.2),transparent,rgba(255,255,255,0.06))] opacity-0 transition duration-300 group-hover:opacity-100" />
              <div className="relative">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/10 text-brand-300 transition duration-300 group-hover:scale-105 group-hover:bg-brand-500/20">
                  <Icon className="text-lg" />
                </div>
                <p className="mt-3 font-medium text-white">{action.title}</p>
                <p className="mt-1 text-sm leading-6 text-zinc-400">{action.subtitle || action.description}</p>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
