import { AncienEvenementsSection } from "@/components/AncienEvenementsSection";

export const metadata = {
  title: "Anciens évènements - CanDirathon",
  description:
    "Retrouvez les événements passés du CanDirathon : Raid Saint-Lys, CanDiShow et bien d'autres.",
};

export default function AncienEvenementsPage() {
  return (
    <div>
      <AncienEvenementsSection />
    </div>
  );
}
