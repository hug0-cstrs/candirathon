"use client";

import { useState } from "react";
import { GalleryFilters } from "@/components/ui/gallery-filters";
import { GradientButton } from "@/components/ui/gradient-button";
import { PhotoCard } from "@/components/ui/photo-card";
import { SectionHeader } from "@/components/ui/section-header";

const filters = ["Tous", "Événements", "Ateliers", "Communauté", "Partenaires"];

const photos = [
  {
    src: "/images/gallery/photo-1.jpg",
    alt: "Marathon solidaire",
    category: "Événements",
  },
  {
    src: "/images/gallery/photo-2.jpg",
    alt: "Hackathon tech",
    category: "Événements",
  },
  {
    src: "/images/gallery/photo-3.jpg",
    alt: "Jardins partagés",
    category: "Communauté",
  },
  {
    src: "/images/gallery/photo-4.jpg",
    alt: "Atelier cuisine",
    category: "Ateliers",
  },
  {
    src: "/images/gallery/photo-5.jpg",
    alt: "Réunion équipe",
    category: "Communauté",
  },
  {
    src: "/images/gallery/photo-6.jpg",
    alt: "Partenaires",
    category: "Partenaires",
  },
  {
    src: "/images/gallery/photo-7.jpg",
    alt: "Bénévoles",
    category: "Communauté",
  },
  {
    src: "/images/gallery/photo-8.jpg",
    alt: "Atelier créatif",
    category: "Ateliers",
  },
  {
    src: "/images/gallery/photo-9.jpg",
    alt: "Événement sportif",
    category: "Événements",
  },
  {
    src: "/images/gallery/photo-10.jpg",
    alt: "Jardin urbain",
    category: "Communauté",
  },
  {
    src: "/images/gallery/photo-11.jpg",
    alt: "Formation",
    category: "Ateliers",
  },
  {
    src: "/images/gallery/photo-12.jpg",
    alt: "Rencontre",
    category: "Partenaires",
  },
];

export function GallerySection() {
  const [activeFilter, setActiveFilter] = useState("Tous");

  const filteredPhotos =
    activeFilter === "Tous"
      ? photos
      : photos.filter((photo) => photo.category === activeFilter);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Galerie Photo"
          subtitle="Revivez les moments forts qui marquent l'énergie de notre communauté."
          align="center"
          className="mb-12"
        />

        {/* Filters */}
        <GalleryFilters
          filters={filters}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          className="mb-12"
        />

        {/* Photos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          {filteredPhotos.map((photo) => (
            <PhotoCard key={photo.src} src={photo.src} alt={photo.alt} />
          ))}
        </div>

        <div className="flex justify-center">
          <GradientButton size="lg" className="rounded-full px-8">
            Voir plus de photos
          </GradientButton>
        </div>
      </div>
    </section>
  );
}
