import { GallerySection } from "@/components/GallerySection";
import { SectionHeader } from "@/components/ui/section-header";

export const metadata = {
  title: "Galerie Photo - CanDirathon",
  description:
    "Revivez les moments forts qui marquent l'énergie de notre communauté.",
};

export default function GaleriePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Gallery */}
      <GallerySection />
    </div>
  );
}
