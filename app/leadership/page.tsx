import type { Metadata } from "next"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import PageHero from "@/components/page-hero"
import Reveal from "@/components/reveal"
import ImagePlaceholder from "@/components/image-placeholder"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Leadership — 104th Battalion Milsim",
  description: "The leadership team of the 104th Battalion.",
}

interface Officer {
  name: string
  id: string
  titles: string[]
  image?: string
}

const TIER_1: Officer[] = [
  { name: "MCDR Dark", id: "CT-4936", titles: ["Fleet Commander", "Community Owner"], image: "/images/leadership/dark.png" },
]

const TIER_2: Officer[] = [
  { name: "SCDR Warpath", id: "CT-5384", titles: ["Senior Commander", "Fleet Executive", "Advisor"], image: "/images/leadership/warpath.png" },
  { name: "MSHL Rain", id: "CT-9266", titles: ["Air Marshal", "Fleet Executive", "Advisor"], image: "/images/leadership/rain.png" },
]

const TIER_3: Officer[] = [
  { name: "BCDR Shatterstorm", id: "CT-5384", titles: ["Head of Army"], image: "/images/leadership/shatterstorm.png" },
  { name: "COM Snips", id: "CT-22-690", titles: ["Head of Starfighter Corps"], image: "/images/leadership/snips.png" },
  { name: "CDR Fox", id: "RC-0-0801", titles: ["SF Commander", "Head of Special Forces", "Head of RC Branch"], image: "/images/leadership/fox.png" },
  { name: "ACDR Vanok", id: "ARC-15346", titles: ["ARC Commander", "Head of ARC Trooper Branch"], image: "/images/leadership/vanok.png" },
]

const PLATFORM_COMMANDERS: Officer[] = [
  { name: "CDR Feedback", id: "CT-12982", titles: ["Commander", "Head of Xbox Army"], image: "/images/leadership/feedback.png" },
  { name: "CDR Deranged", id: "CT-7992", titles: ["Commander", "Head of PS Army"], image: "/images/leadership/deranged.png" },
  { name: "CDR Liveshot", id: "CT-31430", titles: ["Commander", "Head of PC Army", "Head of Combat Training"] },
]

const EXECUTIVE_OFFICERS: Officer[] = [
  { name: "MAJ Dymphna", id: "CT-11181", titles: ["Major", "Head of Leadership Training", "Executive of Xbox Army"] },
  { name: "MAJ Uchiha", id: "CT-15535", titles: ["Major", "Head of Officer Training", "Executive of PS Army"], image: "/images/leadership/uchiha.png" },
  { name: "TCDR Evolution", id: "CT-31421", titles: ["Technical Commander", "Director of Intelligence"], image: "/images/leadership/evolution.png" },
  { name: "WCDR Entity", id: "CT-22-880", titles: ["Wing Commander", "Executive of Starfighter Corps"], image: "/images/leadership/entity.png" },
  { name: "RCPT Mink", id: "RC-2-4436", titles: ["RC Captain", "Executive of RC Branch"], image: "/images/leadership/mink.png" },
  { name: "AMAJ Garmr", id: "ARC-22-786", titles: ["ARC Major", "Executive of ARC Branch"], image: "/images/leadership/garmr.png" },
  { name: "AMAJ Katana", id: "ARC-14912", titles: ["ARC Major", "Executive of ARC Branch"] },
]

function OfficerPortrait({ officer, size, delay }: { officer: Officer; size: "lg" | "md" | "sm"; delay: number }) {
  const imageSize = {
    lg: "w-44 sm:w-56",
    md: "w-36 sm:w-44",
    sm: "w-28 sm:w-36",
  }[size]
  const nameSize = {
    lg: "text-xl",
    md: "text-lg",
    sm: "text-base",
  }[size]

  return (
    <Reveal delay={delay}>
      <div className="flex flex-col items-center text-center">
        <ImagePlaceholder
          src={officer.image}
          alt={`${officer.name} portrait`}
          className={cn(imageSize, "aspect-square rounded-full border-2 border-line bg-surface transition-colors hover:border-accent/50")}
        />
        <h3 className={cn(nameSize, "mt-4 font-semibold")}>{officer.name}</h3>
        <p className="mb-2 text-xs text-mute">{officer.id}</p>
        <ul className="space-y-0.5">
          {officer.titles.map((title) => (
            <li key={title} className="text-xs text-accent-bright">
              {title}
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  )
}

function OfficerRow({ officers, delayOffset = 0 }: { officers: Officer[]; delayOffset?: number }) {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {officers.map((officer, i) => (
        <Reveal key={officer.name} delay={delayOffset + i * 0.06} className="w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(25%-0.75rem)]">
          <div className="flex h-full items-center gap-4 rounded-xl border border-line bg-surface p-4 transition-colors hover:border-accent/40">
            <ImagePlaceholder src={officer.image} alt={`${officer.name} portrait`} className="aspect-square w-20 shrink-0" />
            <div className="min-w-0">
              <h4 className="text-sm font-semibold">{officer.name}</h4>
              <p className="mb-1 text-[11px] text-mute">{officer.id}</p>
              <ul className="space-y-0.5">
                {officer.titles.map((title) => (
                  <li key={title} className="text-[11px] text-accent-bright">
                    {title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  )
}

export default function LeadershipPage() {
  return (
    <div className="min-h-screen bg-canvas text-ink">
      <SiteHeader />
      <PageHero
        eyebrow="Command Staff"
        title="Leadership Team"
        description="The chain of command, from fleet command down to branch executives."
      />

      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-16">
            <div className="flex flex-wrap justify-center gap-x-16 gap-y-10">
              {TIER_1.map((officer, i) => (
                <OfficerPortrait key={officer.name} officer={officer} size="lg" delay={i * 0.08} />
              ))}
            </div>

            <div className="h-10 w-px bg-line" />

            <div className="flex flex-wrap justify-center gap-x-16 gap-y-10">
              {TIER_2.map((officer, i) => (
                <OfficerPortrait key={officer.name} officer={officer} size="md" delay={i * 0.08} />
              ))}
            </div>

            <div className="h-10 w-px bg-line" />

            <div className="flex flex-wrap justify-center gap-x-12 gap-y-10">
              {TIER_3.map((officer, i) => (
                <OfficerPortrait key={officer.name} officer={officer} size="sm" delay={i * 0.06} />
              ))}
            </div>
          </div>

          <div className="mx-auto mt-24 max-w-5xl">
            <Reveal>
              <h2 className="mb-8 text-center text-2xl font-semibold tracking-tight">Army Platform Commanders</h2>
            </Reveal>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-10">
              {PLATFORM_COMMANDERS.map((officer, i) => (
                <OfficerPortrait key={officer.name} officer={officer} size="sm" delay={i * 0.06} />
              ))}
            </div>
          </div>

          <div className="mx-auto mt-16 max-w-5xl">
            <Reveal>
              <h2 className="mb-8 text-center text-2xl font-semibold tracking-tight">Executive Officers</h2>
            </Reveal>
            <OfficerRow officers={EXECUTIVE_OFFICERS} />
          </div>

          <Reveal className="mx-auto mt-16 max-w-2xl text-center text-sm text-mute">
            <p>Renders of the remaining officers&apos; helmets and shoulders are coming soon.</p>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
