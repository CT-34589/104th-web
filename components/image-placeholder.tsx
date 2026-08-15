import Image from "next/image"
import { ImageIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface ImagePlaceholderProps {
  src?: string
  alt: string
  className?: string
}

export default function ImagePlaceholder({ src, alt, className }: ImagePlaceholderProps) {
  if (src) {
    return (
      <div className={cn("relative overflow-hidden rounded-xl border border-line bg-surface", className)}>
        <Image src={src} alt={alt} fill className="object-cover" />
      </div>
    )
  }

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-line bg-surface text-mute",
        className,
      )}
    >
      <ImageIcon className="h-6 w-6" />
      <span className="text-xs">Image coming soon</span>
    </div>
  )
}
