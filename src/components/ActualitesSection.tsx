"use client";

import { ArrowRight, History } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { ActualiteImage } from "@/app/api/actualites/route";
import { ActualiteCard } from "@/components/ui/actualite-card";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";

export function ActualitesSection() {
  const [evenements, setEvenements] = useState<ActualiteImage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEvenements() {
      try {
        const response = await fetch("/api/actualites");
        const data = await response.json();

        if (data.success) {
          setEvenements(data.actualites);
        }
      } catch (error) {
        console.error("Erreur lors du chargement des actualités:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchEvenements();
  }, []);

  if (loading) {
    return (
      <section className="min-h-screen flex flex-col justify-center bg-linear-to-b from-white to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center min-h-100">
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
    <section className="min-h-screen flex flex-col justify-center bg-linear-to-b from-white to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Actualités"
          subtitle="Restez informés de nos dernières actions, événements et initiatives"
          align="center"
          className="mb-8 mt-8"
          titleClassName="bg-gradient-to-r from-pink-600 via-purple-600 to-blue-500 bg-clip-text text-transparent"
          subtitleClassName="text-gray-700"
        />

        {evenements.length > 0 ? (
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {evenements.map((evenement, index) => (
              <div
                key={`${evenement.src}-${index}`}
                className="w-full md:w-[70%]"
              >
                <ActualiteCard
                  imageSrc={evenement.src}
                  title={evenement.title || `Actualité ${index + 1}`}
                  description={evenement.description}
                  date={evenement.date}
                  eventDate={evenement.eventDate}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 mb-12">
            <p className="text-gray-500 text-lg">
              Aucune actualité disponible pour le moment.
            </p>
          </div>
        )}

        {/* Lien vers les anciens événements */}
        <div className="text-center mb-12">
          <Link href="/actualites/anciens-evenements">
            <Button
              variant="outline"
              className="rounded-full font-semibold px-8 border border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white shadow-md transition-all cursor-pointer"
            >
              <History className="w-4 h-4" />
              Anciens évènements
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
