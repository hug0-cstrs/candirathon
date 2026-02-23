import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Mentions légales - CanDirathon",
  description:
    "Mentions légales de l'association CanDirathon : éditeur, hébergement, contact et informations légales.",
};

export default function MentionsLegalesPage() {
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
        <h1 className="text-3xl md:text-4xl font-extrabold mb-10 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-500 bg-clip-text text-transparent">
          📜 Mentions légales
        </h1>

        <div className="space-y-10 text-gray-700 leading-relaxed">
          {/* Éditeur */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Éditeur du site
            </h2>
            <p>
              Le présent site internet est édité par l'association{" "}
              <strong>CanDirathon</strong>, association régie par la loi du 1er
              juillet 1901, immatriculée au Répertoire National des Associations
              (RNA) sous le numéro <strong>W311008600</strong>.
            </p>
          </section>

          {/* Siège social */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Siège social
            </h2>
            <address className="not-italic space-y-1">
              <p>20 rue des Encantats</p>
              <p>31470 FONSORBES</p>
              <p>Toulouse Métropole</p>
              <p>France</p>
              <p className="mt-3">
                Téléphone :{" "}
                <a
                  href="tel:+33752044134"
                  className="text-pink-600 hover:text-pink-500 transition-colors"
                >
                  07 52 04 41 34
                </a>
              </p>
              <p>
                Adresse e-mail :{" "}
                <a
                  href="mailto:candirathon31@gmail.com"
                  className="text-pink-600 hover:text-pink-500 transition-colors"
                >
                  candirathon31@gmail.com
                </a>
              </p>
            </address>
          </section>

          {/* Directeur */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Directeur de la publication
            </h2>
            <p>
              Le directeur de la publication du site est{" "}
              <strong>Leylou Hochet</strong> — en qualité de Présidente de
              l'association.
            </p>
          </section>

          {/* Hébergement */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Hébergement
            </h2>
            <p className="mb-2">
              Le site est hébergé par la société <strong>Vercel Inc.</strong>
            </p>
            <address className="not-italic space-y-1 text-sm text-gray-600">
              <p>340 Pine Street, Suite 701</p>
              <p>San Francisco, CA 94104</p>
              <p>États-Unis</p>
              <p className="mt-2">
                Site web :{" "}
                <a
                  href="https://vercel.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-600 hover:text-pink-500 transition-colors"
                >
                  vercel.com
                </a>
              </p>
            </address>
          </section>

          {/* SIRET */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Numéro SIRET / NAF
            </h2>
            <p>
              (*) CanDirathon étant une association loi 1901 déclarée, ses
              informations légales sont accessibles via{" "}
              <a
                href="https://annuaire-entreprises.data.gouv.fr/entreprise/candirathon-923197354"
                target="_blank"
                className="text-pink-600 hover:text-pink-500 transition-colors"
              >
                les registres publics officiels.
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
