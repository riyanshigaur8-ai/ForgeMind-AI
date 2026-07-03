import { useMemo } from 'react'
import { motion } from 'framer-motion'

export default function FloatingParticles({ count = 28, className = '' }) {
  const particles = useMemo(
    () =>
      Array.from({ length: count }, (_, index) => ({
        id: index,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: Math.random() * 2.5 + 1,
        duration: Math.random() * 12 + 14,
        delay: Math.random() * 6,
        drift: Math.random() * 40 + 20,
      })),
    [count],
  )

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute rounded-full bg-brand-400/50 shadow-[0_0_14px_rgba(96,165,250,0.55)]"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -particle.drift, 0],
            x: [0, particle.drift * 0.25, 0],
            opacity: [0.15, 0.75, 0.15],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}
