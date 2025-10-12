import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"

interface IconCircleProps {
  icon: LucideIcon
  variant?: "pink" | "purple" | "blue" | "yellow" | "green"
  size?: "sm" | "md" | "lg"
  className?: string
}

const variantClasses = {
  pink: "bg-pink-100 text-pink-600",
  purple: "bg-purple-100 text-purple-600",
  blue: "bg-blue-100 text-blue-600",
  yellow: "bg-yellow-100 text-yellow-600",
  green: "bg-green-100 text-green-600",
}

const sizeClasses = {
  sm: "w-10 h-10",
  md: "w-12 h-12",
  lg: "w-16 h-16",
}

const iconSizeClasses = {
  sm: "w-5 h-5",
  md: "w-6 h-6",
  lg: "w-8 h-8",
}

export function IconCircle({
  icon: Icon,
  variant = "pink",
  size = "md",
  className,
}: IconCircleProps) {
  return (
    <div
      className={cn(
        "rounded-full flex items-center justify-center",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
    >
      <Icon className={iconSizeClasses[size]} />
    </div>
  )
}
