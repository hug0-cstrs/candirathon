import type { Metadata } from "next";
import { ActualitesSection } from "@/components/ActualitesSection";

export const metadata: Metadata = {
  title: "Actualités – CanDirathon",
  description:
    "Restez informés des dernières actions, événements et initiatives du CanDirathon pour la lutte contre le cancer et le diabète.",
  alternates: {
    canonical: "https://www.candirathon.fr/actualites",
  },
  openGraph: {
    title: "Actualités – CanDirathon",
    description:
      "Restez informés des dernières actions, événements et initiatives du CanDirathon pour la lutte contre le cancer et le diabète.",
    url: "https://www.candirathon.fr/actualites",
    type: "website",
  },
};

export default function ActualitesPage() {
  return (
    <div>
      <ActualitesSection />
    </div>
  );
}
