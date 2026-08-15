import type { Metadata } from "next"
import { Award } from "lucide-react"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import PageHero from "@/components/page-hero"
import ProgressionNav from "@/components/progression-nav"

export const metadata: Metadata = {
  title: "Qualifications — 104th Battalion Milsim",
  description: "The qualifications troopers can earn across the 104th Battalion.",
}

export default function QualificationsPage() {
  return (
    <div className="min-h-screen bg-canvas text-ink">
      <SiteHeader />
      <PageHero
        eyebrow="Progression"
        title="Qualifications"
        description="Skill badges and quals troopers can earn on top of rank and position."
      />

      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <ProgressionNav />
          <div className="mx-auto flex max-w-md flex-col items-center gap-4 rounded-xl border border-dashed border-line bg-surface p-12 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
              <Award className="h-6 w-6" />
            </div>
            <h2 className="text-lg font-semibold">Coming Soon</h2>
            <p className="text-sm text-mute">We&apos;re still gathering the full list of qualifications. Check back soon.</p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
