import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SocialButton } from "@/components/ui/social-button";
import Logo from "../../public/maquette/logo_CanDirathon.png";

interface NavigationItem {
  name: string;
  href: string;
}

interface Navigation {
  main: NavigationItem[];
  legal: NavigationItem[];
}

const navigation: Navigation = {
  main: [
    { name: "Accueil", href: "/" },
    { name: "Qui sommes-nous ?", href: "/qui-sommes-nous" },
    { name: "Nos Périples", href: "/periples" },
    { name: "Associations", href: "/associations" },
    { name: "Actualités", href: "/actualites" },
    { name: "Galerie", href: "/galerie" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Mentions légales", href: "/mentions-legales" },
    { name: "Politique de confidentialité", href: "/confidentialite" },
    { name: "CGU", href: "/cgu" },
  ],
};

export function Footer() {
  return (
    <footer className="relative bg-slate-900 text-white" role="contentinfo">
      {/* Gradient border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 mb-12">
          {/* Logo & Description */}
          <div className="space-y-6" aria-labelledby="footer-about">
            <h2 id="footer-about" className="sr-only">
              À propos de CanDirathon
            </h2>
            <Link
              href="/"
              className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 rounded-sm"
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
                <Image
                  src={Logo}
                  alt="Logo CanDirathon"
                  width={48}
                  height={48}
                  priority={false}
                  loading="lazy"
                />
              </div>
              <span className="text-2xl font-bold">
                <span className="text-pink-500">Can</span>
                <span className="text-blue-500">Di</span>
                <span className="text-purple-500">rathon</span>
              </span>
            </Link>
            <p className="text-gray-200 text-sm leading-relaxed">
              Une association dynamique qui crée des liens et génère un impact
              social positif à travers des défis solidaires.
            </p>
            <div className="flex gap-3">
              <SocialButton
                icon="instagram"
                href="https://www.instagram.com/candirathon?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                label="Suivez-nous sur Instagram"
              />
              <SocialButton
                icon="facebook"
                href="https://www.facebook.com/deficandirathon"
                label="Suivez-nous sur Facebook"
              />
            </div>
          </div>

          {/* Navigation */}
          <nav aria-labelledby="footer-nav">
            <h3 id="footer-nav" className="font-bold text-lg mb-6 text-white">
              Navigation
            </h3>
            <ul className="space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-200 hover:text-pink-400 focus-visible:text-pink-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 transition-colors text-sm rounded-sm inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* S'engager */}
          {/* <div>
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
          </div> */}

          {/* Contact */}
          <div aria-labelledby="footer-contact">
            <h3
              id="footer-contact"
              className="font-bold text-lg mb-6 text-white"
            >
              Contact
            </h3>
            <ul className="space-y-4 text-sm">
              <li>
                <a
                  href="tel:+33752044134"
                  className="group flex items-center gap-3 text-gray-200 hover:text-pink-400 focus-visible:text-pink-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 transition-colors rounded-sm"
                  aria-label="Téléphoner au +33 7 52 04 41 34"
                >
                  <Phone
                    className="w-4 h-4 text-pink-500 group-hover:text-pink-400 transition-colors flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span>+33 7 52 04 41 34</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:candirathon31@gmail.com"
                  className="group flex items-center gap-3 text-gray-200 hover:text-pink-400 focus-visible:text-pink-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 transition-colors rounded-sm"
                  aria-label="Envoyer un email à candirathon31@gmail.com"
                >
                  <Mail
                    className="w-4 h-4 text-pink-500 group-hover:text-pink-400 transition-colors flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span className="break-all">candirathon31@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-200 text-sm">
            © {new Date().getFullYear()} CanDirathon. Tous droits réservés.
          </p>
          <nav aria-label="Liens légaux">
            <ul className="flex flex-wrap justify-center gap-6">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-200 hover:text-pink-400 focus-visible:text-pink-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 transition-colors text-sm rounded-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
