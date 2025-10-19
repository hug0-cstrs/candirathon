import fs from "node:fs";
import path from "node:path";

export interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

/**
 * Récupère toutes les images d'un dossier de périple
 * @param year - L'année du périple (2022, 2023, 2024, 2025)
 * @returns Array d'objets GalleryImage
 */
function getImagesFromPeriple(year: string): GalleryImage[] {
  const imagesDir = path.join(
    process.cwd(),
    "public",
    "images",
    `Périple-${year}`,
  );

  try {
    const files = fs.readdirSync(imagesDir);
    return files
      .filter((file) => /\.(jpg|jpeg|png|webp)$/i.test(file))
      .map((file) => ({
        src: `/images/Périple-${year}/${file}`,
        alt: `Périple ${year}`,
        category: `Périple ${year}`,
      }));
  } catch (error) {
    console.warn(`Impossible de lire le dossier ${imagesDir}:`, error);
    return [];
  }
}

/**
 * Récupère toutes les images de la galerie, triées par périple
 * @returns Array de toutes les images de la galerie
 */
export function getAllGalleryImages(): GalleryImage[] {
  const years = ["2022", "2023", "2024", "2025"];
  const allImages: GalleryImage[] = [];

  for (const year of years) {
    const images = getImagesFromPeriple(year);
    allImages.push(...images);
  }

  return allImages;
}
