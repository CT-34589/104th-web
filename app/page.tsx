import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { FaDiscord } from "react-icons/fa6"
import { Users, Trophy, Sword, CalendarIcon } from "lucide-react"
import StatsCounter from "@/components/stats-counter"
import Reveal from "@/components/reveal"
import HeroParallax from "@/components/hero-parallax"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"

const DISCORD_URL = "https://discord.gg/104th-battalion-milsim"

const WHY_JOIN = [
  {
    icon: Users,
    title: "Active Community",
    description: "Join over 1,800 active members across every platform with daily events and operations.",
  },
  {
    icon: Sword,
    title: "Authentic Milsim",
    description: "Experience realistic Star Wars military simulation with proper ranks, tactics, and teamwork.",
  },
  {
    icon: Trophy,
    title: "All Skill Levels",
    description: "Whether you're new to milsim or a veteran, we have training and roles for everyone.",
  },
  {
    icon: CalendarIcon,
    title: "Events",
    description: "Frequent small-scale ops, plus large-scale operations running several times a year.",
  },
]

const NEW_RECRUIT_STEPS = [
  "Join our Discord server",
  "Choose your platoon or wing",
  "Complete basic training and receive your name and designation",
  "Start participating in raids and events",
]

const WHAT_TO_EXPECT = [
  "Daily raids",
  "Large-scale operations",
  "Rank progression system",
  "Friendly, welcoming community",
  "Qualifications to earn",
]

const DIVISIONS = [
  {
    image: "/images/branches/army.svg",
    name: "The Army",
    description: "Engage in intense ground battles against the Separatists.",
  },
  {
    image: "/images/branches/starfighter-corps.webp",
    name: "The Starfighter Corps",
    description: "Dominate the skies and space in thrilling aerial combat.",
  },
  {
    image: "/images/branches/special-forces.png",
    name: "Special Forces",
    description: "An elite unit where only the best of the best operate together.",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-canvas text-ink">
      <SiteHeader />

      {/* Hero */}
      <section className="relative flex h-[92vh] min-h-[560px] w-full items-center overflow-hidden">
        <HeroParallax src="/images/new-banner.png" alt="Republic fleet in orbit" />
        <div className="absolute inset-0 bg-gradient-to-t from-canvas via-canvas/70 to-canvas/10" />

        <div className="container relative z-10 mx-auto px-4 pt-16 sm:px-6">
          <Reveal className="max-w-xl" y={16}>
            <p className="mb-4 text-sm font-medium uppercase tracking-wide text-accent-bright">
              Star Wars: Battlefront II Community
            </p>
            <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              104th Battalion Milsim
            </h1>
            <p className="mt-6 max-w-lg text-balance text-lg text-zinc-300">
              A thriving community of 1,800+ passionate gamers united by a love for Star Wars: Battlefront 2. We
              take the fight to the CIS daily — and destroy some Clankers.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" className="bg-accent text-white hover:bg-accent-bright" asChild>
                <Link href={DISCORD_URL} target="_blank" rel="noopener noreferrer">
                  <FaDiscord className="mr-2 h-4 w-4" />
                  Join Today
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white"
                asChild
              >
                <a href="#why-join">Learn More</a>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-line bg-surface">
        <div className="container mx-auto grid grid-cols-1 divide-y divide-line px-4 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-6">
          <Reveal delay={0}>
            <StatsCounter icon={<Users className="h-5 w-5" />} value={1800} suffix="+" label="Members" description="Across all platforms" />
          </Reveal>
          <Reveal delay={0.1}>
            <StatsCounter icon={<Trophy className="h-5 w-5" />} value={3} label="Platforms" description="Xbox, PlayStation, PC" />
          </Reveal>
          <Reveal delay={0.2}>
            <StatsCounter icon={<Sword className="h-5 w-5" />} value={3} label="Branches" description="Army, Starfighter Corps, Special Forces" />
          </Reveal>
        </div>
      </section>

      {/* Why Join */}
      <section id="why-join" className="py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <Reveal className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Why Join the 104th Battalion?</h2>
          </Reveal>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2">
            {WHY_JOIN.map(({ icon: Icon, title, description }, i) => (
              <Reveal key={title} delay={i * 0.08}>
                <div className="rounded-xl border border-line bg-surface p-7 transition-colors hover:border-accent/40">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">{title}</h3>
                  <p className="text-sm leading-relaxed text-mute">{description}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12 text-center">
            <Button size="lg" className="bg-accent text-white hover:bg-accent-bright" asChild>
              <Link href={DISCORD_URL} target="_blank" rel="noopener noreferrer">
                <FaDiscord className="mr-2 h-4 w-4" />
                Start Your Journey
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Welcome */}
      <section className="border-t border-line bg-surface py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Welcome to the 104th!</h2>
            <p className="mt-5 text-mute">
              The 104th is a thriving community of over 1,800 passionate gamers united by a love for Star Wars:
              Battlefront 2. Our dedicated staff and active Troopers work together daily to take the fight to the
              CIS — and destroy some Clankers!
            </p>
          </Reveal>

          <Reveal className="mx-auto mt-14 max-w-4xl">
            <p className="mb-6 text-center text-sm font-medium uppercase tracking-wide text-accent-bright">
              Join one of our divisions
            </p>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
              {DIVISIONS.map(({ image, name, description }) => (
                <Link
                  key={name}
                  href="/branches/"
                  className="flex flex-col items-center rounded-xl border border-line bg-canvas p-6 text-center transition-colors hover:border-accent/40"
                >
                  <div className="relative mb-4 h-11 w-11 shrink-0">
                    <Image src={image} alt="" fill className="object-contain" />
                  </div>
                  <h3 className="mb-1 font-semibold">{name}</h3>
                  <p className="text-sm text-mute">{description}</p>
                </Link>
              ))}
            </div>
          </Reveal>

          <Reveal className="mx-auto mt-10 max-w-2xl text-center text-sm text-mute">
            No matter your playstyle, there&apos;s a place for you in the 104th.
          </Reveal>
        </div>
      </section>

      {/* Enlist */}
      <section className="border-t border-line py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <Reveal className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Ready to Enlist?</h2>
          </Reveal>

          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
            <Reveal>
              <div className="flex h-full flex-col rounded-xl border border-line bg-canvas p-8">
                <h3 className="mb-6 text-xl font-semibold text-accent-bright">New Recruits</h3>
                <ol className="flex-grow space-y-5">
                  {NEW_RECRUIT_STEPS.map((step, i) => (
                    <li key={step} className="flex items-start gap-4">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs font-medium text-accent">
                        {i + 1}
                      </span>
                      <span className="text-sm text-ink/90">{step}</span>
                    </li>
                  ))}
                </ol>
                <Button className="mt-8 w-full bg-accent text-white hover:bg-accent-bright" asChild>
                  <Link href={DISCORD_URL} target="_blank" rel="noopener noreferrer">
                    <FaDiscord className="mr-2 h-4 w-4" />
                    Join Discord Now
                  </Link>
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="flex h-full flex-col rounded-xl border border-line bg-canvas p-8">
                <h3 className="mb-6 text-xl font-semibold text-accent-bright">What to Expect</h3>
                <ul className="flex-grow space-y-5">
                  {WHAT_TO_EXPECT.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span className="text-sm text-ink/90">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant="outline"
                  className="mt-8 w-full border-line bg-transparent text-ink hover:border-accent/50 hover:bg-transparent hover:text-accent-bright"
                  asChild
                >
                  <Link href={DISCORD_URL} target="_blank" rel="noopener noreferrer">
                    Learn More
                  </Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
