"use client"

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import RankBadge from "@/components/rank-badge"
import { cn } from "@/lib/utils"

interface Rank {
  name: string
  abbr: string
  image?: string
  billets?: string[]
  uniform?: string
  messageReq?: string
}

interface RankCategory {
  category: string
  ranks: Rank[]
}

const ARMY: RankCategory[] = [
  {
    category: "Enlisted Ranks",
    ranks: [
      { name: "Clone Cadet", abbr: "CDT", billets: ["Clone Cadet"], uniform: "Anything" },
      { name: "Clone Reserve", abbr: "CR", billets: ["Clone Recruit", "Clone Reserve"], uniform: "Anything" },
      { name: "Clone Trooper", abbr: "CT", image: "/images/ranks/army/CT.png", billets: ["Trooper (TPR)"], uniform: "Phase 2 Helmet" },
      { name: "Clone Specialist", abbr: "SPC", billets: ["Trooper (TPR)", "Fireteam Leader (FTL)"], uniform: "Phase 2 Helmet" },
    ],
  },
  {
    category: "NCO Ranks",
    ranks: [
      { name: "Lance Corporal", abbr: "LCPL", image: "/images/ranks/army/LCPL.png", billets: ["Fireteam Leader (FTL)"], uniform: "Phase 2 Helmet", messageReq: "500 messages" },
      { name: "Corporal", abbr: "CPL", image: "/images/ranks/army/CPL.png", billets: ["Fireteam Leader (FTL)", "Squad NCO (SNCO)"], uniform: "Phase 2 Helmet", messageReq: "1,000 messages" },
      { name: "Sergeant", abbr: "SGT", image: "/images/ranks/army/SGT.png", billets: ["Squad NCO (SNCO)", "Squad Leader (SL)"], uniform: "Phase 2 Helmet", messageReq: "1,500 messages" },
      { name: "Staff Sergeant", abbr: "SSGT", image: "/images/ranks/army/SSGT.png", billets: ["Senior Squad Leader (SSL)"], uniform: "Custom Helmet" },
    ],
  },
  {
    category: "Senior NCO Ranks",
    ranks: [
      { name: "Sergeant Major", abbr: "SGM", image: "/images/ranks/army/SGM.png", billets: ["Platoon NCO (PNCO)"], uniform: "Custom Helmet" },
      { name: "Warrant Officer", abbr: "WO", image: "/images/ranks/army/WO.png", billets: ["Company NCO (CNCO)"], uniform: "Custom Helmet" },
      { name: "Chief Warrant Officer", abbr: "CWO", image: "/images/ranks/army/CWO.png", billets: ["Console NCO"], uniform: "Custom Helmet" },
    ],
  },
  {
    category: "Officer Ranks",
    ranks: [
      { name: "Second Lieutenant", abbr: "2LT", image: "/images/ranks/army/2LT.png", billets: ["Platoon Executive Officer (PXO)"], uniform: "Custom Helmet" },
      { name: "Lieutenant", abbr: "LT", image: "/images/ranks/army/LT.png", billets: ["Platoon Commanding Officer (PCO)"], uniform: "Custom Helmet" },
    ],
  },
  {
    category: "Senior Officer Ranks",
    ranks: [
      { name: "Senior Lieutenant", abbr: "LT", image: "/images/ranks/army/sLT.png", billets: ["Company Executive Officer (CXO)"], uniform: "Custom Helmet" },
      { name: "Captain", abbr: "CPT", image: "/images/ranks/army/CPT.png", billets: ["Company Commanding Officer (CCO)"], uniform: "Custom Helmet" },
    ],
  },
  {
    category: "Console Command Ranks",
    ranks: [
      { name: "Major", abbr: "MAJ", image: "/images/ranks/army/MAJ.png", billets: ["Console Executive Officer (XO)", "Command Officer (CO)"], uniform: "Custom Helmet" },
      { name: "Technical Commander", abbr: "TCDR", image: "/images/ranks/army/TCDR.png", billets: ["Director of Intelligence"], uniform: "Custom Helmet"},
      { name: "Commander", abbr: "CDR", image: "/images/ranks/army/CDR.png", billets: ["Console Commander (CC)"], uniform: "Custom Helmet" },
    ],
  },
  {
    category: "Branch Command Ranks",
    ranks: [{ name: "Battalion Commander", abbr: "BCDR", image: "/images/ranks/army/BCDR.png", billets: ["Army Commanding Officer (ACO)"], uniform: "Custom Helmet" }],
  },
  {
    category: "Fleet Command Ranks",
    ranks: [
      { name: "Senior Commander", abbr: "SCDR", image: "/images/ranks/army/SCDR.png", billets: ["Fleet Executive Officer (FXO)"], uniform: "Custom Helmet" },
      { name: "Marshal Commander", abbr: "MCDR", image: "/images/ranks/army/MCDR.png", billets: ["Fleet Commanding Officer (FCO)"], uniform: "Custom Helmet" },
    ],
  },
]

