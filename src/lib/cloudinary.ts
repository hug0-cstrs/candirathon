import { v2 as cloudinary } from "cloudinary";

// Configuration Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export interface CloudinaryImage {
  public_id: string;
  format: string;
  version: number;
  width: number;
  height: number;
  url: string;
  secure_url: string;
  created_at: string;
  folder?: string;
}

/**
 * Récupère toutes les images d'un dossier Cloudinary
 * @param folderPath - Le chemin du dossier (ex: "periples/2022")
 * @returns Liste des images avec leurs métadonnées
 */
export async function getCloudinaryImages(
  folderPath: string,
): Promise<CloudinaryImage[]> {
  try {
    const result = await cloudinary.search
      .expression(`folder:${folderPath}/*`)
      .sort_by("created_at", "desc")
      .max_results(500)
      .execute();

    return result.resources || [];
  } catch (error) {
    console.error(
      `Erreur lors de la récupération des images de ${folderPath}:`,
      error,
    );
    return [];
  }
}

/**
 * Génère une URL optimisée pour Cloudinary
 * @param publicId - L'identifiant public de l'image
 * @param options - Options de transformation
 * @returns URL optimisée
 */
export function getOptimizedImageUrl(
  publicId: string,
  options: {
    width?: number;
    height?: number;
    quality?: string;
    format?: string;
  } = {},
): string {
  return cloudinary.url(publicId, {
    transformation: [
      {
        quality: options.quality || "auto",
        fetch_format: options.format || "auto",
        width: options.width,
        height: options.height,
        crop: "limit",
      },
    ],
  });
}

export default cloudinary;
