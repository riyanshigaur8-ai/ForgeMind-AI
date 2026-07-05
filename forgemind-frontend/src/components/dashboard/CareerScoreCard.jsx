export default function CareerScoreCard({ score = 92, description = 'You are on track for a strong next step.', label = 'Career Readiness' }) {
  const safeScore = Math.min(Math.max(Number(score) || 0, 0), 100);

  return (
    <section className="group rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.24)] backdrop-blur-2xl transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(0,0,0,0.3)] sm:p-7">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-zinc-400">{label}</p>
          <div className="mt-3 flex items-end gap-3">
            <span className="text-5xl font-semibold tracking-[-0.04em] text-white">{safeScore}%</span>
            <span className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2.5 py-1 text-sm text-emerald-300">
              Ahead of target
            </span>
          </div>
          <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-400">{description}</p>
        </div>

        <div className="flex h-24 w-24 items-center justify-center rounded-full border border-brand-400/30 bg-gradient-to-br from-brand-500/20 to-cyan-400/10 text-3xl font-semibold text-brand-300 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]">
          {safeScore}%
        </div>
      </div>

      <div className="mt-6">
        <div className="mb-2 flex items-center justify-between text-sm text-zinc-400">
          <span>Progress</span>
          <span>{safeScore}%</span>
        </div>
        <div className="h-2.5 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-gradient-to-r from-brand-500 via-cyan-400 to-emerald-400 transition-all duration-700 ease-out"
            style={{ width: `${safeScore}%` }}
          />
        </div>
      </div>
    </section>
  );
}
