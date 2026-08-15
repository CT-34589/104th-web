import type { Metadata } from "next"
import Link from "next/link"
import { ChevronsUp, Briefcase, Award } from "lucide-react"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import PageHero from "@/components/page-hero"
import Reveal from "@/components/reveal"

export const metadata: Metadata = {
  title: "Progression — 104th Battalion Milsim",
  description: "Ranks, positions, and qualifications across the 104th Battalion.",
}

const CARDS = [
  {
    href: "/progression/ranks/",
    icon: ChevronsUp,
    name: "Ranks",
    description: "The rank structure of every branch, from Clone Cadet up to Marshal Commander.",
  },
  {
    href: "/progression/positions/",
    icon: Briefcase,
    name: "Positions",
    description: "The billets available across every branch, separate from rank.",
  },
  {
    href: "/progression/qualifications/",
    icon: Award,
    name: "Qualifications",
    description: "Skill badges and quals troopers can earn. Coming soon.",
  },
]

export default function ProgressionPage() {
  return (
    <div className="min-h-screen bg-canvas text-ink">
      <SiteHeader />
      <PageHero
        eyebrow="Chain of Command"
        title="Progression"
        description="How troopers advance through the 104th — rank, position, and the qualifications they earn along the way."
      />

      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-5 sm:grid-cols-3">
            {CARDS.map(({ href, icon: Icon, name, description }, i) => (
              <Reveal key={name} delay={i * 0.08}>
                <Link
                  href={href}
                  className="flex h-full flex-col items-center rounded-xl border border-line bg-surface p-7 text-center transition-colors hover:border-accent/40"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="mb-2 text-lg font-semibold">{name}</h2>
                  <p className="text-sm leading-relaxed text-mute">{description}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
