"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ImageModal } from "@/components/ui/image-modal";
import { cn } from "@/lib/utils";
import { Calendar, ZoomIn } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

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
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Card
        className={cn(
          "hover:shadow-lg transition-all duration-300 flex flex-col h-full overflow-hidden group",
          className,
        )}
      >
        {/* Image Container */}
        <div
          className="relative w-full h-64 overflow-hidden bg-gray-100 cursor-zoom-in"
          onClick={() => setIsModalOpen(true)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") setIsModalOpen(true);
          }}
          role="button"
          tabIndex={0}
          aria-label={`Agrandir l'image : ${title}`}
        >
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Overlay loupe au survol */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-sm rounded-full p-3">
              <ZoomIn className="w-7 h-7 text-white drop-shadow" />
            </div>
          </div>
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

      <ImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        imageSrc={imageSrc}
        imageAlt={title}
      />
    </>
  );
}
