export default function DashboardHero({
  name = 'Riyanshi',
  title = 'Your next opportunity is already taking shape',
  subtitle = 'ForgeMind AI Career Operating System helps you turn your work into a sharper, smarter career story.',
  readiness = 92,
  recommendation = 'Build a leadership-focused case study around your latest AI initiative.',
  stats = [],
}) {
  return (
    <section className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.28),_transparent_38%),linear-gradient(135deg,rgba(255,255,255,0.1),rgba(255,255,255,0.03))] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.3)] backdrop-blur-2xl transition duration-300 hover:-translate-y-1 hover:shadow-[0_32px_90px_rgba(0,0,0,0.34)] sm:p-8 lg:p-10">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.06),transparent)] opacity-70" />
      <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_bottom_right,_rgba(16,185,129,0.12),_transparent_35%)]" />

      <div className="relative flex flex-col gap-8 lg:flex-row lg:items-stretch lg:justify-between">
        <div className="max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-400/25 bg-brand-500/10 px-3 py-1 text-sm text-brand-200">
            <span className="h-2 w-2 rounded-full bg-brand-400" />
            AI career intelligence live
          </div>

          <p className="text-sm font-medium uppercase tracking-[0.24em] text-zinc-400">
            Welcome back, <span className="font-semibold text-white">{name} 👋</span>
          </p>
          <h1 className="mt-3 text-balance text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl lg:text-[2.5rem]">
            {title}
          </h1>
          <p className="mt-3 max-w-xl text-base leading-7 text-zinc-300 sm:text-lg">
            {subtitle}
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="rounded-[1.25rem] border border-white/10 bg-surface/60 p-4 backdrop-blur">
              <p className="text-sm text-zinc-400">Career Readiness</p>
              <div className="mt-2 flex items-end gap-2">
                <span className="text-3xl font-semibold text-white">{readiness}%</span>
                <span className="mb-1 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2 py-1 text-xs text-emerald-300">
                  Ahead of target
                </span>
              </div>
            </div>

            <div className="rounded-[1.25rem] border border-white/10 bg-surface/60 p-4 backdrop-blur">
              <p className="text-sm text-zinc-400">Today's Recommendation</p>
              <p className="mt-2 text-sm leading-6 text-zinc-300">{recommendation}</p>
            </div>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-3 lg:min-w-[24rem]">
          {stats.map((item) => (
            <div key={item.label} className="rounded-[1.25rem] border border-white/10 bg-surface/60 px-4 py-3 backdrop-blur transition duration-200 hover:border-brand-400/30 hover:bg-white/[0.08]">
              <p className="text-2xl font-semibold text-white">{item.value}</p>
              <p className="mt-1 text-sm text-zinc-400">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
