import { Outlet } from 'react-router-dom'

export default function AuthLayout() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-surface">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#2563eb22,transparent_60%)]" />

      <div className="relative z-10 w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-2xl">
        <Outlet />
      </div>
    </div>
  )
}