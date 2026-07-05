export default function RecommendationCard({
  title = "Today's Recommendation",
  description = 'A focused action to sharpen your career momentum.',
  estimatedTime = '15 min',
  careerImpact = 'High impact',
  icon: Icon,
}) {
  return (
    <section className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.24)] backdrop-blur-2xl sm:p-7">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-zinc-400">AI Recommendation</p>
          <h2 className="mt-2 text-xl font-semibold text-white">{title}</h2>
        </div>
      </div>

      <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.09),rgba(255,255,255,0.03))] p-5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex-1">
            <p className="text-sm leading-7 text-zinc-300">{description}</p>
          </div>
          {Icon && (
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-brand-400/25 bg-brand-500/10 text-brand-300 shadow-[0_0_24px_rgba(59,130,246,0.15)]">
              <Icon className="animate-pulse text-2xl" />
            </div>
          )}
        </div>

        <div className="mt-4 flex flex-wrap gap-3">
          <div className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-zinc-300">
            <span className="text-zinc-400">Estimated Time:</span> {estimatedTime}
          </div>
          <div className="rounded-full border border-brand-400/25 bg-brand-500/10 px-3 py-1.5 text-sm text-brand-200">
            <span className="text-brand-100">Career Impact:</span> {careerImpact}
          </div>
        </div>
      </div>
    </section>
  );
}
