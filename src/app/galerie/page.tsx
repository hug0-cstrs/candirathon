import { GallerySection } from "@/components/GallerySection";
import type { GalleryImage } from "@/lib/get-gallery-images";

export const metadata = {
  title: "Galerie Photo - CanDirathon",
  description:
    "Revivez les moments forts qui marquent l'énergie de notre communauté.",
};

export const revalidate = 3600; // Revalider toutes les heures

async function getGalleryImages(): Promise<GalleryImage[]> {
  try {
    // En production, utiliser l'URL complète du site
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
    const response = await fetch(`${baseUrl}/api/gallery`, {
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      console.error("Erreur lors de la récupération des images");
      return [];
    }

    const data = await response.json();
    return data.images || [];
  } catch (error) {
    console.error("Erreur lors du chargement des images:", error);
    return [];
  }
}

export default async function GaleriePage() {
  const allPhotos = await getGalleryImages();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Gallery */}
      <GallerySection allPhotos={allPhotos} />
    </div>
  );
}
