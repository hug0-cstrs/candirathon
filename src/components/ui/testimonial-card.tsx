import { Star } from "lucide-react";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  avatar: string;
  name: string;
  role: string;
  rating?: number;
  testimonial: string;
  className?: string;
}

export function TestimonialCard({
  avatar,
  name,
  role,
  rating = 5,
  testimonial,
  className,
}: TestimonialCardProps) {
  return (
    <Card
      className={cn(
        "hover:shadow-lg transition-shadow duration-300",
        className,
      )}
    >
      <CardHeader className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="relative w-16 h-16 rounded-full overflow-hidden">
            <Image src={avatar} alt={name} fill className="object-cover" />
          </div>
          <div>
            <h3 className="font-bold text-lg">{name}</h3>
            <p className="text-sm text-muted-foreground">{role}</p>
          </div>
        </div>
        <div className="flex gap-1">
          {Array.from({ length: 5 }, (_, i) => i).map((starIndex) => (
            <Star
              key={`${name}-star-${starIndex}`}
              className={cn(
                "w-5 h-5",
                starIndex < rating
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-gray-300",
              )}
            />
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-base italic text-muted-foreground leading-relaxed">
          &ldquo;{testimonial}&rdquo;
        </p>
      </CardContent>
    </Card>
  );
}
