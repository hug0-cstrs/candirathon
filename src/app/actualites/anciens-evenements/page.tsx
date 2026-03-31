import type { Metadata } from "next";
import { AncienEvenementsSection } from "@/components/AncienEvenementsSection";

export const metadata: Metadata = {
  title: "Anciens Événements – CanDirathon",
  description:
    "Retrouvez les événements passés du CanDirathon : Raid Saint-Lys, CanDiShow et bien d'autres initiatives solidaires.",
  alternates: {
    canonical: "https://www.candirathon.fr/actualites/anciens-evenements",
  },
  openGraph: {
    title: "Anciens Événements – CanDirathon",
    description:
      "Retrouvez les événements passés du CanDirathon : Raid Saint-Lys, CanDiShow et bien d'autres initiatives solidaires.",
    url: "https://www.candirathon.fr/actualites/anciens-evenements",
    type: "website",
  },
};

export default function AncienEvenementsPage() {
  return (
    <div>
      <AncienEvenementsSection />
    </div>
  );
}
