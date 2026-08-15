import type { Metadata } from "next"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import PageHero from "@/components/page-hero"
import ImagePlaceholder from "@/components/image-placeholder"

export const metadata: Metadata = {
  title: "The Fleet — 104th Battalion Milsim",
  description: "The ships of the 104th 2nd Fleet.",
}

const SHIPS = [
  {
    name: "RAC Resilient",
    home: "Home of the Army",
    description:
      "Where the 104th Army is run. This is the main hub for army events, communications, and the home of the infantry companies.",
    image: "/images/fleet/resilient.png",
  },
  {
    name: "RAC Triumphant",
    home: "Home to the Starfighter Corps",
    description: "The home of the 104th Starfighter Corps and the main hub for SFC events and communications.",
    image: "/images/fleet/triumphant.jpg",
  },
  {
    name: "RAS Vanguard",
    home: "Home to Behind-the-Scenes Operations",
    description:
      "Home to a lot of behind-the-scenes work for the unit. The Admin, Art, Public Affairs, Standards, Security, and Operations departments are all run from this ship. It's also home to the unit's 3rd party team, the Desert Troopers.",
    image: "/images/fleet/ras-vanguard.jpg",
  },
  {
    name: "RLC Ravager",
    home: "Home to Special Forces",
    description: "Home to Special Forces, namely the Republic Commandos and ARC Troopers.",
    image: "/images/fleet/ravager.png",
  },
]

export default function FleetPage() {
  return (
    <div className="min-h-screen bg-canvas text-ink">
      <SiteHeader />
      <PageHero eyebrow="The 104th 2nd Fleet" title="The Fleet" />

      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mx-auto mb-16 max-w-3xl text-center text-sm leading-relaxed text-mute">
            <p>
              We&apos;ve taken some creative liberty in the lore of the milsim. In canon, CC-3636 &ldquo;Wolffe&rdquo; led
              the 104th alongside Jedi General Plo Koon. We&apos;ve woven in our own narrative that we are the 2nd
              Fleet, operating under MCDR Dark — a branch made up of four ships: the Resilient, the Triumphant, the
              Vanguard, and the Ravager.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2">
            {SHIPS.map((ship) => (
              <div key={ship.name} className="overflow-hidden rounded-xl border border-line bg-surface transition-colors hover:border-accent/40">
                <ImagePlaceholder
                  src={ship.image}
                  alt={`${ship.name} ship render`}
                  className="aspect-[16/9] rounded-none border-0 border-b border-line"
                />
                <div className="p-6">
                  <h3 className="mb-1 text-lg font-semibold">{ship.name}</h3>
                  <p className="mb-3 text-xs font-medium uppercase tracking-wide text-accent-bright">{ship.home}</p>
                  <p className="text-sm leading-relaxed text-mute">{ship.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
