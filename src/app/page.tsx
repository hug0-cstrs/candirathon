import type { Metadata } from "next";
import { HeroSection } from "@/components/HeroSection";

export const metadata: Metadata = {
  title:
    "CanDirathon – Association de défis vélo contre le cancer et le diabète",
  description:
    "CanDirathon est une association toulousaine qui organise des défis à vélo solidaires pour soutenir la recherche contre le cancer et le diabète. Rejoignez l'aventure !",
  alternates: {
    canonical: "https://www.candirathon.fr",
  },
  openGraph: {
    title: "CanDirathon – Défis vélo solidaires contre le cancer",
    description:
      "Association toulousaine de défis à vélo solidaires pour soutenir la recherche contre le cancer et le diabète.",
    url: "https://www.candirathon.fr",
    type: "website",
  },
};

export default function Home() {
  return <HeroSection />;
}
