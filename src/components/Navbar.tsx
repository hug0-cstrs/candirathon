"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GradientButton } from "@/components/ui/gradient-button";
import { cn } from "@/lib/utils";
import Logo from "../../public/maquette/logo_CanDirathon.png";

const navItems = [
  { label: "Accueil", href: "/" },
  { label: "Qui sommes-nous ?", href: "/qui-sommes-nous" },
  { label: "Défis", href: "/defis" },
  { label: "Partenaires", href: "/partenaires" },
  { label: "Galerie", href: "/galerie" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br flex items-center justify-center">
              {/* <Heart className="w-6 h-6 text-white fill-white" /> */}
              <Image src={Logo} alt="CanDirathon" width={48} height={48} />
            </div>
            <h1 className="text-xl font-bold text-gray-900">
              <span className="text-[color:var(--destructive)]">Can</span>
              <span className="text-blue-500">Di</span>
              <span className="text-[color:var(--color-pink-500)]">rathon</span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-pink-600 transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href={
                "https://www.helloasso.com/associations/candirathon?fbclid=PAZXh0bgNhZW0CMTEAAadIffsWqhHazT4_y1TpgovvMvonZH4WLfTcxCh-W7S0haRcrOmKBIU29KEPmw_aem_IgGYD9DfXv70H4JFQh86hg"
              }
              target="_blank"
            >
              <GradientButton size="lg" className="rounded-full">
                Rejoignez-nous
              </GradientButton>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden transition-all duration-300 overflow-hidden",
          isOpen ? "max-h-96" : "max-h-0",
        )}
      >
        <div className="px-4 py-4 space-y-3 bg-gray-50">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block py-2 text-gray-700 hover:text-pink-600 transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <GradientButton size="lg" className="w-full rounded-full">
            Rejoignez-nous
          </GradientButton>
        </div>
      </div>
    </nav>
  );
}
