import { ArrowRight, type LucideIcon } from "lucide-react";
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
  className,
}: ChallengeCardProps) {
  return (
    <Card
      className={cn(
        "overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1",
        className,
      )}
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <Badge variant={categoryVariant}>{category}</Badge>
          <span className="text-sm text-muted-foreground">{date}</span>
        </div>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
        <div className="flex items-center gap-2 mt-4 text-sm">
          <MetricIcon className="w-4 h-4" />
          <span className="font-semibold">{metricValue}</span>
          <span className="text-muted-foreground">{metricLabel}</span>
        </div>
      </CardContent>
      <CardFooter>
        <Link
          href={href}
          className="text-primary hover:text-primary/80 font-medium flex items-center gap-1 transition-colors"
        >
          En savoir plus <ArrowRight className="w-4 h-4" />
        </Link>
      </CardFooter>
    </Card>
  );
}
