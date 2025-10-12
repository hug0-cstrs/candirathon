import { cn } from "@/lib/utils"
import Image from "next/image"

interface PhotoCardProps {
  src: string
  alt: string
  className?: string
}

export function PhotoCard({ src, alt, className }: PhotoCardProps) {
  return (
    <div
      className={cn(
        "relative aspect-square overflow-hidden rounded-xl group cursor-pointer",
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
    </div>
  )
}
