"use client"

import type { ReactNode } from "react"
import { motion, useReducedMotion } from "framer-motion"

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
}

export default function Reveal({ children, className, delay = 0, y = 24 }: RevealProps) {
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px 0px" }}
      variants={{
        hidden: { opacity: 0, y },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  )
}
