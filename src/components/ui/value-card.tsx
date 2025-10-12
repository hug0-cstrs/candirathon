import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface ValueCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  iconColor?: "pink" | "purple" | "blue" | "yellow";
  className?: string;
}

const iconColorClasses = {
  pink: "bg-pink-100 text-pink-600",
  purple: "bg-purple-100 text-purple-600",
  blue: "bg-blue-100 text-blue-600",
  yellow: "bg-yellow-100 text-yellow-600",
};

export function ValueCard({
  icon: Icon,
  title,
  description,
  iconColor = "pink",
  className,
}: ValueCardProps) {
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
            "w-16 h-16 rounded-full flex items-center justify-center",
            iconColorClasses[iconColor],
          )}
        >
          <Icon className="w-8 h-8" />
        </div>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-center text-base">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
