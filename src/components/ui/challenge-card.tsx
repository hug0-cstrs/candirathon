import { ArrowRight, type LucideIcon, MapPin, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ChallengeCardProps {
  image: string;
  category: string;
  categoryVariant?: "default" | "secondary" | "outline";
  date: string;
  title: string;
  description: string;
  metricIcon: LucideIcon;
  metricValue: string;
  metricLabel: string;
  href: string;
  trajet?: string;
  participants?: string[];
  className?: string;
}

export function ChallengeCard({
  image,
  category,
  categoryVariant = "default",
  date,
  title,
  description,
  metricIcon: MetricIcon,
  metricValue,
  metricLabel,
  href,
  trajet,
  participants,
  className,
}: ChallengeCardProps) {
  return (
    <Card
      className={cn(
        "overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1",
        className,
      )}
    >
      <div className="relative h-56 w-full overflow-hidden">
        <Image src={image} alt={title} fill className="object-contain" />
      </div>
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <Badge variant={categoryVariant}>{category}</Badge>
          <span className="text-sm text-muted-foreground">{date}</span>
        </div>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base mb-4">
          {description}
        </CardDescription>

        {/* Métrique distance */}
        <div className="flex items-center gap-2 mb-3 text-sm">
          <MetricIcon className="w-4 h-4 text-pink-600" />
          <span className="font-semibold text-gray-900">{metricValue}</span>
          <span className="text-muted-foreground">{metricLabel}</span>
        </div>

        {/* Trajet */}
        {trajet && (
          <div className="flex items-start gap-2 mb-3 text-sm">
            <MapPin className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">{trajet}</span>
          </div>
        )}

        {/* Participants */}
        {participants && participants.length > 0 && (
          <div className="flex items-start gap-2 text-sm">
            <Users className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
            <div className="flex flex-wrap gap-1">
              {participants.map((participant, index) => (
                <span key={participant} className="text-gray-700">
                  {participant}
                  {index < participants.length - 1 && ","}
                </span>
              ))}
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Link
          href={href}
          className="text-primary hover:text-primary/80 font-medium flex items-center gap-1 transition-colors"
        >
          Voir les photos <ArrowRight className="w-4 h-4" />
        </Link>
      </CardFooter>
    </Card>
  );
}
