"use client";

import type { AncienEvenementImage } from "@/app/api/anciens-evenements/route";
import { ActualiteCard } from "@/components/ui/actualite-card";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export function AncienEvenementsSection() {
  const [evenements, setEvenements] = useState<AncienEvenementImage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEvenements() {
      try {
        const response = await fetch("/api/anciens-evenements");
        const data = await response.json();

        if (data.success) {
          setEvenements(data.ancienEvenements);
        }
      } catch (error) {
        console.error(
          "Erreur lors du chargement des anciens événements:",
          error,
        );
      } finally {
        setLoading(false);
      }
    }

    fetchEvenements();
  }, []);

  if (loading) {
    return (
      <section className="min-h-screen flex flex-col justify-center bg-gradient-to-b from-white to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-pink-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
              <p className="text-gray-600">Chargement des événements...</p>
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
          title="Anciens évènements"
          subtitle="Retrouvez ici les événements passés du CanDirathon."
          align="center"
          className="mb-16 mt-8"
          titleClassName="bg-gradient-to-r from-pink-600 via-purple-600 to-blue-500 bg-clip-text text-transparent"
          subtitleClassName="text-gray-700"
        />

        {evenements.length > 0 ? (
          <div className="grid grid-cols-1 mb-12 md:grid-cols-2 gap-8">
            {evenements.map((evenement, index) => (
              <ActualiteCard
                key={`${evenement.src}-${index}`}
                imageSrc={evenement.src}
                title={evenement.title || `Événement ${index + 1}`}
                description={evenement.description}
                date={evenement.date}
                eventDate={evenement.eventDate}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 mb-12">
            <p className="text-gray-500 text-lg">
              Aucun ancien événement disponible pour le moment.
            </p>
          </div>
        )}

        <div className="text-center mb-12">
          <Link href="/actualites">
            <Button
              variant="outline"
              className="rounded-full font-semibold px-8 border-1 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white shadow-md transition-all cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour aux actualités
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
