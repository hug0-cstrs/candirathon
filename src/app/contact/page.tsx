import { ContactSection } from "@/components/ContactSection";

export const metadata = {
  title: "Contact - CanDirathon",
  description:
    "Vous avez une question, une idée de projet ou souhaitez rejoindre notre communauté ? N'hésitez pas à nous écrire !",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Contact Form & Info */}
      <ContactSection />
    </div>
  );
}
