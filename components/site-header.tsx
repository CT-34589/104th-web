"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { FaDiscord } from "react-icons/fa6"
import { Button } from "@/components/ui/button"

const DISCORD_URL = "https://discord.gg/104th-battalion-milsim"

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/branches/", label: "Branches" },
  { href: "/progression/", label: "Progression" },
  { href: "/operations/", label: "Operations" },
  { href: "/fleet/", label: "Fleet" },
  { href: "/leadership/", label: "Leadership" },
]

export default function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-line/60 bg-canvas/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/images/logo.png" alt="104th Battalion Logo" width={32} height={32} className="rounded-full" />
          <span className="text-base font-semibold tracking-tight text-ink">104th Battalion</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm text-mute transition-colors hover:text-ink">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button size="sm" className="hidden bg-accent text-white hover:bg-accent-bright sm:inline-flex" asChild>
            <Link href={DISCORD_URL} target="_blank" rel="noopener noreferrer">
              <FaDiscord className="mr-2 h-4 w-4" />
              Join Today
            </Link>
          </Button>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-md text-ink md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-line/60 bg-canvas px-4 py-4 sm:px-6 md:hidden">
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm text-mute transition-colors hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
            <Button size="sm" className="mt-2 w-full bg-accent text-white hover:bg-accent-bright" asChild>
              <Link href={DISCORD_URL} target="_blank" rel="noopener noreferrer">
                <FaDiscord className="mr-2 h-4 w-4" />
                Join Today
              </Link>
            </Button>
          </div>
        </nav>
      )}
    </header>
  )
}
