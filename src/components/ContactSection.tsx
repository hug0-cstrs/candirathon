import { SectionHeader } from "@/components/ui/section-header"
import { ContactInfo } from "@/components/ContactInfo"
import { ContactForm } from "@/components/ContactForm"

export function ContactSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Contactez-nous"
          subtitle="Vous avez une question, une idée de projet ou souhaitez rejoindre notre communauté ? N'hésitez pas à nous écrire !"
          align="left"
          className="mb-16"
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left - Contact Info */}
          <div className="lg:col-span-2">
            <ContactInfo />
          </div>

          {/* Right - Contact Form */}
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
