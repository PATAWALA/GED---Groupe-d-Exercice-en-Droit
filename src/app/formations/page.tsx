import Button from '@/components/ui/Button';

const formations = [
  {
    title: 'Préparation au CRFPA',
    description: 'Séances hebdomadaires, galops d’essai et méthodologie des épreuves écrites et orales.',
    duration: '6 mois',
    level: 'Master 1 / Master 2',
  },
  {
    title: 'Concours de la magistrature (ENM)',
    description: 'Préparation intensive aux épreuves d’admissibilité et d’admission, avec simulations d’audience.',
    duration: '8 mois',
    level: 'Master 2 / Doctorat',
  },
  {
    title: 'Art oratoire & plaidoirie',
    description: 'Coaching individuel et collectif pour améliorer la prise de parole, la rhétorique et la confiance en soi.',
    duration: '2 mois',
    level: 'Tous niveaux',
  },
];

export default function Formations() {
  return (
    <section className="bg-light-bg min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900">Nos formations</h1>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Des programmes exigeants, conçus par des professionnels du droit pour maximiser vos chances de succès.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {formations.map((f) => (
            <div key={f.title} className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 hover:shadow-md transition-shadow">
              <h2 className="text-2xl font-bold text-royal-blue mb-3">{f.title}</h2>
              <p className="text-slate-600 mb-6">{f.description}</p>
              <div className="flex items-center justify-between text-sm text-slate-500 border-t border-slate-100 pt-4">
                <span>?? {f.duration}</span>
                <span>?? {f.level}</span>
              </div>
              <div className="mt-6">
                <Button variant="primary" href="/contact" className="w-full">
                  S&apos;inscrire
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
