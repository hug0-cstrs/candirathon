"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { GalleryFilters } from "@/components/ui/gallery-filters";
import { GradientButton } from "@/components/ui/gradient-button";
import { ImageModal } from "@/components/ui/image-modal";
import { PhotoCard } from "@/components/ui/photo-card";
import { SectionHeader } from "@/components/ui/section-header";
import type { GalleryImage } from "@/lib/get-gallery-images";

const filters = [
  "Tous",
  "Périple 2022",
  "Périple 2023",
  "Périple 2024",
  "Périple 2025",
];

// Nombre d'images à afficher initialement et à charger à chaque clic
const IMAGES_PER_PAGE = 12;

interface GallerySectionProps {
  allPhotos: GalleryImage[];
}

export function GallerySection({ allPhotos }: GallerySectionProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const filterFromUrl = searchParams.get("filter");

  // Initialiser le filtre depuis l'URL si présent et valide
  const initialFilter =
    filterFromUrl && filters.includes(filterFromUrl) ? filterFromUrl : "Tous";

  const [activeFilter, setActiveFilter] = useState(initialFilter);
  const [displayCount, setDisplayCount] = useState(IMAGES_PER_PAGE);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null,
  );

  // Mettre à jour le filtre quand l'URL change
  useEffect(() => {
    if (filterFromUrl && filters.includes(filterFromUrl)) {
      setActiveFilter(filterFromUrl);
      setDisplayCount(IMAGES_PER_PAGE); // Réinitialiser la pagination
    }
  }, [filterFromUrl]);

  // Filtrer les photos selon le filtre actif
  const filteredPhotos = useMemo(() => {
    return activeFilter === "Tous"
      ? allPhotos
      : allPhotos.filter((photo) => photo.category === activeFilter);
  }, [activeFilter, allPhotos]);

  // Photos à afficher (avec limite de pagination)
  const displayedPhotos = useMemo(() => {
    return filteredPhotos.slice(0, displayCount);
  }, [filteredPhotos, displayCount]);

  // Vérifier s'il reste des photos à charger
  const hasMorePhotos = displayedPhotos.length < filteredPhotos.length;

  // Charger plus de photos
  const loadMorePhotos = () => {
    setDisplayCount((prev) => prev + IMAGES_PER_PAGE);
  };

  // Réinitialiser le compteur lors du changement de filtre et mettre à jour l'URL
  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    setDisplayCount(IMAGES_PER_PAGE);

    // Mettre à jour l'URL avec le nouveau filtre
    const params = new URLSearchParams(searchParams.toString());
    if (filter === "Tous") {
      // Supprimer le paramètre filter si "Tous" est sélectionné
      params.delete("filter");
    } else {
      params.set("filter", filter);
    }

    // Naviguer vers la nouvelle URL
    const newUrl = params.toString()
      ? `/galerie?${params.toString()}`
      : "/galerie";
    router.push(newUrl, { scroll: false });
  };

  // Gestion du modal
  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  const handleCloseModal = () => {
    setSelectedImageIndex(null);
  };

  const handlePreviousImage = () => {
    if (selectedImageIndex !== null && selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    }
  };

  const handleNextImage = () => {
    if (
      selectedImageIndex !== null &&
      selectedImageIndex < filteredPhotos.length - 1
    ) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  };

  const selectedImage =
    selectedImageIndex !== null ? filteredPhotos[selectedImageIndex] : null;

  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-pink-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-2 lg:px-2">
        <SectionHeader
          title="Galerie Photo"
          subtitle="Revivez les moments forts qui marquent l'énergie de notre communauté."
          align="center"
          className="mb-16 mt-8"
        />

        {/* Filters */}
        <GalleryFilters
          filters={filters}
          activeFilter={activeFilter}
          onFilterChange={handleFilterChange}
          className="mb-12"
        />

        {/* Photos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          {displayedPhotos.map((photo, index) => (
            <PhotoCard
              key={`${photo.src}-${index}`}
              src={photo.src}
              alt={photo.alt}
              onClick={() => handleImageClick(index)}
            />
          ))}
        </div>

        {/* Compteur et bouton "Plus d'images" */}
        {filteredPhotos.length > 0 && (
          <div className="flex flex-col items-center gap-4">
            <p className="text-sm text-gray-600">
              {displayedPhotos.length} / {filteredPhotos.length} photos
              affichées
            </p>
            {hasMorePhotos && (
              <GradientButton
                size="lg"
                className="rounded-full px-8 m-8"
                onClick={loadMorePhotos}
              >
                Plus d'images
              </GradientButton>
            )}
          </div>
        )}

        {/* Message si aucune photo */}
        {filteredPhotos.length === 0 && (
          <p className="text-center text-gray-500">
            Aucune photo disponible pour ce filtre.
          </p>
        )}
      </div>

      {/* Modal d'affichage de l'image */}
      {selectedImage && (
        <ImageModal
          isOpen={selectedImageIndex !== null}
          onClose={handleCloseModal}
          imageSrc={selectedImage.src}
          imageAlt={selectedImage.alt}
          onPrevious={handlePreviousImage}
          onNext={handleNextImage}
          hasPrevious={selectedImageIndex !== null && selectedImageIndex > 0}
          hasNext={
            selectedImageIndex !== null &&
            selectedImageIndex < filteredPhotos.length - 1
          }
          currentIndex={selectedImageIndex ?? 0}
          totalImages={filteredPhotos.length}
        />
      )}
    </section>
  );
}
