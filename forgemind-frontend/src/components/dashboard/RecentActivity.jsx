export default function RecentActivity({ activities = [] }) {
  return (
    <section className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.24)] backdrop-blur-2xl sm:p-7">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-zinc-400">Recent activity</p>
          <h2 className="mt-2 text-xl font-semibold text-white">Timeline</h2>
        </div>
        <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-sm text-zinc-300">
          Live feed
        </span>
      </div>

      <div className="mt-6 space-y-4">
        {activities.map((item, index) => {
          const Icon = item.icon;
          const statusTone =
            item.status === 'Completed'
              ? 'border-emerald-400/30 bg-emerald-500/10 text-emerald-300'
              : item.status === 'In Progress'
                ? 'border-amber-400/30 bg-amber-500/10 text-amber-300'
                : 'border-white/10 bg-white/[0.04] text-zinc-300';

          return (
            <div key={item.title || index} className="relative pl-8">
              <span className="absolute left-0 top-2.5 h-3.5 w-3.5 rounded-full border border-brand-400/30 bg-brand-500 shadow-[0_0_0_4px_rgba(59,130,246,0.16)]" />
              <span className="absolute left-[5px] top-6 h-full w-px bg-gradient-to-b from-brand-500/60 to-transparent" />

              <div className="rounded-2xl border border-white/10 bg-surface/50 p-4 backdrop-blur">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/10 text-brand-300">
                      <Icon className="text-lg" />
                    </div>
                    <div>
                      <p className="font-medium text-white">{item.title}</p>
                      <p className="mt-1 text-sm leading-6 text-zinc-400">{item.description || item.detail}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 sm:justify-end">
                    <span className={`rounded-full border px-2.5 py-1 text-xs ${statusTone}`}>
                      {item.status || 'Updated'}
                    </span>
                    <p className="text-sm text-zinc-400">{item.timestamp || item.time}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
