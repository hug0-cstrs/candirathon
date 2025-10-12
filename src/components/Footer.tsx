import Link from "next/link";
import { Heart } from "lucide-react";
import { SocialButton } from "@/components/ui/social-button";

const navigation = {
  main: [
    { name: "Accueil", href: "/" },
    { name: "Qui sommes-nous ?", href: "/qui-sommes-nous" },
    { name: "Nos Défis", href: "/defis" },
    { name: "Partenaires", href: "/partenaires" },
    { name: "Galerie", href: "/galerie" },
    { name: "Contact", href: "/contact" },
  ],
  engage: [
    { name: "Devenir bénévole", href: "/benevole" },
    { name: "Faire un don", href: "/don" },
    { name: "Partenariat", href: "/partenariat" },
    { name: "Organiser un événement", href: "/organiser" },
    { name: "Newsletter", href: "/newsletter" },
  ],
  legal: [
    { name: "Mentions légales", href: "/mentions-legales" },
    { name: "Politique de confidentialité", href: "/confidentialite" },
    { name: "CGU", href: "/cgu" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center">
                <Heart className="w-6 h-6 text-white fill-white" />
              </div>
              <span className="text-xl font-bold">CanDirathon</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Une association dynamique qui crée des liens et génère un impact
              social positif à travers des défis solidaires.
            </p>
            <div className="flex gap-3">
              <SocialButton
                icon="instagram"
                href="https://instagram.com"
                label="Instagram"
              />
              <SocialButton
                icon="facebook"
                href="https://facebook.com"
                label="Facebook"
              />
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-bold text-lg mb-4">Navigation</h3>
            <ul className="space-y-2">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* S'engager */}
          <div>
            <h3 className="font-bold text-lg mb-4">S&apos;engager</h3>
            <ul className="space-y-2">
              {navigation.engage.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="pt-2">
                <a
                  href="tel:+33478901234"
                  className="hover:text-white transition-colors"
                >
                  +33 7 52 04 41 34
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@candirathon.fr"
                  className="hover:text-white transition-colors"
                >
                  candirathon31@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} CanDirathon. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            {navigation.legal.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
