import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const BASE_URL = "https://www.candirathon.fr";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title:
    "CanDirathon – Association de défis vélo contre le cancer et le diabète",
  description:
    "CanDirathon est une association toulousaine qui organise des défis à vélo solidaires pour soutenir la recherche contre le cancer et le diabète. Rejoignez l'aventure !",
  keywords: [
    "CanDirathon",
    "candirathon",
    "défi vélo solidaire",
    "association cancer diabète",
    "vélo solidaire Toulouse",
    "périple vélo solidaire",
    "association loi 1901",
    "Fonsorbes",
    "Toulouse",
    "Occitanie",
  ],
  authors: [{ name: "CanDirathon", url: BASE_URL }],
  creator: "CanDirathon",
  publisher: "CanDirathon",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: BASE_URL,
    siteName: "CanDirathon",
    title: "CanDirathon – Défis vélo solidaires contre le cancer",
    description:
      "Association toulousaine de défis à vélo solidaires pour soutenir la recherche contre le cancer et le diabète.",
  },
  twitter: {
    card: "summary_large_image",
    title: "CanDirathon – Défis vélo solidaires contre le cancer",
    description:
      "Association toulousaine de défis à vélo solidaires pour soutenir la recherche contre le cancer et le diabète.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const organizationSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "NGO",
  name: "CanDirathon",
  alternateName: ["Candirathon", "CanDirathon association"],
  url: BASE_URL,
  logo: `${BASE_URL}/maquette/logo_CanDirathon.png`,
  description:
    "Association loi 1901 toulousaine qui organise des défis à vélo solidaires pour soutenir la recherche contre le cancer et le diabète.",
  foundingDate: "2022",
  address: {
    "@type": "PostalAddress",
    streetAddress: "20 rue des Encantats",
    addressLocality: "Fonsorbes",
    postalCode: "31470",
    addressRegion: "Occitanie",
    addressCountry: "FR",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+33-7-52-04-41-34",
    email: "candirathon31@gmail.com",
    contactType: "customer support",
    availableLanguage: "French",
  },
  areaServed: { "@type": "Country", name: "France" },
  knowsAbout: [
    "cancer",
    "diabète",
    "cyclisme solidaire",
    "défis sportifs solidaires",
    "recherche médicale",
  ],
  sameAs: [BASE_URL],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Toaster />
        {/* JSON-LD structured data – static constant, no user input */}
        <script type="application/ld+json">{organizationSchema}</script>
      </body>
    </html>
  );
}
