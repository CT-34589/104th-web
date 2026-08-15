import Image from "next/image"
import { Shield } from "lucide-react"
import { cn } from "@/lib/utils"

export default function RankBadge({ src, alt, className }: { src?: string; alt: string; className?: string }) {
  if (src) {
    return (
      <div className={cn("relative shrink-0 rounded-lg border border-line bg-surface p-1.5", className)}>
        <Image src={src} alt={alt} fill className="object-contain p-1.5" />
      </div>
    )
  }

  return (
    <div className={cn("flex shrink-0 items-center justify-center rounded-lg border border-dashed border-line bg-surface text-mute/50", className)}>
      <Shield className="h-5 w-5" />
    </div>
  )
}
