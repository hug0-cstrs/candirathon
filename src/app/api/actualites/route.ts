import { getCloudinaryImages } from "@/lib/cloudinary";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const revalidate = 3600; // Revalider toutes les heures

export interface ActualiteImage {
  src: string;
  alt: string;
  title?: string;
  description?: string;
  date?: string;
  eventDate?: string;
}

/**
 * Extrait les informations d'un événement depuis le nom de fichier
 * Format attendu: affiche-nom-evenement.png
 */
function extractEventInfo(filename: string): {
  title: string;
  description: string;
  eventDate?: string;
} {
  // Retirer l'extension et "affiche-" du début
  const cleanName = filename
    .replace(/\.(png|jpg|jpeg|webp)$/i, "")
    .replace(/^affiche-/, "");

  // Mapping des événements connus
  const eventMapping: Record<
    string,
    { title: string; description: string; eventDate?: string }
  > = {
    "candirathon-2026": {
      title: "CanDirathon 2026",
      description:
        "5 jours d'aventure, de dépassement de soi et de solidarité humaine face à la maladie.",
      eventDate: "du 25 au 30 avril 2026",
    },
  };

  // Chercher une correspondance
  const eventKey = Object.keys(eventMapping).find((key) =>
    cleanName.includes(key),
  );

  if (eventKey) {
    return eventMapping[eventKey];
  }

  // Fallback par défaut : CanDirathon 2026
  return {
    title: "CanDirathon 2026",
    description:
      "5 jours d'aventure, de dépassement de soi et de solidarité humaine face à la maladie.",
    eventDate: "du 25 au 30 avril 2026",
  };
}

/**
 * API Route pour récupérer les images d'actualités depuis Cloudinary
 * GET /api/actualites
 */
export async function GET() {
  try {
    // Récupérer les images du dossier /actualites dans Cloudinary
    const cloudinaryImages = await getCloudinaryImages("actualites");

    const actualites: ActualiteImage[] = cloudinaryImages.map((img) => {
      const filename = img.public_id.split("/").pop() || "";
      const eventInfo = extractEventInfo(filename);

      return {
        src: img.secure_url,
        alt: eventInfo.title,
        title: eventInfo.title,
        description: eventInfo.description,
        eventDate: eventInfo.eventDate,
        date: new Date(img.created_at).toLocaleDateString("fr-FR", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
      };
    });

    return NextResponse.json({
      success: true,
      actualites,
      count: actualites.length,
    });
  } catch (error) {
    console.error("Erreur lors de la récupération des actualités:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Erreur lors de la récupération des actualités",
        actualites: [],
      },
      { status: 500 },
    );
  }
}
