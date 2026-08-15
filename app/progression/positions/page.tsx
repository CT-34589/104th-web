import type { Metadata } from "next"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import PageHero from "@/components/page-hero"
import ProgressionNav from "@/components/progression-nav"
import PositionTabs from "@/components/position-tabs"

export const metadata: Metadata = {
  title: "Positions — 104th Battalion Milsim",
  description: "The billets and positions available across every branch of the 104th Battalion.",
}

export default function PositionsPage() {
  return (
    <div className="min-h-screen bg-canvas text-ink">
      <SiteHeader />
      <PageHero
        eyebrow="Progression"
        title="Positions"
        description="The billets available across every branch, separate from rank."
      />

      <section className="pb-24 pt-10">
        <div className="container mx-auto px-4 sm:px-6">
          <ProgressionNav />
          <PositionTabs />
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
