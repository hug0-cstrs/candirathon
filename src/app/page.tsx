import type { Metadata } from "next";
import { HeroSection } from "@/components/HeroSection";

export const metadata: Metadata = {
  title: "CanDirathon – Roulons ensemble face à la maladie",
  description:
    "CanDirathon est une association toulousaine qui organise des défis à vélo solidaires pour soutenir la recherche contre le cancer et le diabète. Rejoignez l'aventure !",
  alternates: {
    canonical: "https://www.candirathon.fr",
  },
  openGraph: {
    title: "CanDirathon – Roulons ensemble face à la maladie",
    description:
      "Association toulousaine de défis à vélo solidaires pour soutenir la recherche contre le cancer et le diabète.",
    url: "https://www.candirathon.fr",
    type: "website",
  },
};

export default function Home() {
  return <HeroSection />;
}
