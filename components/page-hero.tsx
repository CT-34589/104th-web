import type { ReactNode } from "react"
import Reveal from "@/components/reveal"

export default function PageHero({ eyebrow, title, description }: { eyebrow: string; title: string; description?: ReactNode }) {
  return (
    <section className="border-b border-line bg-surface pb-16 pt-32">
      <div className="container mx-auto px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-wide text-accent-bright">{eyebrow}</p>
          <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">{title}</h1>
          {description && <p className="mt-4 text-balance text-lg text-mute">{description}</p>}
        </Reveal>
      </div>
    </section>
  )
}
