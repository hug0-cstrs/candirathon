import { ChallengesSection } from "@/components/ChallengesSection";
import { SectionHeader } from "@/components/ui/section-header";

export const metadata = {
  title: "Nos Défis - CanDirathon",
  description:
    "Découvrez les événements et initiatives que nous organisons pour créer un impact positif dans nos communautés.",
};

export default function DefisPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Challenges List */}
      <ChallengesSection />
    </div>
  );
}
