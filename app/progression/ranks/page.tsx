import type { Metadata } from "next"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import PageHero from "@/components/page-hero"
import ProgressionNav from "@/components/progression-nav"
import RankTabs from "@/components/rank-tabs"

export const metadata: Metadata = {
  title: "Ranks — 104th Battalion Milsim",
  description: "The rank structure of the 104th Battalion, from Clone Cadet up to Marshal Commander.",
}

export default function RanksPage() {
  return (
    <div className="min-h-screen bg-canvas text-ink">
      <SiteHeader />
      <PageHero
        eyebrow="Progression"
        title="Ranks"
        description="Every branch progresses through its own rank structure, lowest to highest."
      />

      <section className="pb-24 pt-10">
        <div className="container mx-auto px-4 sm:px-6">
          <ProgressionNav />
          <RankTabs />
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
