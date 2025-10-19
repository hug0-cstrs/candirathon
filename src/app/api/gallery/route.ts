import { NextResponse } from "next/server";
import { getCloudinaryImages } from "@/lib/cloudinary";
import type { GalleryImage } from "@/lib/get-gallery-images";

export const dynamic = "force-dynamic";
export const revalidate = 3600; // Revalider toutes les heures

/**
 * API Route pour récupérer les images de la galerie depuis Cloudinary
 * GET /api/gallery?year=2022 ou GET /api/gallery (toutes les années)
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const year = searchParams.get("year");

  try {
    let allImages: GalleryImage[] = [];

    if (year) {
      // Récupérer les images d'une année spécifique
      const cloudinaryImages = await getCloudinaryImages(`periples/${year}`);
      allImages = cloudinaryImages.map((img) => ({
        src: img.secure_url,
        alt: `Périple ${year}`,
        category: `Périple ${year}`,
      }));
    } else {
      // Récupérer toutes les images de tous les périples
      const years = ["2022", "2023", "2024", "2025"];
      const promises = years.map(async (y) => {
        const cloudinaryImages = await getCloudinaryImages(`periples/${y}`);
        return cloudinaryImages.map((img) => ({
          src: img.secure_url,
          alt: `Périple ${y}`,
          category: `Périple ${y}`,
        }));
      });

      const results = await Promise.all(promises);
      allImages = results.flat();
    }

    return NextResponse.json({
      success: true,
      images: allImages,
      count: allImages.length,
    });
  } catch (error) {
    console.error("Erreur lors de la récupération des images:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Erreur lors de la récupération des images",
        images: [],
      },
      { status: 500 },
    );
  }
}
