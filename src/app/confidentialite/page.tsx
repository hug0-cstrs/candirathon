import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Politique de confidentialité - CanDirathon",
  description:
    "Politique de confidentialité de l'association CanDirathon : collecte, utilisation et protection de vos données personnelles.",
  robots: { index: false, follow: false },
};

export default function ConfidentialitePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-pink-50 py-16 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-pink-600 hover:text-pink-500 text-sm font-medium mb-10 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour à l'accueil
        </Link>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-500 bg-clip-text text-transparent">
          Politique de confidentialité
        </h1>
        <p className="text-gray-600 mb-10 leading-relaxed">
          La présente Politique de confidentialité a pour objectif de décrire
          clairement la manière dont l'association CanDirathon collecte, utilise
          et protège les données personnelles des utilisateurs du site internet.
        </p>

        <div className="space-y-10 text-gray-700 leading-relaxed">
          {/* 1 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              1. Responsable du traitement
            </h2>
            <p>
              Le responsable du traitement des données est l'association{" "}
              <strong>CanDirathon</strong>, dont le siège social est indiqué
              ci-dessus.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              2. Données collectées
            </h2>
            <p className="mb-3">
              Le site ne collecte que les données strictement nécessaires à la
              gestion du formulaire de contact, à savoir :
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Nom et prénom</li>
              <li>Adresse e-mail</li>
              <li>Message envoyé via le formulaire</li>
            </ul>
            <p className="mt-3">
              Aucune autre donnée personnelle (date de naissance, adresse
              postale complète, etc.) n'est collectée via le site.
            </p>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              3. Finalité de la collecte
            </h2>
            <p className="mb-3">
              Les données sont collectées uniquement pour :
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>
                permettre à l'association de répondre aux messages et demandes
                formulées via le formulaire de contact,
              </li>
              <li>
                assurer le suivi et la gestion des échanges avec les visiteurs
                et sympathisants.
              </li>
            </ul>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              4. Partage des données
            </h2>
            <p>
              Les données personnelles recueillies ne sont jamais vendues,
              cédées ou partagées à des tiers extérieurs à l'association, sauf
              obligation légale.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              5. Conservation des données
            </h2>
            <p>
              Les informations collectées via le formulaire de contact sont
              conservées le temps nécessaire au traitement de la demande, puis
              supprimées ou archivées conformément aux bonnes pratiques.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              6. Sécurité
            </h2>
            <p>
              L'association s'engage à mettre en œuvre des mesures techniques et
              organisationnelles appropriées afin de protéger les données
              personnelles contre l'accès non autorisé, la divulgation,
              l'altération ou la destruction.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              7. Cookies et traceurs
            </h2>
            <p>
              Ce site peut utiliser des cookies ou traceurs pour le
              fonctionnement technique du site seulement. Il n'y a pas de
              collecte de données à caractère personnel via des cookies tiers
              (comme des cookies publicitaires ou de suivi marketing).
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              8. Droits des utilisateurs
            </h2>
            <p className="mb-3">Conformément au RGPD :</p>
            <ul className="list-disc list-inside space-y-1 pl-2 mb-4">
              <li>
                Toute personne peut demander l'accès à ses données personnelles,
                leur rectification ou suppression,
              </li>
              <li>
                ainsi que la limitation du traitement ou la portabilité de ses
                données.
              </li>
            </ul>
            <p>
              Pour exercer ces droits, il suffit d'envoyer une demande à :{" "}
              <a
                href="mailto:candirathon31@gmail.com"
                className="text-pink-600 hover:text-pink-500 transition-colors font-medium"
              >
                candirathon31@gmail.com
              </a>
            </p>
          </section>
        </div>

        {/* Separator */}
        <div className="mt-14 pt-6 border-t border-pink-100">
          <p className="text-sm text-gray-400 text-center">
            © {new Date().getFullYear()} CanDirathon — Tous droits réservés
          </p>
        </div>
      </div>
    </main>
  );
}
