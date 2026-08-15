"use client"

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

interface Position {
  name: string
  abbr: string
}

interface PositionGroup {
  category: string
  positions: Position[]
}

const ARMY: PositionGroup[] = [
  {
    category: "Positions",
    positions: [
      { name: "Army Commanding Officer", abbr: "ACO" },
      { name: "Army Executive Officer", abbr: "AXO" },
      { name: "Console Commander", abbr: "CC" },
      { name: "Console Executive", abbr: "CXO" },
      { name: "Company Commanding Officer", abbr: "CCO" },
      { name: "Company Executive Officer", abbr: "CXO" },
      { name: "Company Non-Commissioned Officer", abbr: "CNCO" },
      { name: "Company Officer", abbr: "COF" },
      { name: "Platoon Commanding Officer", abbr: "PCO" },
      { name: "Platoon Executive Officer", abbr: "PXO" },
      { name: "Platoon Non-Commissioned Officer", abbr: "PNCO" },
      { name: "Squad Leader", abbr: "SL" },
      { name: "Squad Non-Commissioned Officer", abbr: "SNCO" },
      { name: "Fireteam Leader", abbr: "FTL" },
    ],
  },
]

const STARFIGHTER: PositionGroup[] = [
  {
    category: "Positions",
    positions: [
      { name: "Starfighter Commanding Officer", abbr: "SCO" },
      { name: "Starfighter Executive Officer", abbr: "SXO" },
      { name: "Squadron Commanding Officer", abbr: "SQCO" },
      { name: "Squadron Executive Officer", abbr: "SQXO" },
      { name: "Squadron Coordinator", abbr: "SQCOR" },
      { name: "Flight Leader", abbr: "FL" },
      { name: "Lead Pilot", abbr: "LP" },
    ],
  },
]

const FLEET: PositionGroup[] = [
  {
    category: "Positions",
    positions: [
      { name: "Fleet Commanding Officer", abbr: "FCO" },
      { name: "Advisor to the Army", abbr: "ADV-A" },
      { name: "Advisor to the Starfighter Corps", abbr: "ADV-S" },
      { name: "Director of Intelligence", abbr: "DIR" },
      { name: "Fleet Officer", abbr: "FO" },
    ],
  },
]

const SPECIAL_FORCES: PositionGroup[] = [
  {
    category: "Special Forces",
    positions: [{ name: "Special Forces Commanding Officer", abbr: "SFCO" }],
  },
  {
    category: "ARC Trooper Program",
    positions: [
      { name: "ARC Program Director", abbr: "AD" },
      { name: "ARC Program Executive", abbr: "APXO" },
      { name: "ARC Troop Commanding Officer", abbr: "TPCO" },
      { name: "ARC Troop NCO", abbr: "ATNCO" },
      { name: "ARC Trooper", abbr: "AT" },
    ],
  },
  {
    category: "Republic Commando Program",
    positions: [
      { name: "RC Program Director", abbr: "RCD" },
      { name: "RC Program Executive", abbr: "RCXO" },
      { name: "RC Squad Leader", abbr: "RCSL" },
      { name: "RC Squad NCO", abbr: "RCSNCO" },
      { name: "Republic Commando", abbr: "RC" },
    ],
  },
]

const BRANCHES = [
  { value: "army", label: "Army", groups: ARMY },
  { value: "starfighter", label: "Starfighter Corps", groups: STARFIGHTER },
  { value: "fleet", label: "Fleet", groups: FLEET },
  { value: "special-forces", label: "Special Forces", groups: SPECIAL_FORCES },
]

const TRIGGER_CLASS = cn(
  "rounded-none border-b-2 border-transparent bg-transparent px-1 pb-3 pt-0 text-sm font-medium text-mute shadow-none transition-colors",
  "hover:text-ink",
  "data-[state=active]:border-accent data-[state=active]:bg-transparent data-[state=active]:text-ink data-[state=active]:shadow-none",
)

export default function PositionTabs() {
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
            {branch.groups.map((group) => (
              <div key={group.category}>
                {branch.groups.length > 1 && (
                  <h2 className="mb-5 text-sm font-medium uppercase tracking-wide text-accent-bright">{group.category}</h2>
                )}
                <div className="flex flex-col gap-3">
                  {group.positions.map((position) => (
                    <div
                      key={position.name}
                      className="flex items-center justify-between gap-4 rounded-xl border border-line bg-surface p-4 transition-colors hover:border-accent/40"
                    >
                      <h3 className="font-semibold">{position.name}</h3>
                      <span className="shrink-0 rounded-full border border-line bg-canvas px-2.5 py-0.5 text-[11px] text-mute">
                        {position.abbr}
                      </span>
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
