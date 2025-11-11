"use client";

import { useEffect, useState } from "react";
import type { ActualiteImage } from "@/app/api/actualites/route";
import { ActualiteCard } from "@/components/ui/actualite-card";
import { SectionHeader } from "@/components/ui/section-header";

export function ActualitesSection() {
  const [actualites, setActualites] = useState<ActualiteImage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchActualites() {
      try {
        const response = await fetch("/api/actualites");
        const data = await response.json();

        if (data.success) {
          setActualites(data.actualites);
        }
      } catch (error) {
        console.error("Erreur lors du chargement des actualités:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchActualites();
  }, []);

  if (loading) {
    return (
      <section className="min-h-screen flex flex-col justify-center bg-gradient-to-b from-white to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-pink-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
              <p className="text-gray-600">Chargement des actualités...</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen flex flex-col justify-center bg-gradient-to-b from-white to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Actualités"
          subtitle="Restez informés de nos dernières actions, événements et initiatives pour la lutte contre le cancer."
          align="center"
          className="mb-16 mt-8"
          titleClassName="bg-gradient-to-r from-pink-600 via-purple-600 to-blue-500 bg-clip-text text-transparent"
          subtitleClassName="text-gray-700"
        />

        {/* Actualités Grid */}
        {actualites.length > 0 ? (
          <div className="grid grid-cols-1 mb-8 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {actualites.map((actualite, index) => (
              <ActualiteCard
                key={`${actualite.src}-${index}`}
                imageSrc={actualite.src}
                title={actualite.title || `Actualité ${index + 1}`}
                description={actualite.description}
                date={actualite.date}
                eventDate={actualite.eventDate}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              Aucune actualité disponible pour le moment.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
