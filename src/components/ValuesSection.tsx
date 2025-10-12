import { Handshake, Rocket, Globe, Sprout } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { ValueCard } from "@/components/ui/value-card";

const values = [
  {
    icon: Handshake,
    iconColor: "pink" as const,
    title: "Solidarité",
    description:
      "Nous croyons en la force du collectif et en l'entraide mutuelle pour surmonter les défis.",
  },
  {
    icon: Rocket,
    iconColor: "purple" as const,
    title: "Innovation",
    description:
      "Nous explorons constamment de nouvelles façons de créer un impact social positif.",
  },
  {
    icon: Globe,
    iconColor: "blue" as const,
    title: "Inclusion",
    description:
      "Nous valorisons la diversité et créons des espaces accueillants pour tous.",
  },
  {
    icon: Sprout,
    iconColor: "yellow" as const,
    title: "Durabilité",
    description:
      "Nous pensons à long terme et agissons de manière responsable envers l'environnement.",
  },
];

export function ValuesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Nos Valeurs"
          subtitle="Les principes qui guident chacune de nos actions et définissent notre identité associative."
          align="center"
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value) => (
            <ValueCard
              key={value.title}
              icon={value.icon}
              iconColor={value.iconColor}
              title={value.title}
              description={value.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
