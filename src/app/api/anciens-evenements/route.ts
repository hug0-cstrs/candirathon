import { getCloudinaryImages } from "@/lib/cloudinary";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const revalidate = 3600;

export interface AncienEvenementImage {
  src: string;
  alt: string;
  title?: string;
  description?: string;
  date?: string;
  eventDate?: string;
}

/**
 * Extrait les informations d'un ancien événement depuis le nom de fichier
 * Format attendu: affiche-nom-evenement.png
 */
function extractEventInfo(filename: string): {
  title: string;
  description: string;
  eventDate?: string;
} {
  const cleanName = filename
    .replace(/\.(png|jpg|jpeg|webp)$/i, "")
    .replace(/^affiche-/, "");

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

  const eventKey = Object.keys(eventMapping).find((key) =>
    cleanName.toLowerCase().includes(key),
  );

  if (eventKey) {
    return eventMapping[eventKey];
  }

  // Fallback : transformer le nom de fichier en titre lisible
  const title = cleanName
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    title,
    description: "Retrouvez les détails de cet ancien événement CanDirathon.",
  };
}

/**
 * API Route pour récupérer les anciens événements depuis Cloudinary
 * GET /api/anciens-evenements
 */
export async function GET() {
  try {
    const cloudinaryImages = await getCloudinaryImages("anciens-evenements");

    const ancienEvenements: AncienEvenementImage[] = cloudinaryImages.map(
      (img) => {
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
      },
    );

    return NextResponse.json({
      success: true,
      ancienEvenements,
      count: ancienEvenements.length,
    });
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des anciens événements:",
      error,
    );
    return NextResponse.json(
      {
        success: false,
        error: "Erreur lors de la récupération des anciens événements",
        ancienEvenements: [],
      },
      { status: 500 },
    );
  }
}
