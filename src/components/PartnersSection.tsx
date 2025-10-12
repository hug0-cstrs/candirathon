import {
  Building2,
  Leaf,
  Palette,
  Landmark,
  Building,
  GraduationCap,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { PartnerCard } from "@/components/ui/partner-card";
import { PartnerLogosGrid } from "@/components/ui/partner-logos-grid";

const mainPartners = [
  {
    logo: <Building2 className="w-10 h-10 text-white" />,
    logoBackgroundColor: "bg-blue-600",
    name: "TechForGood",
    description:
      "Entreprise technologique qui nous accompagne dans la digitalisation de nos processus.",
    badgeIcon: Building2,
    badgeText: "Partenaire depuis 3 ans",
  },
  {
    logo: <Leaf className="w-10 h-10 text-white" />,
    logoBackgroundColor: "bg-green-500",
    name: "EcoVision",
    description:
      "Spécialiste en développement durable qui nous guide dans nos initiatives écologiques.",
    badgeIcon: Leaf,
    badgeText: "Partenaire environnemental",
  },
  {
    logo: <Palette className="w-10 h-10 text-white" />,
    logoBackgroundColor: "bg-orange-500",
    name: "Créa Studio",
    description:
      "Agence créative qui nous aide à concevoir nos supports de communication visuelle.",
    badgeIcon: Palette,
    badgeText: "Partenaire créatif",
  },
  {
    logo: <Landmark className="w-10 h-10 text-white" />,
    logoBackgroundColor: "bg-gray-800",
    name: "Banque Solidaire",
    description:
      "Institution financière qui soutient nos projets à impact social et environnemental.",
    badgeIcon: Landmark,
    badgeText: "Soutien financier",
  },
  {
    logo: <Building className="w-10 h-10 text-white" />,
    logoBackgroundColor: "bg-sky-500",
    name: "Ville de Lyon",
    description:
      "Collectivité territoriale qui nous accompagne dans nos projets communautaires locaux.",
    badgeIcon: Building,
    badgeText: "Partenaire institutionnel",
  },
  {
    logo: <GraduationCap className="w-10 h-10 text-white" />,
    logoBackgroundColor: "bg-indigo-600",
    name: "Université Lyon 2",
    description:
      "Établissement d'enseignement supérieur qui nous apporte son expertise académique.",
    badgeIcon: GraduationCap,
    badgeText: "Partenaire académique",
  },
];

const otherPartners = [
  { name: "Partner 1", logo: "/images/partners/logo-1.png" },
  { name: "Partner 2", logo: "/images/partners/logo-2.png" },
  { name: "Partner 3", logo: "/images/partners/logo-3.png" },
  { name: "Partner 4", logo: "/images/partners/logo-4.png" },
  { name: "Partner 5", logo: "/images/partners/logo-5.png" },
  { name: "Partner 6", logo: "/images/partners/logo-6.png" },
];

export function PartnersSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Nos Partenaires"
          subtitle="Ensemble, nous créons un écosystème solidaire qui amplifie notre impact social et communautaire."
          align="center"
          className="mb-16"
        />

        {/* Main Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {mainPartners.map((partner) => (
            <PartnerCard key={partner.name} {...partner} />
          ))}
        </div>

        {/* Other Partners */}
        <div className="space-y-8">
          <h3 className="text-2xl md:text-3xl font-bold text-center">
            Ils nous font confiance
          </h3>
          <p className="text-center text-gray-600 max-w-2xl mx-auto">
            Plus de 50 partenaires nous accompagnent dans notre mission
          </p>
          <PartnerLogosGrid partners={otherPartners} />
        </div>
      </div>
    </section>
  );
}
