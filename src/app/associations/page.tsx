import type { Metadata } from "next";
import { AssociationsSection } from "@/components/AssociationsSection";

export const metadata: Metadata = {
  title: "Associations Soutenues – CanDirathon",
  description:
    "Ensemble, nous soutenons la Fondation Toulouse Cancer Santé, l'ADAC (diabétologie) et l'ARSE (socio-esthétique) qui luttent contre le cancer et accompagnent les malades.",
  alternates: {
    canonical: "https://www.candirathon.fr/associations",
  },
  openGraph: {
    title: "Associations Soutenues – CanDirathon",
    description:
      "CanDirathon soutient les associations qui luttent contre le cancer et le diabète et qui accompagnent les malades et leurs proches.",
    url: "https://www.candirathon.fr/associations",
    type: "website",
  },
};

export default function AssociationsPage() {
  return (
    <div>
      <AssociationsSection />
    </div>
  );
}
