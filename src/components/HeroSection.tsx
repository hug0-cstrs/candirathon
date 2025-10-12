import { Button } from "@/components/ui/button";
import { StatsCounter } from "@/components/ui/stats-counter";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const stats = [
  { value: 150, suffix: "+", label: "Événements" },
  { value: 2500, suffix: "+", label: "Participants" },
  { value: 50, suffix: "+", label: "Partenaires" },
];

const heroImages = [
  { src: "/images/hero-1.jpg", alt: "Événement solidaire" },
  { src: "/images/hero-2.jpg", alt: "Participants heureux" },
  { src: "/images/hero-3.jpg", alt: "Activité de groupe" },
  { src: "/images/hero-4.jpg", alt: "Communauté engagée" },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-pink-500 via-purple-600 to-blue-500 py-20 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-white">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Roulons ensemble{" "}
              <span className="text-yellow-300">face à la maladie</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl">
              CanDirathon est une association loi 1901 qui organise des périples
              en vélo pour des personnes en traitement ou en rémission d&apos;un
              cancer ainsi que des personnes diabétique. Ce périple
              s&apos;accompagne d&apos;une cagnotte dont les fonds seront
              reversés à la recherche pour ces deux maladies.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href={
                  "https://www.helloasso.com/associations/candirathon?fbclid=PAZXh0bgNhZW0CMTEAAadIffsWqhHazT4_y1TpgovvMvonZH4WLfTcxCh-W7S0haRcrOmKBIU29KEPmw_aem_IgGYD9DfXv70H4JFQh86hg"
                }
                target="_blank"
              >
                <Button
                  size="lg"
                  variant="secondary"
                  className="rounded-full font-semibold px-8"
                >
                  Découvrir l&apos;association
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full font-semibold px-8 bg-white/10 text-white border-white hover:bg-white hover:text-purple-600"
              >
                Nos prochains événements
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {stats.map((stat) => (
                <StatsCounter
                  key={stat.label}
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                />
              ))}
            </div>
          </div>

          {/* Right Images Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {heroImages.map((image, index) => (
                <div
                  key={index}
                  className={`relative overflow-hidden rounded-2xl shadow-2xl transform transition-transform hover:scale-105 ${
                    index === 0
                      ? "rotate-2"
                      : index === 1
                        ? "-rotate-2"
                        : index === 2
                          ? "-rotate-1"
                          : "rotate-1"
                  }`}
                >
                  <div className="relative aspect-square bg-white/20">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                  {index === 0 && (
                    <div className="absolute top-4 right-4 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                      <Star className="w-6 h-6 text-white fill-white" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -z-10" />
    </section>
  );
}
