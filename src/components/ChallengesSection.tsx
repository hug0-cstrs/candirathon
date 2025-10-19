import { BookOpen, Code, Heart, Leaf, Users, Users2 } from "lucide-react";
import { ChallengeCard } from "@/components/ui/challenge-card";
import { GradientButton } from "@/components/ui/gradient-button";
import { SectionHeader } from "@/components/ui/section-header";

const challenges = [
  {
    image: "/images/challenges/marathon.jpg",
    category: "Événement annuel",
    categoryVariant: "default" as const,
    date: "15 Mars 2024",
    title: "Marathon Solidaire",
    description:
      "Un marathon caritatif qui rassemble plus de 1000 participants pour collecter des fonds pour des associations locales.",
    metricIcon: Users,
    metricValue: "1200+",
    metricLabel: "participants",
    href: "/defis/marathon-solidaire",
  },
  {
    image: "/images/challenges/hackathon.jpg",
    category: "Tech for Good",
    categoryVariant: "secondary" as const,
    date: "22 Avril 2024",
    title: "Hackathon Social",
    description:
      "48 heures pour développer des solutions technologiques innovantes aux défis sociaux et environnementaux.",
    metricIcon: Code,
    metricValue: "50+",
    metricLabel: "développeurs",
    href: "/defis/hackathon-social",
  },
  {
    image: "/images/challenges/jardins.jpg",
    category: "Écologie",
    categoryVariant: "outline" as const,
    date: "10 Mai 2024",
    title: "Jardins Partagés",
    description:
      "Création de jardins communautaires pour promouvoir l'agriculture urbaine et renforcer les liens sociaux.",
    metricIcon: Leaf,
    metricValue: "15",
    metricLabel: "jardins créés",
    href: "/defis/jardins-partages",
  },
  {
    image: "/images/challenges/cuisine.jpg",
    category: "Intergénérationnel",
    categoryVariant: "default" as const,
    date: "5 Juin 2024",
    title: "Ateliers Cuisine",
    description:
      "Des ateliers culinaires qui rapprochent les générations autour de recettes traditionnelles et créatives.",
    metricIcon: Users2,
    metricValue: "500+",
    metricLabel: "participants",
    href: "/defis/ateliers-cuisine",
  },
  {
    image: "/images/challenges/alphabetisation.jpg",
    category: "Éducation",
    categoryVariant: "secondary" as const,
    date: "20 Juillet 2024",
    title: "Alphabétisation",
    description:
      "Programme d'accompagnement à la lecture et à l'écriture pour favoriser l'insertion sociale et professionnelle.",
    metricIcon: BookOpen,
    metricValue: "150+",
    metricLabel: "apprenants",
    href: "/defis/alphabetisation",
  },
  {
    image: "/images/challenges/sante-mentale.jpg",
    category: "Bien-être",
    categoryVariant: "outline" as const,
    date: "12 Août 2024",
    title: "Santé Mentale",
    description:
      "Sensibilisation et accompagnement autour de la santé mentale avec des professionnels et groupes de parole.",
    metricIcon: Heart,
    metricValue: "200+",
    metricLabel: "personnes aidées",
    href: "/defis/sante-mentale",
  },
];

export function ChallengesSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Nos Défis"
          subtitle="Découvrez les événements et initiatives que nous organisons pour créer un impact positif dans nos communautés."
          align="center"
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {challenges.map((challenge) => (
            <ChallengeCard key={challenge.title} {...challenge} />
          ))}
        </div>

        <div className="flex justify-center">
          <GradientButton size="lg" className="rounded-full px-8">
            Voir tous nos défis
          </GradientButton>
        </div>
      </div>
    </section>
  );
}
