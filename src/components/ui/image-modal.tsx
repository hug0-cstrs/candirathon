"use client";

import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
  onPrevious?: () => void;
  onNext?: () => void;
  hasPrevious?: boolean;
  hasNext?: boolean;
  currentIndex?: number;
  totalImages?: number;
}

export function ImageModal({
  isOpen,
  onClose,
  imageSrc,
  imageAlt,
  onPrevious,
  onNext,
  hasPrevious = false,
  hasNext = false,
  currentIndex,
  totalImages,
}: ImageModalProps) {
  // Fermer avec la touche Échap
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && hasPrevious && onPrevious) onPrevious();
      if (e.key === "ArrowRight" && hasNext && onNext) onNext();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      // Empêcher le scroll du body
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose, onPrevious, onNext, hasPrevious, hasNext]);

  if (!isOpen) return null;

  return (
    // biome-ignore lint/a11y/useSemanticElements: Le backdrop du modal nécessite un div pour la structure
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={onClose}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          onClose();
        }
      }}
      role="button"
      tabIndex={0}
      aria-label="Fermer le modal (cliquez en dehors de l'image)"
    >
      {/* Bouton fermer */}
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white cursor-pointer"
        aria-label="Fermer"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Compteur */}
      {currentIndex !== undefined && totalImages !== undefined && (
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm">
          {currentIndex + 1} / {totalImages}
        </div>
      )}

      {/* Navigation précédente */}
      {hasPrevious && onPrevious && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onPrevious();
          }}
          className="absolute left-4 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white cursor-pointer"
          aria-label="Image précédente"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {/* Navigation suivante */}
      {hasNext && onNext && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-4 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white cursor-pointer"
          aria-label="Image suivante"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* Image */}
      <div
        className="relative w-[90vw] h-[90vh] max-w-7xl"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}
        role="img"
        aria-label={imageAlt}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-contain"
          sizes="90vw"
          quality={90}
          priority
        />
      </div>
    </div>
  );
}
