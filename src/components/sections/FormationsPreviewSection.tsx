import Button from '@/components/ui/Button';

export default function FormationsPreviewSection() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Nos formations
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Des programmes intensifs adaptés à chaque objectif.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: 'Préparation CRFPA',
              desc: 'Séances hebdomadaires, galops d’essai, méthodologie.',
              duration: '6 mois',
              level: 'Master 1/2',
            },
            {
              title: 'Concours ENM',
              desc: 'Préparation intensive avec simulations d’audience.',
              duration: '8 mois',
              level: 'Master 2/Doctorat',
            },
            {
              title: 'Art oratoire & plaidoirie',
              desc: 'Coaching individuel et collectif, prise de parole.',
              duration: '2 mois',
              level: 'Tous niveaux',
            },
          ].map((f) => (
            <div
              key={f.title}
              className="bg-light-bg rounded-2xl p-8 border border-slate-100 hover:shadow-md transition-shadow"
            >
              <h3 className="text-2xl font-bold text-royal-blue mb-3">
                {f.title}
              </h3>
              <p className="text-slate-600 mb-6">{f.desc}</p>
              <div className="flex items-center justify-between text-sm text-slate-500 border-t border-slate-200 pt-4">
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