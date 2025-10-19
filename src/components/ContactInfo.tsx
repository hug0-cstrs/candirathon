import { Mail, Phone } from "lucide-react";
import { ContactInfoItem } from "@/components/ui/contact-info-item";
import { SocialButton } from "@/components/ui/social-button";

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <ContactInfoItem
        icon={Phone}
        iconColor="pink"
        title="Téléphone"
        content="+33 7 52 04 41 34"
        href="tel:+33752044134"
      />

      <ContactInfoItem
        icon={Mail}
        iconColor="purple"
        title="Email"
        content="candirathon31@gmail.com"
        href="mailto:candirathon31@gmail.com"
      />

      {/* Social Media */}
      <div className="pt-4">
        <h3 className="font-bold text-lg mb-4">Suivez-nous</h3>
        <div className="flex gap-3">
          <SocialButton
            icon="instagram"
            href="https://www.instagram.com/candirathon?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            label="Instagram"
          />
          <SocialButton
            icon="facebook"
            href="https://www.facebook.com/deficandirathon"
            label="Facebook"
          />
        </div>
      </div>
    </div>
  );
}
