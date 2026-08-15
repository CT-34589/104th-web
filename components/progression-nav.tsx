"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const ITEMS = [
  { href: "/progression/ranks/", label: "Ranks" },
  { href: "/progression/positions/", label: "Positions" },
  { href: "/progression/qualifications/", label: "Qualifications" },
]

export default function ProgressionNav() {
  const pathname = usePathname()

  return (
    <div className="mb-6 flex justify-center border-b border-line">
      <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3">
        {ITEMS.map((item) => {
          const active = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "border-b-2 border-transparent pb-3 text-sm font-medium text-mute transition-colors hover:text-ink",
                active && "border-accent text-ink",
              )}
            >
              {item.label}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
