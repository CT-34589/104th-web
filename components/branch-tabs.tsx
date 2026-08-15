"use client"

import Image from "next/image"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import Reveal from "@/components/reveal"
import ImagePlaceholder from "@/components/image-placeholder"
import { cn } from "@/lib/utils"

const BRANCH_ICONS = {
  army: "/images/branches/army.svg",
  starfighter: "/images/branches/starfighter-corps.webp",
  "special-forces": "/images/branches/special-forces.png",
}

const PLATFORMS = [
  {
    name: "Xbox",
    companies: [
      { name: "Ares", platoons: ["Howler", "Taurus", "Scrapper"], image: "/images/companies/ares.png" },
      { name: "Havoc", platoons: ["Gunner", "Titan"], image: "/images/companies/havoc.jpg" },
    ],
  },
  {
    name: "PlayStation",
    companies: [
      { name: "Valkyrie", platoons: ["Solstice", "Dawn"], image: "/images/companies/valkyrie.png" },
      { name: "Monarch", platoons: ["Ice", "Hound"], image: "/images/companies/monarch.png" },
    ],
  },
  {
    name: "PC",
    companies: [
      { name: "Vanguard", platoons: ["Fang", "Storm", "Spectre"], image: "/images/companies/vanguard.png" },
      { name: "Horizon", platoons: ["Corvus", "Iridium"], image: "/images/companies/horizon.png" },
    ],
  },
]

const UNITS = {
  starfighter: {
    name: "Starfighter Corps",
    image: "/images/units/starfighter-corps.png",
    home: "RAC Triumphant",
    description:
      "Elite pilots flying escort, interception, and orbital support for every operation. Recruits train and rank up separately from the ground companies, working directly alongside the fleet rather than a platform-specific platoon.",
  },
  specialForces: {
    name: "44th Special Operations Division",
    tagline: "Selective entry",
    image: "/images/units/special-forces.png",
    home: "RLC Ravager",
    description:
      "Reconnaissance, infiltration, and high-stakes operations beyond the scope of a standard company. Entry is selective and limited to proven veterans, with its own chain of command outside the platform structure.",
  },
}

const TRIGGER_CLASS = cn(
  "rounded-none border-b-2 border-transparent bg-transparent px-1 pb-3 pt-0 text-sm font-medium text-mute shadow-none transition-colors",
  "hover:text-ink",
  "data-[state=active]:border-accent data-[state=active]:bg-transparent data-[state=active]:text-ink data-[state=active]:shadow-none",
)

function UnitFeature({ unit, icon }: { unit: (typeof UNITS)[keyof typeof UNITS]; icon: string }) {
  return (
    <div className="mx-auto grid max-w-4xl grid-cols-1 items-center gap-8 md:grid-cols-2">
      <ImagePlaceholder src={unit.image} alt={unit.name} className="aspect-[4/3] w-full" />
      <div>
        <div className="relative mb-4 h-11 w-11 shrink-0">
          <Image src={icon} alt="" fill className="object-contain" />
        </div>
        <h2 className="mb-1 text-2xl font-semibold tracking-tight">{unit.name}</h2>
        {"tagline" in unit && (
          <p className="mb-4 text-xs font-medium uppercase tracking-wide text-accent-bright">{unit.tagline}</p>
        )}
        <p className="mb-4 text-sm leading-relaxed text-mute">{unit.description}</p>
        <p className="text-xs text-mute">
          <span className="text-ink/70">Fleet home:</span> {unit.home}
        </p>
      </div>
    </div>
  )
}

export default function BranchTabs() {
  return (
    <Tabs defaultValue="army" className="w-full">
      <div className="mb-16 flex justify-center border-b border-line">
        <TabsList className="h-auto gap-8 rounded-none bg-transparent p-0">
          <TabsTrigger value="army" className={cn(TRIGGER_CLASS, "flex items-center gap-2")}>
            <span className="relative h-4 w-4 shrink-0">
              <Image src={BRANCH_ICONS.army} alt="" fill className="object-contain" />
            </span>
            Army
          </TabsTrigger>
          <TabsTrigger value="starfighter" className={cn(TRIGGER_CLASS, "flex items-center gap-2")}>
            <span className="relative h-4 w-4 shrink-0">
              <Image src={BRANCH_ICONS.starfighter} alt="" fill className="object-contain" />
            </span>
            Starfighter Corps
          </TabsTrigger>
          <TabsTrigger value="special-forces" className={cn(TRIGGER_CLASS, "flex items-center gap-2")}>
            <span className="relative h-4 w-4 shrink-0">
              <Image src={BRANCH_ICONS["special-forces"]} alt="" fill className="object-contain" />
            </span>
            Special Forces
          </TabsTrigger>
        </TabsList>
      </div>

      <TabsContent value="army" className="mt-0">
        <div className="mx-auto flex max-w-5xl flex-col gap-20">
          <Reveal className="flex flex-col items-center text-center">
            <div className="relative mb-4 h-11 w-11 shrink-0">
              <Image src={BRANCH_ICONS.army} alt="" fill className="object-contain" />
            </div>
            <h2 className="text-2xl font-semibold tracking-tight">Army</h2>
            <p className="mt-2 text-sm text-mute">
              The backbone of the 104th, split into companies and platoons across every platform.
            </p>
          </Reveal>

          {PLATFORMS.map((platform) => (
            <div key={platform.name}>
              <Reveal>
                <h2 className="mb-8 text-2xl font-semibold tracking-tight">{platform.name}</h2>
              </Reveal>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {platform.companies.map((company, i) => (
                  <Reveal key={company.name} delay={i * 0.08}>
                    <div className="overflow-hidden rounded-xl border border-line bg-surface transition-colors hover:border-accent/40">
                      <ImagePlaceholder
                        src={company.image}
                        alt={`${company.name} company`}
                        className="aspect-[16/9] rounded-none border-0 border-b border-line"
                      />
                      <div className="p-6">
                        <h3 className="mb-3 text-lg font-semibold">{company.name}</h3>
                        <p className="mb-2 text-[11px] font-medium uppercase tracking-wide text-mute">Platoons</p>
                        <div className="flex flex-wrap gap-2">
                          {company.platoons.map((platoon) => (
                            <span
                              key={platoon}
                              className="rounded-full border border-line bg-canvas px-3 py-1 text-xs text-mute"
                            >
                              {platoon}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </TabsContent>

      <TabsContent value="starfighter" className="mt-0">
        <Reveal>
          <UnitFeature unit={UNITS.starfighter} icon={BRANCH_ICONS.starfighter} />
        </Reveal>
      </TabsContent>

      <TabsContent value="special-forces" className="mt-0">
        <Reveal>
          <UnitFeature unit={UNITS.specialForces} icon={BRANCH_ICONS["special-forces"]} />
        </Reveal>
      </TabsContent>
    </Tabs>
  )
}
