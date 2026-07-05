export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-surface px-6 text-center text-zinc-200">
      <div className="max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/30 backdrop-blur-xl">
        <p className="text-sm font-medium uppercase tracking-[0.24em] text-cyan-300/80">404</p>
        <h1 className="mt-3 text-3xl font-semibold text-white">Page not found</h1>
        <p className="mt-3 text-sm leading-6 text-zinc-400">
          The route you requested does not exist yet. Head back home or visit the dashboard to continue exploring.
        </p>
      </div>
    </div>
  )
}
