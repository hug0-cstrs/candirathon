import Image from "next/image";
import { Users, Lightbulb, Gem } from "lucide-react";
import { IconCircle } from "@/components/ui/icon-circle";
import { Badge } from "@/components/ui/badge";

const missions = [
  {
    icon: Users,
    iconColor: "pink" as const,
    title: "Communauté Inclusive",
    description:
      "Nous créons des espaces bienveillants où chacun peut contribuer selon ses capacités.",
  },
  {
    icon: Lightbulb,
    iconColor: "purple" as const,
    title: "Innovation Sociale",
    description:
      "Nous développons des approches créatives pour maximiser notre impact social.",
  },
  {
    icon: Gem,
    iconColor: "blue" as const,
    title: "Impact Durable",
    description:
      "Chaque action que nous menons vise à créer des changements positifs durables.",
  },
];

export function MissionSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Notre Mission <span className="text-pink-600">& Vision</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Depuis notre création, CanDirathon s&apos;engage à créer des
                expériences uniques qui rassemblent les communautés autour de
                valeurs partagées de solidarité et d&apos;entraide.
              </p>
            </div>

            {/* Mission Points */}
            <div className="space-y-6">
              {missions.map((mission) => (
                <div key={mission.title} className="flex items-start gap-4">
                  <IconCircle
                    icon={mission.icon}
                    variant={mission.iconColor}
                    size="md"
                  />
                  <div>
                    <h3 className="font-bold text-lg mb-1">{mission.title}</h3>
                    <p className="text-gray-600">{mission.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/mission.jpg"
                alt="Notre mission"
                fill
                className="object-cover"
              />
            </div>
            {/* Badge */}
            <div className="absolute bottom-6 right-6 bg-white rounded-full px-6 py-3 shadow-xl flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <Gem className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-bold text-2xl">5 ans</div>
                <div className="text-sm text-gray-600">d&apos;engagement</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
