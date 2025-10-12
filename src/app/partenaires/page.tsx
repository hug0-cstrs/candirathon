import { PartnersSection } from "@/components/PartnersSection";
import { SectionHeader } from "@/components/ui/section-header";

export const metadata = {
  title: "Nos Partenaires - CanDirathon",
  description:
    "Ensemble, nous créons un écosystème solidaire qui amplifie notre impact social et communautaire.",
};

export default function PartenairesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Partners List */}
      <PartnersSection />
    </div>
  );
}
