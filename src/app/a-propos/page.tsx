import Image from 'next/image';

export default function APropos() {
  return (
    <>
      {/* Section 1 : Mission du GED */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:py-24">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl">
              Qui sommes-nous ?
            </h1>
            <p className="mt-6 text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Le Groupe d’Exercice en Droit (GED) est une institution académique
              et professionnelle dédiée à l’excellence juridique. Nous préparons
              les étudiants et les professionnels aux concours les plus exigeants,
              tout en diffusant une culture juridique accessible et rigoureuse.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-3 mt-16">
            {[
              {
                icon: '⚖️',
                title: 'Excellence académique',
                description:
                  'Une pédagogie fondée sur la rigueur, la méthode et la pratique, avec des intervenants de haut niveau (magistrats, avocats, universitaires).',
              },
              {
                icon: '🤝',
                title: 'Accessibilité',
                description:
                  'Nous croyons que le droit ne doit pas être un privilège. Nos formations et nos publications sont pensées pour tous les profils.',
              },
              {
                icon: '🌍',
                title: 'Engagement citoyen',
                description:
                  'Par notre clinique juridique et nos actions de conseil, nous contribuons à l’accès au droit pour les plus démunis.',
              },
            ].map((valeur) => (
              <div
                key={valeur.title}
                className="bg-light-bg rounded-2xl p-8 border border-slate-100 text-center hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-4">{valeur.icon}</div>
                <h3 className="text-2xl font-bold text-royal-blue mb-4">
                  {valeur.title}
                </h3>
                <p className="text-slate-600">{valeur.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2 : Mot du Président */}
      <section className="bg-light-bg">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Photo réelle du président */}
            <div className="flex justify-center">
              <Image
                src="/images/portrait.jpg"
                alt="Dr Mahamadou Drissa Tangara, Président du GED"
                width={288}
                height={288}
                className="w-64 h-64 sm:w-72 sm:h-72 rounded-2xl object-cover border-2 border-slate-200 shadow-md"
                priority
              />
            </div>

            {/* Texte */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-6">
                Le mot du Président
              </h2>
              <div className="prose prose-slate max-w-none text-slate-600 space-y-4">
                <p>
                  « Le droit est un levier puissant de transformation sociale.
                  C’est cette conviction qui m’anime chaque jour avec l’équipe du
                  GED. Nous avons bâti un écosystème où l’excellence académique
                  rencontre l’humain, où chaque étudiant, quel que soit son
                  parcours, peut trouver les clés de sa réussite. »
                </p>
                <p>
                  « Notre ambition est simple : faire du GED le partenaire
                  incontournable de votre avenir juridique. Rejoignez-nous. »
                </p>
                <p className="font-semibold text-royal-blue">
                  Dr Mahamadou Drissa Tangara
                  <br />
                  <span className="text-sm text-slate-500 font-normal">
                    Diplomate & Président du GED
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 : Notre Impact (compteurs visuels) */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:py-24">
          <h2 className="text-3xl font-bold text-center text-slate-900 sm:text-4xl mb-16">
            Notre impact en chiffres
          </h2>
          <div className="grid gap-8 sm:grid-cols-3">
            {[
              { number: '500+', label: 'Étudiants accompagnés' },
              { number: '92%', label: 'Taux de réussite aux concours' },
              { number: '12', label: 'Éditions d’art oratoire réalisées' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center p-8 bg-light-bg rounded-2xl border border-slate-100"
              >
                <div className="text-5xl font-extrabold text-royal-blue mb-2">
                  {stat.number}
                </div>
                <div className="text-lg text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}