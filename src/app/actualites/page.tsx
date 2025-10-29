import { ActualitesSection } from "@/components/ActualitesSection";

export const metadata = {
  title: "Actualités - CanDirathon",
  description:
    "Restez informés de nos dernières actions, événements et initiatives pour la lutte contre le cancer.",
};

export default function ActualitesPage() {
  return (
    <div>
      {/* Actualités Section */}
      <ActualitesSection />
    </div>
  );
}
