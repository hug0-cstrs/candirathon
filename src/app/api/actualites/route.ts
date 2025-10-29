import { NextResponse } from "next/server";
import { getCloudinaryImages } from "@/lib/cloudinary";

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
    "raid-saint-lys": {
      title: "Raid Saint-Lys",
      description:
        "Rejoignez-nous pour le Raid Saint-Lys, un événement sportif solidaire au profit de la lutte contre le cancer.",
      eventDate: "19 octobre 2025",
    },
    candishow: {
      title: "CanDiShow",
      description:
        "Ne manquez pas le CanDiShow, une soirée exceptionnelle pour soutenir nos associations partenaires.",
      eventDate: "25 octobre 2025",
    },
  };

  // Chercher une correspondance
  const eventKey = Object.keys(eventMapping).find((key) =>
    cleanName.includes(key),
  );

  if (eventKey) {
    return eventMapping[eventKey];
  }

  return {
    title: "CANDISHOW",
    description:
      "Ne manquez pas le CanDiShow, une soirée exceptionnelle pour soutenir nos associations partenaires.",
    eventDate: "25 octobre 2025",
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
