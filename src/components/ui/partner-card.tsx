import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface PartnerCardProps {
  logo: React.ReactNode;
  logoBackgroundColor?: string;
  name: string;
  description: string;
  badgeIcon: LucideIcon;
  badgeText: string;
  className?: string;
}

export function PartnerCard({
  logo,
  logoBackgroundColor = "bg-blue-500",
  name,
  description,
  badgeIcon: BadgeIcon,
  badgeText,
  className,
}: PartnerCardProps) {
  return (
    <Card
      className={cn(
        "hover:shadow-lg transition-shadow duration-300",
        className,
      )}
    >
      <CardHeader className="flex flex-col items-center text-center space-y-4">
        <div
          className={cn(
            "w-20 h-20 rounded-2xl flex items-center justify-center",
            logoBackgroundColor,
          )}
        >
          {logo}
        </div>
        <CardTitle className="text-xl font-bold">{name}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <CardDescription className="text-center text-base">
          {description}
        </CardDescription>
        <div className="flex justify-center">
          <Badge variant="secondary" className="flex items-center gap-1.5">
            <BadgeIcon className="w-3.5 h-3.5" />
            {badgeText}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
}
