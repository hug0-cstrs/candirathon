import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const heroImages = [
  { src: "/images/hero-1.jpg", alt: "Événement solidaire" },
  { src: "/images/hero-2.jpg", alt: "Participants heureux" },
  { src: "/images/hero-3.jpg", alt: "Activité de groupe" },
  { src: "/images/hero-4.jpg", alt: "Communauté engagée" },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-screen flex flex-col justify-center bg-gradient-to-b from-white to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-900">
              Roulons ensemble{" "}
              <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                face à la maladie
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl py-8">
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
                  variant="default"
                  className="rounded-full font-semibold px-8 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white shadow-lg transition-all cursor-pointer"
                >
                  Découvrir l&apos;association
                </Button>
              </Link>
              <Link href={"/actualites"}>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full font-semibold px-8 border-1 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white shadow-md transition-all cursor-pointer"
                >
                  Nos prochains événements
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Images Grid */}
          <div className="relative mb-8">
            <div className="grid grid-cols-2 gap-4">
              {heroImages.map((image, index) => (
                <div
                  key={image.src}
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-pink-200/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl -z-10" />
    </section>
  );
}
