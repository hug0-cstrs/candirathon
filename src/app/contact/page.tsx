import type { Metadata } from "next";
import { ContactSection } from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Contact – CanDirathon",
  description:
    "Contactez l'association CanDirathon : une question, une idée de projet ou envie de rejoindre notre communauté solidaire ? Écrivez-nous ou appelez-nous !",
  alternates: {
    canonical: "https://www.candirathon.fr/contact",
  },
  openGraph: {
    title: "Contact – CanDirathon",
    description:
      "Contactez l'association CanDirathon : rejoignez notre communauté solidaire ou posez-nous vos questions.",
    url: "https://www.candirathon.fr/contact",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <div>
      <ContactSection />
    </div>
  );
}
