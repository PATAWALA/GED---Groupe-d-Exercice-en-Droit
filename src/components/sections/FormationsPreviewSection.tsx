import Button from '@/components/ui/Button';

export default function FormationsPreviewSection() {
  return (
    <section className="bg-light-bg">
      <div className="max-w-7xl mx-auto px-4 py-20 sm:py-28">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 mb-4 text-xs font-semibold tracking-wider uppercase bg-gold/10 text-gold rounded-full">
            Catalogue
          </span>
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
            Nos formations phares
          </h2>
          <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
            Des programmes intensifs conçus pour exceller.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: 'Préparation CRFPA',
              desc: 'Séances hebdomadaires, galops d’essai, méthodologie des épreuves.',
              duration: '6 mois',
              level: 'Master 1/2',
            },
            {
              title: 'Concours ENM',
              desc: 'Préparation intensive avec simulations d’audience et suivi personnalisé.',
              duration: '8 mois',
              level: 'Master 2/Doctorat',
            },
            {
              title: 'Art oratoire & plaidoirie',
              desc: 'Coaching sur-mesure pour maîtriser l’éloquence et la rhétorique.',
              duration: '2 mois',
              level: 'Tous niveaux',
            },
          ].map((f) => (
            <div
              key={f.title}
              className="group bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:border-royal-blue/20 transition-all duration-300 flex flex-col"
            >
              <h3 className="text-2xl font-bold text-royal-blue mb-4 group-hover:text-royal-blue/80 transition-colors">
                {f.title}
              </h3>
              <p className="text-slate-600 mb-6 flex-1">{f.desc}</p>
              <div className="flex items-center justify-between text-sm text-slate-500 border-t border-slate-100 pt-4">
                <span>⏱️ {f.duration}</span>
                <span>📚 {f.level}</span>
              </div>
              <div className="mt-6">
                <Button variant="primary" href="/formations" className="w-full">
                  En savoir plus
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}