const STARFIGHTER: RankCategory[] = [
  {
    category: "Enlisted Ranks",
    ranks: [
      { name: "Clone Cadet", abbr: "CDT", uniform: "Pilot Helmet" },
      { name: "Clone Reserve", abbr: "CR", uniform: "Pilot Helmet" },
      { name: "Pilot Officer", abbr: "PO", image: "/images/ranks/starfighter/PO.png", billets: ["Pilot"], uniform: "Pilot Helmet" },
    ],
  },
  {
    category: "NCO Ranks",
    ranks: [
      { name: "Flight Officer", abbr: "FO", image: "/images/ranks/starfighter/FO.png", billets: ["Flight Executive"], uniform: "Pilot Helmet" },
      { name: "Flight Lieutenant", abbr: "FLT", image: "/images/ranks/starfighter/FLT.png", billets: ["Flight Executive", "Flight Leader"], uniform: "Pilot Helmet" },
      { name: "Flight Captain", abbr: "FCPT", image: "/images/ranks/starfighter/FCPT.png", billets: ["Flight Leader"], uniform: "Pilot Helmet" },
    ],
  },
  {
    category: "Officer Ranks",
    ranks: [
      { name: "Squadron Lieutenant", abbr: "SL", image: "/images/ranks/starfighter/SL.png", billets: ["Squadron Executive", "Squadron Leader"], uniform: "Custom Helmet" },
      { name: "Squadron Captain", abbr: "SCPT", image: "/images/ranks/starfighter/SCPT.png", billets: ["Squadron Leader"], uniform: "Custom Helmet" },
    ],
  },
  {
    category: "Command Ranks",
    ranks: [
      { name: "Wing Commander", abbr: "WCDR", image: "/images/ranks/starfighter/WCDR.png", billets: ["SFC Executive Officer"], uniform: "Custom Helmet" },
      { name: "Air Commodore", abbr: "COM", image: "/images/ranks/starfighter/COM.png", billets: ["SFC Commanding Officer"], uniform: "Custom Helmet" },
    ],
  },
  {
    category: "Fleet Command Ranks",
    ranks: [{ name: "Air Marshal", abbr: "MSHL", image: "/images/ranks/starfighter/MSHL.png", billets: ["Fleet Executive Officer"], uniform: "Custom Helmet" }],
  },
]

const NAVAL_AUX: RankCategory[] = [
  {
    category: "NCO Ranks",
    ranks: [
      { name: "Petty Officer 3rd Class", abbr: "PO3", image: "/images/ranks/aux/PO3.png" },
      { name: "Petty Officer 2nd Class", abbr: "PO2", image: "/images/ranks/aux/PO2.png" },
      { name: "Petty Officer 1st Class", abbr: "PO1", image: "/images/ranks/aux/PO1.png" },
    ],
  },
  {
    category: "Officer Ranks",
    ranks: [
      { name: "Naval Lieutenant", abbr: "NLT", image: "/images/ranks/aux/NLT.png" },
      { name: "Lieutenant Commander", abbr: "LTCDR", image: "/images/ranks/aux/LTCDR.png" },
      { name: "Naval Commander", abbr: "NCDR", image: "/images/ranks/aux/NCDR.png" },
    ],
  },
]

const ARC: RankCategory[] = [
  {
    category: "Enlisted Ranks",
    ranks: [
      { name: "ARC Initiate", abbr: "", image: "/images/ranks/arc/ARCi.png", billets: ["Initiate"], uniform: "ARC Helmet" },
      { name: "ARC Trooper", abbr: "AT", image: "/images/ranks/arc/AT.png", billets: ["Troop Member"], uniform: "ARC Helmet" },
      { name: "ARC Sergeant", abbr: "ASGT", image: "/images/ranks/arc/ASGT.png", billets: ["Troop NCO"], uniform: "ARC Helmet" },
    ],
  },
  {
    category: "Officer Ranks",
    ranks: [
      { name: "ARC Lieutenant", abbr: "ALT", image: "/images/ranks/arc/ALT.png", billets: ["Troop Executive"], uniform: "ARC Helmet" },
      { name: "ARC Captain", abbr: "ACPT", image: "/images/ranks/arc/ACPT.png", billets: ["Troop Commander"], uniform: "ARC Helmet" },
    ],
  },
  {
    category: "Command Ranks",
    ranks: [
      { name: "ARC Major", abbr: "AMAJ", image: "/images/ranks/arc/AMAJ.png", billets: ["Branch Executive"], uniform: "ARC Helmet" },
      { name: "ARC Commander", abbr: "ACDR", image: "/images/ranks/arc/ACDR.png", billets: ["Branch Commander"], uniform: "ARC Helmet" },
    ],
  },
]

