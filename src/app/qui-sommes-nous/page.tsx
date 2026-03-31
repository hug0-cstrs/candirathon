import type { Metadata } from "next";
import { AboutSection } from "@/components/AboutSection";

export const metadata: Metadata = {
  title: "Qui sommes-nous ? - CanDirathon",
  description:
    "Découvrez l'histoire de CanDirathon, une association née d'un défi familial face au cancer et au diabète. De Toulouse à Montpellier, le combat continue.",
  alternates: {
    canonical: "https://www.candirathon.fr/qui-sommes-nous",
  },
  openGraph: {
    title: "Qui sommes-nous ? – CanDirathon",
    description:
      "Découvrez l'histoire de CanDirathon, une association née d'un défi familial face au cancer et au diabète.",
    url: "https://www.candirathon.fr/qui-sommes-nous",
    type: "website",
  },
};

export default function QuiSommesNousPage() {
  return (
    <main>
      <AboutSection />
    </main>
  );
}
