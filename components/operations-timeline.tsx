"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useReducedMotion } from "framer-motion"
import Reveal from "@/components/reveal"
import ImagePlaceholder from "@/components/image-placeholder"
import { cn } from "@/lib/utils"

export interface Operation {
  name: string
  translation: string
  date: string
  organiser: string
  winner: string
  image?: string
  description: string
}

function scrollToElement(el: HTMLElement) {
  const lenis = window.__lenis
  if (lenis) {
    lenis.scrollTo(el, { offset: -96, duration: 1.2 })
  } else {
    const top = el.getBoundingClientRect().top + window.scrollY - 96
    window.scrollTo({ top, behavior: "smooth" })
  }
}

function TimelineRail({
  operations,
  activeIndex,
  onSelect,
}: {
  operations: Operation[]
  activeIndex: number
  onSelect: (index: number) => void
}) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <nav className="sticky top-32 hidden self-start md:block" aria-label="Operations timeline">
      <ul className="relative flex flex-col gap-7 border-l border-line pl-6">
        {operations.map((op, i) => {
          const active = i === activeIndex
          return (
            <li key={op.name} className="relative">
              <button
                onClick={() => onSelect(i)}
                className="group flex items-center gap-3 text-left"
                aria-current={active ? "true" : undefined}
              >
                <span className="absolute -left-[calc(1.5rem+7px)] h-3.5 w-3.5 rounded-full border-2 border-mute bg-canvas" />
                {active && (
                  <motion.span
                    layoutId="rail-active-dot"
                    className="absolute -left-[calc(1.5rem+7px)] h-3.5 w-3.5 rounded-full border-2 border-accent bg-accent"
                    transition={prefersReducedMotion ? { duration: 0 } : { type: "spring", stiffness: 320, damping: 32 }}
                  />
                )}
                <span className="flex flex-col">
                  <span
                    className={cn(
                      "text-xs uppercase tracking-wide transition-colors",
                      active ? "font-medium text-ink" : "text-mute group-hover:text-ink",
                    )}
                  >
                    {op.date}
                  </span>
                  <span className={cn("max-w-[11rem] truncate text-sm transition-colors", active ? "text-accent-bright" : "text-mute/70")}>
                    {op.name.replace(/^Operation /, "")}
                  </span>
                </span>
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default function OperationsTimeline({ operations }: { operations: Operation[] }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const itemRefs = useRef<(HTMLLIElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = itemRefs.current.findIndex((el) => el === entry.target)
            if (index !== -1) setActiveIndex(index)
          }
        })
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    )

    itemRefs.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const handleSelect = (index: number) => {
    const el = itemRefs.current[index]
    if (el) scrollToElement(el)
  }

  return (
    <div className="grid grid-cols-1 gap-12 md:grid-cols-[15rem_1fr]">
      <TimelineRail operations={operations} activeIndex={activeIndex} onSelect={handleSelect} />

      <ol className="flex flex-col">
        {operations.map((op, i) => (
          <li key={op.name} ref={(el) => { itemRefs.current[i] = el }} className="mb-16 scroll-mt-24 last:mb-0">
            <Reveal delay={i * 0.06}>
              <p className="mb-1 text-xs font-medium uppercase tracking-wide text-accent-bright">{op.date}</p>
              <h2 className="text-2xl font-semibold tracking-tight">{op.name}</h2>
              <p className="mb-4 text-sm italic text-mute">&ldquo;{op.translation}&rdquo;</p>

              <ImagePlaceholder src={op.image} alt={`${op.name} operation banner`} className="mb-4 aspect-[16/9] w-full" />

              <div className="mb-4 flex flex-wrap gap-x-6 gap-y-1 text-sm text-mute">
                <span>
                  <span className="text-ink/70">Organiser:</span> {op.organiser}
                </span>
                <span>
                  <span className="text-ink/70">Winner:</span>{" "}
                  <span className="font-medium text-accent-bright">{op.winner}</span>
                </span>
              </div>

              <p className="text-sm leading-relaxed text-mute">{op.description}</p>
            </Reveal>
          </li>
        ))}
      </ol>
    </div>
  )
}
