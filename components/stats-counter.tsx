"use client"

import { useState, useEffect, type ReactNode } from "react"

interface StatsCounterProps {
  icon: ReactNode
  value: number
  label: string
  description: string
}

export default function StatsCounter({ icon, value, label, description }: StatsCounterProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000 // ms
    const interval = 50 // ms
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
    <div className="bg-zinc-800/50 p-6 rounded-lg border border-zinc-700 text-center hover:border-blue-600 transition-colors">
      <div className="flex justify-center mb-4">{icon}</div>
      <div className="text-4xl font-bold mb-2 text-white">
        {count.toLocaleString()}
        {value === 1800 ? "+" : ""}
      </div>
      <div className="text-xl font-semibold mb-1 text-blue-400">{label}</div>
      <div className="text-zinc-400 text-sm">{description}</div>
    </div>
  )
}
