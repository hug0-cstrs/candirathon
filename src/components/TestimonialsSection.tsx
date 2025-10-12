import { SectionHeader } from "@/components/ui/section-header";
import { TestimonialCard } from "@/components/ui/testimonial-card";

const testimonials = [
  {
    avatar: "/images/testimonials/marie.jpg",
    name: "Marie Dubois",
    role: "Bénévole depuis 2 ans",
    rating: 5,
    testimonial:
      "CanDirathon m'a permis de rencontrer des personnes extraordinaires et de contribuer concrètement à des projets qui ont du sens. L'équipe est bienveillante et l'organisation impeccable.",
  },
  {
    avatar: "/images/testimonials/pierre.jpg",
    name: "Pierre Martin",
    role: "Partenaire TechForGood",
    rating: 5,
    testimonial:
      "Collaborer avec CanDirathon a été une expérience enrichissante. Leur approche innovante et leur engagement sincère font la différence dans le secteur associatif.",
  },
  {
    avatar: "/images/testimonials/sophie.jpg",
    name: "Sophie Chen",
    role: "Participante hackathon",
    rating: 5,
    testimonial:
      "Le hackathon organisé par CanDirathon m'a permis de mettre mes compétences techniques au service d'une cause qui me tient à cœur. Une expérience transformatrice !",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Témoignages"
          subtitle="Découvrez ce que disent nos bénévoles, partenaires et bénéficiaires de leur expérience avec CanDirathon."
          align="center"
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
