import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ContactInfoItemProps {
  icon: LucideIcon;
  iconColor?: "pink" | "purple" | "blue";
  title: string;
  content: string;
  href?: string;
  className?: string;
}

const iconColorClasses = {
  pink: "bg-pink-100 text-pink-600",
  purple: "bg-purple-100 text-purple-600",
  blue: "bg-blue-100 text-blue-600",
};

export function ContactInfoItem({
  icon: Icon,
  iconColor = "pink",
  title,
  content,
  href,
  className,
}: ContactInfoItemProps) {
  const ContentWrapper = href ? "a" : "div";

  return (
    <div className={cn("flex items-start gap-4", className)}>
      <div
        className={cn(
          "w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0",
          iconColorClasses[iconColor],
        )}
      >
        <Icon className="w-6 h-6" />
      </div>
      <div className="flex-1">
        <h3 className="font-bold text-lg mb-1">{title}</h3>
        <ContentWrapper
          {...(href && {
            href,
            className:
              "text-muted-foreground hover:text-foreground transition-colors",
          })}
        >
          {content}
        </ContentWrapper>
      </div>
    </div>
  );
}
