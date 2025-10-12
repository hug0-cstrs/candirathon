import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  title: string
  subtitle?: string
  align?: "left" | "center"
  titleClassName?: string
  subtitleClassName?: string
  className?: string
}

export function SectionHeader({
  title,
  subtitle,
  align = "center",
  titleClassName,
  subtitleClassName,
  className,
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center" : "text-left"

  return (
    <div className={cn("space-y-3", alignClass, className)}>
      <h2
        className={cn(
          "text-4xl md:text-5xl font-bold tracking-tight",
          titleClassName
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "text-lg md:text-xl text-muted-foreground max-w-3xl",
            align === "center" && "mx-auto",
            subtitleClassName
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
