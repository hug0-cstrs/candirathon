import { ContactForm } from "@/components/ContactForm";
import { ContactInfo } from "@/components/ContactInfo";
import { SectionHeader } from "@/components/ui/section-header";

export function ContactSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center bg-gradient-to-b from-white to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Contactez-nous"
          subtitle="Vous avez une question, une idée de projet ou souhaitez rejoindre notre communauté ? N'hésitez pas à nous écrire !"
          align="center"
          className="mb-16 mt-8"
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/*  Left - Contact Form */}
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
          {/* Right - Contact Info */}
          <div className="mb-8 lg:col-span-2 lg:flex lg:justify-center lg:items-center">
            <ContactInfo />
          </div>
        </div>
      </div>
    </section>
  );
}
