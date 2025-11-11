import { Calendar, Sparkles } from "lucide-react";
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

interface ActualiteCardProps {
  imageSrc: string;
  title: string;
  description?: string;
  date?: string;
  eventDate?: string;
  className?: string;
}

export function ActualiteCard({
  imageSrc,
  title,
  description,
  date,
  eventDate,
  className,
}: ActualiteCardProps) {
  return (
    <Card
      className={cn(
        "hover:shadow-lg transition-all duration-300 flex flex-col h-full overflow-hidden group",
        className,
      )}
    >
      {/* Image Container */}
      <div className="relative w-full h-64 overflow-hidden bg-gray-100">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Badge "À venir" si eventDate existe */}
        {/* {eventDate && (
          <div className="absolute top-4 right-4">
            <Badge className="bg-gradient-to-r from-pink-600 to-purple-600 text-white border-0 shadow-lg">
              <Sparkles className="w-3 h-3 mr-1" />À venir
            </Badge>
          </div>
        )} */}
      </div>

      <CardHeader className="flex flex-col space-y-3">
        <CardTitle className="text-xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent group-hover:from-pink-500 group-hover:to-purple-500 transition-all">
          {title}
        </CardTitle>
        <div className="flex flex-col gap-2">
          {eventDate && (
            <div className="flex items-center gap-2 text-sm font-semibold text-pink-500">
              <Calendar className="w-4 h-4" />
              <span>{eventDate}</span>
            </div>
          )}
          {date && !eventDate && (
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Calendar className="w-4 h-4" />
              <span>{date}</span>
            </div>
          )}
        </div>
      </CardHeader>

      {description && (
        <CardContent className="flex-grow">
          <CardDescription className="text-base text-gray-700 leading-relaxed">
            {description}
          </CardDescription>
        </CardContent>
      )}
    </Card>
  );
}
