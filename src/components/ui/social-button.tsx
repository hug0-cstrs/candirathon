import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SocialIcon } from "@/components/ui/social-icon";

interface SocialButtonProps {
  icon: "instagram" | "facebook";
  href: string;
  label: string;
  className?: string;
}

const variantClasses = {
  instagram:
    "bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 hover:from-purple-700 hover:via-pink-700 hover:to-orange-600",
  facebook: "bg-blue-600 hover:bg-blue-700",
};

export function SocialButton({
  icon,
  href,
  label,
  className,
}: SocialButtonProps) {
  return (
    <Button
      asChild
      size="icon"
      className={cn(
        "w-12 h-12 rounded-full text-white shadow-lg transition-transform duration-200 hover:scale-110",
        variantClasses[icon],
        className,
      )}
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
      >
        <SocialIcon icon={icon} className="w-5 h-5" />
      </a>
    </Button>
  );
}
