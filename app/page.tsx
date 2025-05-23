import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FaDiscord } from "react-icons/fa6"
import { GamepadIcon as GameController, Users, Trophy, Sword, CalendarIcon } from "lucide-react"
import StatsCounter from "@/components/stats-counter"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100">
      {/* Header Bar */}
      <header className="fixed top-0 left-0 right-0 bg-zinc-900/90 backdrop-blur-sm z-50 border-b border-zinc-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="104th Battalion Logo"
                width={30}
                height={20}
                className="rounded-full"
              />
              <h1 className="text-xl md:text-2xl font-bold tracking-wider text-white">104TH BATTALION</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section with Banner */}
      <div className="relative h-[calc(100vh-4rem)] w-full pt-16">
        <Image
          src="/images/new-banner.png"
          alt="104th Battalion Milsim - Republic Fleet"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Welcome Section */}
      <div className="py-16 container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-xl md:text-2xl text-blue-400 mb-4">Star Wars Military Simulation Community</p>
          <p className="text-lg text-zinc-300 mb-8">
            Join over 1800+ clone troopers across Xbox, PlayStation, and PC in authentic Star Wars battles. Experience
            military simulation like never before with the 104th Battalion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
              <Link href="https://discord.gg/104th-battalion-milsim" target="_blank" rel="noopener noreferrer">
                <FaDiscord className="text-white mr-2 h-4 w-4" />
                Join Today
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-zinc-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StatsCounter
              icon={<Users className="h-8 w-8 text-blue-400" />}
              value={1800}
              label="Members"
              description="Across all platforms"
            />
            <StatsCounter
              icon={<GameController className="h-8 w-8 text-blue-400" />}
              value={3}
              label="Platforms"
              description="Xbox, PlayStation, PC"
            />
            <StatsCounter
              icon={<Trophy className="h-8 w-8 text-blue-400" />}
              value={3}
              label="Branches"
              description="Army, Starfighter Corps, Special Forces"
            />
          </div>
        </div>
      </div>

      {/* Why Join Us Section */}
      <div className="bg-zinc-800/50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Join the 104th Battalion?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-zinc-800 rounded-lg p-6 border border-zinc-700 hover:border-blue-600 transition-colors text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Active Community</h3>
              <p className="text-zinc-300">
                Join over 1800+ active members across all platforms with daily events and operations.
              </p>
            </div>
            <div className="bg-zinc-800 rounded-lg p-6 border border-zinc-700 hover:border-blue-600 transition-colors text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sword className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Authentic Milsim</h3>
              <p className="text-zinc-300">
                Experience realistic Star Wars military simulation with proper ranks, tactics, and teamwork.
              </p>
            </div>
            <div className="bg-zinc-800 rounded-lg p-6 border border-zinc-700 hover:border-blue-600 transition-colors text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">All Skill Levels</h3>
              <p className="text-zinc-300">
                Whether you're new to milsim or a veteran, we have training and roles for everyone.
              </p>
            </div>
            <div className="bg-zinc-800 rounded-lg p-6 border border-zinc-700 hover:border-blue-600 transition-colors text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CalendarIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Events</h3>
              <p className="text-zinc-300">
                We have frequent small events and a few times a year large operations runing for longer.
              </p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
              <Link href="https://discord.gg/104th-battalion-milsim" target="_blank" rel="noopener noreferrer">
                <FaDiscord className="text-white mr-2 h-4 w-4" />
                Start Your Journey
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Getting Started Section */}
      <div className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Ready to Enlist?</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-zinc-800 rounded-lg p-8 border border-zinc-700 flex flex-col h-full">
              <div className="flex-grow">
                <h3 className="text-2xl font-bold mb-4 text-blue-400">New Recruits</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>Join our Discord server</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>Choose your platoon or wing</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>Complete basic training and get your name and designation</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>Start participating in raids and events</span>
                  </li>
                </ul>
              </div>
              <div className="mt-auto pt-4">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" asChild>
                  <Link href="https://discord.gg/104th-battalion-milsim" target="_blank" rel="noopener noreferrer">
                    <FaDiscord className="text-white mr-2 h-4 w-4" />
                    Join Discord Now
                  </Link>
                </Button>
              </div>
            </div>
            <div className="bg-zinc-800 rounded-lg p-8 border border-zinc-700 flex flex-col h-full">
              <div className="flex-grow">
                <h3 className="text-2xl font-bold mb-4 text-blue-400">What to Expect</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>Daily Raids</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>Large-scale operations</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>Rank progression system</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>Friendly community</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>Qualifications to earn</span>
                  </li>
                </ul>
              </div>
              <div className="mt-auto pt-4">
                <Button variant="outline" className="w-full bg-zinc-900 border-blue-600 text-blue-400 hover:bg-blue-950/50" asChild>
                  <Link href="https://discord.gg/104th-battalion-milsim" target="_blank" rel="noopener noreferrer">
                    Learn More
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-zinc-900 border-t border-zinc-800 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-4 mb-6 md:mb-0">
              <Image
                src="/images/logo.png"
                alt="104th Battalion Logo"
                width={50}
                height={50}
                className="rounded-full"
              />
              <span className="text-xl font-bold">104th Battalion Milsim</span>
            </div>
            <div className="flex gap-4">
              <Link
                href="https://discord.gg/104th-battalion-milsim"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-blue-400 transition-colors"
              >
                <FaDiscord className="h-6 w-6" />
                <span className="sr-only">Discord</span>
              </Link>
            </div>
          </div>
          <div className="text-center mt-8 text-zinc-500 text-sm">
            © 2025 104th Battalion Milsim. Star Wars is a trademark of Lucasfilm Ltd.
          </div>
        </div>
      </footer>
    </div>
  )
}
