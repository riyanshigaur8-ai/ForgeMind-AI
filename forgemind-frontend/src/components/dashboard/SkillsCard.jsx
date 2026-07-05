export default function SkillsCard({ skills = [], missingSkills = [] }) {
  const currentSkills = (skills || []).map((skill) =>
    typeof skill === 'string' ? skill : skill?.name || ''
  );

  const upcomingSkills = (missingSkills || []).map((skill) =>
    typeof skill === 'string' ? skill : skill?.name || ''
  );

  return (
    <section className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.24)] backdrop-blur-2xl sm:p-7">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-zinc-400">Skills Snapshot</p>
          <h2 className="mt-2 text-xl font-semibold text-white">Current Skills</h2>
        </div>
        <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-sm text-zinc-300">
          Updated today
        </span>
      </div>

      <div className="mt-6 space-y-5">
        <div className="rounded-[1.25rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-4">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-zinc-400">Current Skills</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {currentSkills.filter(Boolean).map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-brand-400/25 bg-brand-500/10 px-3 py-1.5 text-sm font-medium text-brand-200 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {upcomingSkills.filter(Boolean).length > 0 && (
          <div className="rounded-[1.25rem] border border-white/10 bg-surface/50 p-4">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-zinc-400">Missing Skills</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {upcomingSkills.filter(Boolean).map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-zinc-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
