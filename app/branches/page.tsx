import type { Metadata } from "next"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import PageHero from "@/components/page-hero"
import BranchTabs from "@/components/branch-tabs"

export const metadata: Metadata = {
  title: "Branches — 104th Battalion Milsim",
  description: "The Army, Starfighter Corps, and Special Forces — the three branches of the 104th Battalion.",
}

export default function BranchesPage() {
  return (
    <div className="min-h-screen bg-canvas text-ink">
      <SiteHeader />
      <PageHero
        eyebrow="Order of Battle"
        title="Branches"
        description="Every recruit finds their place in one of three branches: the Army, the Starfighter Corps, or Special Forces."
      />

      <section className="pb-24 pt-10">
        <div className="container mx-auto px-4 sm:px-6">
          <BranchTabs />
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
