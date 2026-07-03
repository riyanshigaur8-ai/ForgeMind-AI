import { useEffect } from 'react'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'

export default function MouseSpotlight() {
  const x = useMotionValue(-500)
  const y = useMotionValue(-500)
  const spotlight = useMotionTemplate`radial-gradient(720px circle at ${x}px ${y}px, rgba(59, 130, 246, 0.14), transparent 75%)`

  useEffect(() => {
    function handleMove(event) {
      x.set(event.clientX)
      y.set(event.clientY)
    }

    window.addEventListener('mousemove', handleMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMove)
  }, [x, y])

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 hidden md:block"
      style={{ background: spotlight }}
    />
  )
}
