import type { Metadata } from "next";
import { ChallengesSection } from "@/components/ChallengesSection";

export const metadata: Metadata = {
  title: "Nos Périples – Défis à vélo solidaires | CanDirathon",
  description:
    "Découvrez les périples à vélo du CanDirathon : 2022 Fonsorbes→Montpellier, 2023 Bordeaux→Fonsorbes, 2024 Toulouse→Landes, 2025 Castelnaudary→Toulouse. Plus de 1 400 km parcourus !",
  alternates: {
    canonical: "https://www.candirathon.fr/periples",
  },
  openGraph: {
    title: "Nos Périples – CanDirathon",
    description:
      "Découvrez les défis à vélo solidaires du CanDirathon : plus de 1 400 km parcourus depuis 2022 pour soutenir la recherche contre le cancer et le diabète.",
    url: "https://www.candirathon.fr/periples",
    type: "website",
  },
};

const eventsSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Périples CanDirathon",
  description:
    "Les défis à vélo solidaires organisés par l'association CanDirathon",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "SportsEvent",
        name: "CanDirathon 2025",
        startDate: "2025-04-19",
        endDate: "2025-04-24",
        description:
          "De Castelnaudary, le long du canal jusqu'à Murviel-lès-Béziers, puis une boucle passant par Premian, Saïx et Port Lauragais, retour à l'Oncopole à Toulouse. 411 km parcourus.",
        location: {
          "@type": "Place",
          name: "Castelnaudary → Toulouse",
          address: { "@type": "PostalAddress", addressCountry: "FR" },
        },
        organizer: {
          "@type": "NGO",
          name: "CanDirathon",
          url: "https://www.candirathon.fr",
        },
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "SportsEvent",
        name: "CanDirathon 2024",
        startDate: "2024-07-09",
        endDate: "2024-07-13",
        description:
          "De Toulouse jusqu'à Lit-et-Mixe (dans les Landes) en 5 jours. 373 km parcourus.",
        location: {
          "@type": "Place",
          name: "Toulouse → Lit-et-Mixe",
          address: { "@type": "PostalAddress", addressCountry: "FR" },
        },
        organizer: {
          "@type": "NGO",
          name: "CanDirathon",
          url: "https://www.candirathon.fr",
        },
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "SportsEvent",
        name: "CanDirathon 2023",
        startDate: "2023-04-27",
        endDate: "2023-04-30",
        description:
          "De Blaye (près de Bordeaux) jusqu'à Fonsorbes en 4 jours de vélo solidaire. 357 km parcourus.",
        location: {
          "@type": "Place",
          name: "Blaye → Fonsorbes",
          address: { "@type": "PostalAddress", addressCountry: "FR" },
        },
        organizer: {
          "@type": "NGO",
          name: "CanDirathon",
          url: "https://www.candirathon.fr",
        },
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "SportsEvent",
        name: "CanDirathon 2022",
        startDate: "2022-04-27",
        endDate: "2022-04-30",
        description:
          "De Fonsorbes (près de Toulouse) à Villeneuve-Lès-Maguelone (près de Montpellier) en 3 jours et demi. 315 km parcourus.",
        location: {
          "@type": "Place",
          name: "Fonsorbes → Villeneuve-Lès-Maguelone",
          address: { "@type": "PostalAddress", addressCountry: "FR" },
        },
        organizer: {
          "@type": "NGO",
          name: "CanDirathon",
          url: "https://www.candirathon.fr",
        },
      },
    },
  ],
});

export default function DefisPage() {
  return (
    <div>
      <ChallengesSection />
      {/* JSON-LD structured data – static constant, no user input */}
      <script type="application/ld+json">{eventsSchema}</script>
    </div>
  );
}
