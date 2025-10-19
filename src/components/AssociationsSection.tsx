import { GraduationCap, Heart, Sparkles } from "lucide-react";
import { AssociationCard } from "@/components/ui/association-card";
import { SectionHeader } from "@/components/ui/section-header";

const mainAssociations = [
  {
    logoSrc: "/images/association/fondation_toulouse_cancer.png",
    name: "Fondation Toulouse Cancer Santé",
    description:
      "Fondation reconnue d'utilité publique qui finance des projets de recherche en cancérologie innovants et à fort potentiel. 100% des dons sont dédiés à la recherche.",
    badgeIcon: GraduationCap,
    badgeText: "Recherche & Innovation",
    url: "https://www.toulousecancer.fr/",
  },
  {
    logoSrc: "/images/association/Pr_Gourdy.jpg",
    name: "Service du Professeur Gourdy",
    description:
      "Service de diabétologie du CHU de Toulouse dirigé par le Pr Pierre Gourdy, coordonnant la recherche cardiovasculaire et métabolique via la fédération IMPACT.",
    badgeIcon: Heart,
    badgeText: "Recherche métabolique",
    url: "https://www.chu-toulouse.fr/-diabetologie-",
  },
  {
    logoSrc: "/images/association/ARSE.webp",
    name: "Association Régionale des Socio-Esthéticiennes",
    description:
      "L'ARSE accompagne les personnes fragilisées par la maladie grâce à la socio-esthétique, pour les aider à retrouver dignité et estime de soi pendant les traitements.",
    badgeIcon: Sparkles,
    badgeText: "Accompagnement & Bien-être",
    url: "https://associationregionaledesocioesthetiqueoc.com/qui-sommes-nous/",
  },
];

export function AssociationsSection() {
  return (
    <section className="pt-20 pb-0 bg-gradient-to-b from-white to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <SectionHeader
          title="Associations Soutenues"
          subtitle="Ensemble, nous soutenons les associations qui luttent contre le cancer et accompagnent les malades et leurs proches."
          align="center"
          className="mb-16"
          titleClassName="bg-gradient-to-r from-pink-600 via-purple-600 to-blue-500 bg-clip-text text-transparent"
          subtitleClassName="text-gray-700"
        />

        {/* Main Associations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-0 lg:mb-2">
          {mainAssociations.map((association) => (
            <AssociationCard key={association.name} {...association} />
          ))}
        </div>
      </div>
    </section>
  );
}
