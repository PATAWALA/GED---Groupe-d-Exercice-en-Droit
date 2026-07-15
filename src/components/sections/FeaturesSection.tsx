export default function FeaturesSection() {
  return (
    <section className="bg-light-bg">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Pourquoi choisir le GED ?
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Une approche académique et professionnelle pour faire la différence.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: '🎓',
              title: 'Expertise académique',
              desc: 'Intervenants magistrats, avocats, universitaires.',
            },
            {
              icon: '📈',
              title: 'Méthodologie éprouvée',
              desc: '90% de réussite aux concours préparés.',
            },
            {
              icon: '🗣️',
              title: 'Art oratoire',
              desc: 'Coaching personnalisé pour briller à l’oral.',
            },
            {
              icon: '📚',
              title: 'Ressources exclusives',
              desc: 'Synthèses, fiches, annales corrigées.',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 text-center hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                {item.title}
              </h3>
              <p className="text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}