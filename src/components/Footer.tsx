import Image from "next/image";
import Link from "next/link";
import { SocialButton } from "@/components/ui/social-button";
import Logo from "../../public/maquette/logo_CanDirathon.png";

const navigation = {
  main: [
    { name: "Accueil", href: "/" },
    { name: "Nos Défis", href: "/defis" },
    { name: "Associations", href: "/associations" },
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
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full flex items-center justify-center">
                <Image src={Logo} alt="CanDirathon" width={48} height={48} />
              </div>
              <h2 className="text-2xl font-bold">
                <span className="text-pink-500">Can</span>
                <span className="text-blue-500">Di</span>
                <span className="text-purple-500">rathon</span>
              </h2>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Une association dynamique qui crée des liens et génère un impact
              social positif à travers des défis solidaires.
            </p>
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

          {/* Navigation */}
          <div>
            <h3 className="font-bold text-lg mb-6">Navigation</h3>
            <ul className="space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-pink-400 transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* S'engager */}
          <div>
            <h3 className="font-bold text-lg mb-6">S&apos;engager</h3>
            <ul className="space-y-3">
              {navigation.engage.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-pink-400 transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-6">Contact</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <a
                  href="tel:+33752044134"
                  className="hover:text-pink-400 transition-colors flex items-center gap-2"
                >
                  <span>📞</span>
                  +33 7 52 04 41 34
                </a>
              </li>
              <li>
                <a
                  href="mailto:candirathon31@gmail.com"
                  className="hover:text-pink-400 transition-colors flex items-center gap-2"
                >
                  <span>✉️</span>
                  candirathon31@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} CanDirathon. Tous droits réservés.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {navigation.legal.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-400 hover:text-pink-400 transition-colors text-sm"
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
