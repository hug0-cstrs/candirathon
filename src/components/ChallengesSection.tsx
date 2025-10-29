import { Bike } from "lucide-react";
import Link from "next/link";
import { ChallengeCard } from "@/components/ui/challenge-card";
import { GradientButton } from "@/components/ui/gradient-button";
import { SectionHeader } from "@/components/ui/section-header";

const challenges = [
  {
    image:
      "https://res.cloudinary.com/dixkykxub/image/upload/v1760893209/trajet2022_rahlze.jpg",
    category: "Périple 2022",
    categoryVariant: "default" as const,
    date: "27-30 Avril 2022",
    title: "CanDirathon 2022",
    description:
      "De Fonsorbes (près de Toulouse) à Villeneuve-Lès-Maguelone (près de Montpellier) en 3 jours et demi.",
    metricIcon: Bike,
    metricValue: "315 km",
    metricLabel: "parcourus",
    href: "/galerie?filter=Périple 2022",
    trajet: "Fonsorbes → Villeneuve-Lès-Maguelone",
  },
  {
    image:
      "https://res.cloudinary.com/dixkykxub/image/upload/v1760893209/trajet2023_zencbs.jpg",
    category: "Périple 2023",
    categoryVariant: "default" as const,
    date: "27-30 Avril 2023",
    title: "CanDirathon 2023",
    description:
      "De Blaye (près de Bordeaux) jusqu'à Fonsorbes en 4 jours de vélo solidaire.",
    metricIcon: Bike,
    metricValue: "357 km",
    metricLabel: "parcourus",
    href: "/galerie?filter=Périple 2023",
    trajet: "Blaye → Fonsorbes",
  },
  {
    image:
      "https://res.cloudinary.com/dixkykxub/image/upload/v1760893209/trajet2024_wzanyw.jpg",
    category: "Périple 2024",
    categoryVariant: "default" as const,
    date: "9-13 Juillet 2024",
    title: "CanDirathon 2024",
    description:
      "De Toulouse jusqu'à Lit-et-Mixe (dans les Landes) en 5 jours. Participante : Alanis.",
    metricIcon: Bike,
    metricValue: "360 km",
    metricLabel: "parcourus",
    href: "/galerie?filter=Périple 2024",
    trajet: "Toulouse → Lit-et-Mixe",
    participants: ["Alanis"],
  },
  {
    image:
      "https://res.cloudinary.com/dixkykxub/image/upload/v1760893209/trajet2025_rzmvjb.jpg",
    category: "Périple 2025",
    categoryVariant: "default" as const,
    date: "19-24 Avril 2025",
    title: "CanDirathon 2025",
    description:
      "De Castelnaudary, le long du canal jusqu'à Murviel-lès-Béziers, puis une boucle passant par Premian, Saïx et Port Lauragais (via la Passa Païs), retour à l'Oncopole à Toulouse.",
    metricIcon: Bike,
    metricValue: "411 km",
    metricLabel: "parcourus",
    href: "/galerie?filter=Périple 2025",
    trajet: "Castelnaudary → Boucle → Toulouse",
    participants: ["Zouze", "Daniel", "Carole"],
  },
];

export function ChallengesSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center bg-gradient-to-b from-white to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Nos Périples"
          subtitle="Découvrez les éditions du CanDirathon, des aventures à vélo solidaires pour soutenir la recherche contre le cancer et le diabète."
          align="center"
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {challenges.map((challenge) => (
            <ChallengeCard key={challenge.title} {...challenge} />
          ))}
        </div>

        <div className="flex justify-center m-8">
          <Link href={"/galerie"}>
            <GradientButton size="lg" className="rounded-full px-8">
              Voir la galerie photos
            </GradientButton>
          </Link>
        </div>
      </div>
    </section>
  );
}
