import Image from "next/image"
import Link from "next/link"
import { FaDiscord, FaInstagram } from "react-icons/fa6"

const DISCORD_URL = "https://discord.gg/104th-battalion-milsim"

export default function SiteFooter() {
  return (
    <footer className="border-t border-line bg-canvas py-10">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-3">
            <Image src="/images/logo.png" alt="104th Battalion Logo" width={36} height={36} className="rounded-full" />
            <span className="text-base font-semibold tracking-tight">104th Battalion Milsim</span>
          </div>
          <div className="flex gap-5">
            <Link
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-mute transition-colors hover:text-accent-bright"
            >
              <FaDiscord className="h-5 w-5" />
              <span className="sr-only">Discord</span>
            </Link>
            <Link
              href="https://www.instagram.com/104thbattalionmilsim"
              target="_blank"
              rel="noopener noreferrer"
              className="text-mute transition-colors hover:text-accent-bright"
            >
              <FaInstagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-mute">
          © 2025 104th Battalion Milsim — Star Wars is a trademark of Lucasfilm Ltd.
        </div>
      </div>
    </footer>
  )
}
