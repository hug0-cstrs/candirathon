import { AboutSection } from "@/components/AboutSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Qui sommes-nous ? - CanDirathon",
  description:
    "Decouvrez l'histoire de CanDirathon, une association nee d'un defi familial face au cancer et au diabete. De Toulouse a Montpellier, le combat continue.",
};

export default function QuiSommesNousPage() {
  return (
    <main className="min-h-screen">
      <AboutSection />
    </main>
  );
}
