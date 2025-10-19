import { ExternalLink, type LucideIcon } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface AssociationCardProps {
  logo?: React.ReactNode;
  logoSrc?: string;
  logoBackgroundColor?: string;
  name: string;
  description: string;
  badgeIcon: LucideIcon;
  badgeText: string;
  url?: string;
  className?: string;
}

export function AssociationCard({
  logo,
  logoSrc,
  logoBackgroundColor = "bg-pink-500",
  name,
  description,
  badgeIcon: BadgeIcon,
  badgeText,
  url,
  className,
}: AssociationCardProps) {
  const CardWrapper = url ? "a" : "div";
  const cardProps = url
    ? { href: url, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Card
      className={cn(
        "hover:shadow-lg transition-shadow duration-300 flex flex-col h-full",
        url && "cursor-pointer group",
        className,
      )}
    >
      <CardWrapper
        {...cardProps}
        className="no-underline flex flex-col flex-grow"
      >
        <CardHeader className="flex flex-col items-center text-center space-y-4">
          <div
            className={cn(
              "w-32 h-32 rounded-2xl flex items-center justify-center relative overflow-hidden",
              !logoSrc && logoBackgroundColor,
            )}
          >
            {logoSrc ? (
              <Image
                src={logoSrc}
                alt={`Logo ${name}`}
                fill
                className="object-contain p-2"
              />
            ) : (
              logo
            )}
          </div>
          <div className="flex items-center justify-center gap-2">
            <CardTitle className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent group-hover:from-pink-500 group-hover:to-purple-500 transition-all">
              {name}
            </CardTitle>
            {url && (
              <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity text-purple-600 flex-shrink-0" />
            )}
          </div>
        </CardHeader>
        <CardContent className="flex flex-col flex-grow space-y-4">
          <CardDescription className="text-center text-base flex-grow text-gray-700 leading-relaxed">
            {description}
          </CardDescription>
          <div className="flex justify-center">
            <Badge
              variant="secondary"
              className="flex items-center gap-1.5 bg-gradient-to-r from-pink-100 to-purple-100 text-purple-700 border-purple-200 font-semibold"
            >
              <BadgeIcon className="w-3.5 h-3.5" />
              {badgeText}
            </Badge>
          </div>
        </CardContent>
      </CardWrapper>
    </Card>
  );
}
