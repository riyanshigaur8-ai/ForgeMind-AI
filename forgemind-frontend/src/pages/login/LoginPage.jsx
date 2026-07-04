import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import { apiClient } from '@/services/api'
import { useAuth } from '@/context/AuthContext'

export default function LoginPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const { login } = useAuth()

  const from = location.state?.from?.pathname || '/career-chat'

  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  async function handleSubmit(e) {
    e.preventDefault()

    setLoading(true)
    setError('')

    try {
      const data = await apiClient.login(form)

      login(data)

      navigate(from, {
        replace: true,
      })
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <h1 className="mb-2 text-3xl font-bold text-white">
        Welcome Back
      </h1>

      <p className="mb-8 text-zinc-400">
        Sign in to ForgeMind
      </p>

      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none"
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none"
        />

        {error && (
          <p className="text-sm text-red-400">
            {error}
          </p>
        )}

        <button
          disabled={loading}
          className="w-full rounded-xl bg-brand-500 py-3 font-semibold text-white transition hover:bg-brand-600"
        >
          {loading ? 'Signing In...' : 'Login'}
        </button>

        <p className="text-center text-zinc-400">
          Don't have an account?{' '}
          <Link
            to="/register"
            className="text-brand-400"
          >
            Register
          </Link>
        </p>
      </form>
    </>
  )
}