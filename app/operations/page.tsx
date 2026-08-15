import type { Metadata } from "next"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import PageHero from "@/components/page-hero"
import OperationsTimeline from "@/components/operations-timeline"

export const metadata: Metadata = {
  title: "Operations — 104th Battalion Milsim",
  description: "A chronicle of major operations run by the 104th Battalion.",
}

const OPERATIONS = [
  {
    name: "Operation Barycir",
    translation: "Operation Deploy",
    date: "June 2021",
    organiser: "MCDR Sinker",
    winner: "Full Unit",
    image: "/images/operations/barycir.png",
    description:
      "All 104th platoons competed against one another to get the most wins as the Republic faction in Capital Supremacy with full raid rules by the end of the operation.",
  },
  {
    name: "Operation Akalenedat",
    translation: "Operation Hard Contact",
    date: "June 2022",
    organiser: "MCDR Sinker",
    winner: "Full Unit",
    image: "/images/operations/akalenedat.png",
    description:
      "A full-scale campaign where the 104th had to maintain control over all planets throughout the operation, with each platoon's required win count per planet per day scaled to their relative size. Air superiority was required at all times, with the Starfighter Corps needing to win 5 games in a row consistently to allow the Army to keep raiding on the surface.",
  },
  {
    name: "Operation Oyula Shukalar",
    translation: "Operation Galactic Conquer",
    date: "December 2023",
    organiser: "MCDR Dark",
    winner: "Valkyrie Company",
    image: "/images/operations/oyula-shukalar.jpg",
    description:
      "All of the Battalion's Companies, Special Forces troops, and Starfighter wings competed to see who could get a win in every single gamemode, on every map, with every faction, first.",
  },
  {
    name: "Operation K'ragala",
    translation: "Operation Stay Strong",
    date: "December 2024",
    organiser: "MAJ Uchiha",
    winner: "Full Unit",
    image: "/images/operations/kragala.png",
    description:
      "The 104th had to work together to recapture planets taken under CIS control. Each planet had its own space blockade and ground infantry that needed to be defeated before it was declared captured — 5 Starfighter Assault wins to break each blockade, and 30 wins on the ground to fully capture. Losing enough campaigns on the ground meant the blockade had to be broken again.",
  },
  {
    name: "Operation Ge'tal Akaanir Kebiin",
    translation: "Operation Red vs Blue",
    date: "January 2025",
    organiser: "MCDR Dark, COM Snips",
    winner: "Team Blue",
    image: "/images/operations/red-vs-blue.png",
    description:
      "The whole of the 104th divided into two teams: Red and Blue. The teams competed in PvP games on weekends, across multiple gamemodes, against the corresponding team on their console.",
  },
  {
    name: "Operation Dral Ca'nara",
    translation: "Operation Bright Time",
    date: "July 2025",
    organiser: "WO Pending",
    winner: "C Troop",
    image: "/images/operations/dral-canara.png",
    description:
      "The 104th's platoons and troops competed against each other across a week of different in-game objectives across multiple planets. Objectives ranged from kills, wins, and score — the platoon with the most per planet by the end of the day took control of it, adding that planet's points value to their total. Highest total by the end of the operation won.",
  },
  {
    name: "Operation Cuyanir",
    translation: "Operation Survive",
    date: "December 2025",
    organiser: "WO Blllzo, ASGT Cliffjumper",
    winner: "Full Unit",
    image: "/images/operations/cuyanir.png",
    description:
      "Each weekend the 104th worked together to complete an in-game objective — a number of wins, or a target score — accompanied by a detailed in-lore story where completing tasks affected the outcome. Each completed task unlocked different quals, weapons, and reinforcements fitting the lore. During the week, Discord tasks like a message count in global or a headcount in one VC kept the story moving.",
  },
]

export default function OperationsPage() {
  return (
    <div className="min-h-screen bg-canvas text-ink">
      <SiteHeader />
      <PageHero
        eyebrow="Battalion History"
        title="Operations"
        description="Major campaigns the 104th has run since 2021, in the order they happened."
      />

      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mx-auto max-w-5xl">
            <OperationsTimeline operations={OPERATIONS} />
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
