import { SectionHeader } from "./ui/section-header";

export function AboutSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-pink-50">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Qui sommes nous ?"
          subtitle="L'histoire de CanDirathon : un défi familial devenu une association solidaire"
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start mt-12">
          {/* Texte */}
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              <strong className="text-pink-600">
                CanDirathon est née de l'histoire un peu particulière d'une
                famille
              </strong>{" "}
              qui a dû faire face à plusieurs reprises au cancer et au diabète.
              Après avoir vu ses parents, sa sœur, son frère et son papy
              malades, Leylou a voulu s'engager pour soutenir la recherche
              contre le cancer et le diabète.
            </p>

            <p>
              C'est là qu'est née la{" "}
              <strong className="text-purple-600">
                première édition de CanDirathon en 2022
              </strong>
              , où Leylou a embarqué sa maman, Karine, sur un tandem le long du
              canal du midi. Voilà comment un duo mère / fille va parcourir{" "}
              <strong>315km, de Toulouse à Montpellier</strong>, en seulement 3
              jours et demi, avec pour objectif de récolter des fonds qui seront
              reversés aux deux causes qu'elles soutiennent.
            </p>

            <p className="text-lg font-semibold text-blue-600">
              L'histoire ne s'arrête pas là !!!
            </p>

            <p>
              Le <strong className="text-pink-600">15 décembre 2022</strong>,
              CanDirathon devient une association loi 1901 dont Leylou est la
              présidente.
            </p>

            <p>
              Le projet évolue encore en 2024 et chaque année,{" "}
              <strong className="text-purple-600">
                CanDirathon emmène des personnes en traitement ou en rémission
                du cancer, des personnes diabétiques et des aidants
              </strong>{" "}
              pour rouler ensemble face à la maladie.
            </p>
          </div>

          {/* Vidéo de présentation */}
          <div className="relative">
            <video
              controls
              className="w-full rounded-2xl shadow-xl"
              preload="metadata"
            >
              <source
                src="/videos/presentation_CanDirathon.mp4"
                type="video/mp4"
              />
              Votre navigateur ne supporte pas la lecture de vidéos.
            </video>

            {/* Décoration */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full blur-3xl opacity-50 -z-10" />
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full blur-3xl opacity-50 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
