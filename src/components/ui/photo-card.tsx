import Image from "next/image";
import { cn } from "@/lib/utils";

interface PhotoCardProps {
  src: string;
  alt: string;
  className?: string;
  onClick?: () => void;
}

export function PhotoCard({ src, alt, className, onClick }: PhotoCardProps) {
  return (
    <button
      type="button"
      className={cn(
        "relative aspect-square overflow-hidden rounded-xl group cursor-pointer border-0 p-0 bg-transparent",
        className,
      )}
      onClick={onClick}
      aria-label={`Ouvrir l'image : ${alt}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
    </button>
  );
}