const RC: RankCategory[] = [
  {
    category: "Enlisted Ranks",
    ranks: [
      { name: "RC Initiate", abbr: "", image: "/images/ranks/rc/RCi.png", billets: ["Initiate"], uniform: "RC Helmet" },
      { name: "RC Private", abbr: "RCPVT", image: "/images/ranks/rc/RCPVT.png", billets: ["Squad Trooper"], uniform: "RC Helmet" },
    ],
  },
  {
    category: "Officer Ranks",
    ranks: [
      { name: "RC Corporal", abbr: "RCCPL", image: "/images/ranks/rc/RCCPL.png", billets: ["Squad NCO", "Troop Executive"], uniform: "RC Helmet" },
      { name: "RC Sergeant", abbr: "RCSGT", image: "/images/ranks/rc/RCSGT.png", billets: ["Squad Leader", "Troop Commander"], uniform: "RC Helmet" },
    ],
  },
  {
    category: "Command Ranks",
    ranks: [
      { name: "RC Captain", abbr: "RCCPT", image: "/images/ranks/rc/RCCPT.png", billets: ["Branch Executive"], uniform: "RC Helmet" },
      { name: "RC Commander", abbr: "RCCDR", image: "/images/ranks/rc/RCCDR.png", billets: ["Branch Commander"], uniform: "RC Helmet" },
    ],
  },
]

const BRANCHES = [
  { value: "army", label: "Army", categories: ARMY },
  { value: "starfighter", label: "Starfighter Corps", categories: STARFIGHTER },
  { value: "aux", label: "Naval Auxiliary", categories: NAVAL_AUX },
  { value: "arc", label: "ARC Trooper", categories: ARC },
  { value: "rc", label: "Republic Commando", categories: RC },
]

const TRIGGER_CLASS = cn(
  "rounded-none border-b-2 border-transparent bg-transparent px-1 pb-3 pt-0 text-sm font-medium text-mute shadow-none transition-colors",
  "hover:text-ink",
  "data-[state=active]:border-accent data-[state=active]:bg-transparent data-[state=active]:text-ink data-[state=active]:shadow-none",
)

export default function RankTabs() {
  return (
    <Tabs defaultValue="army" className="w-full">
      <div className="sticky top-16 z-40 mb-16 flex justify-center border-b border-line bg-canvas/90 py-4 backdrop-blur-md">
        <TabsList className="h-auto flex-wrap justify-center gap-x-5 gap-y-3 rounded-none bg-transparent p-0 sm:gap-x-8">
          {BRANCHES.map((branch) => (
            <TabsTrigger key={branch.value} value={branch.value} className={cn(TRIGGER_CLASS, "whitespace-nowrap")}>
              {branch.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>

      {BRANCHES.map((branch) => (
        <TabsContent key={branch.value} value={branch.value} className="mt-0">
          <div className="mx-auto flex max-w-3xl flex-col gap-14">
            {branch.categories.map((cat) => (
              <div key={cat.category}>
                <h2 className="mb-5 text-sm font-medium uppercase tracking-wide text-accent-bright">{cat.category}</h2>
                <div className="flex flex-col gap-3">
                  {cat.ranks.map((rank) => (
                    <div
                      key={rank.name}
                      className="flex items-center gap-4 rounded-xl border border-line bg-surface p-4 transition-colors hover:border-accent/40"
                    >
                      <RankBadge src={rank.image} alt={`${rank.name} insignia`} className="h-12 w-12" />
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-baseline gap-x-2">
                          <h3 className="font-semibold">{rank.name}</h3>
                          <span className="text-xs text-mute">{rank.abbr}</span>
                        </div>
                        {rank.billets && <p className="mt-0.5 text-sm text-mute">{rank.billets.join(", ")}</p>}
                        {(rank.uniform || rank.messageReq) && (
                          <div className="mt-2 flex flex-wrap gap-2">
                            {rank.uniform && (
                              <span className="rounded-full border border-line bg-canvas px-2.5 py-0.5 text-[11px] text-mute">
                                {rank.uniform}
                              </span>
                            )}
                            {rank.messageReq && (
                              <span className="rounded-full border border-line bg-canvas px-2.5 py-0.5 text-[11px] text-mute">
                                {rank.messageReq}
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  )
}
