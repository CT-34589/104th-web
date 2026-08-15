"use client"

import { useState, useEffect, type ReactNode } from "react"

interface StatsCounterProps {
  icon: ReactNode
  value: number
  label: string
  description: string
  suffix?: string
}

export default function StatsCounter({ icon, value, label, description, suffix = "" }: StatsCounterProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 1600 // ms
    const interval = 40 // ms
    const steps = duration / interval
    const increment = value / steps

    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, interval)

    return () => clearInterval(timer)
  }, [value])

  return (
    <div className="flex flex-col items-center gap-3 py-8 text-center">
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/10 text-accent">{icon}</div>
      <div className="text-3xl font-semibold tabular-nums text-ink sm:text-4xl">
        {count.toLocaleString()}
        {suffix}
      </div>
      <div>
        <div className="text-sm font-medium text-ink/90">{label}</div>
        <div className="mt-0.5 text-sm text-mute">{description}</div>
      </div>
    </div>
  )
}
