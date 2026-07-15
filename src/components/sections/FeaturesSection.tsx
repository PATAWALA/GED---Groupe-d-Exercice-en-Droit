export default function FeaturesSection() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-20 sm:py-28">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 mb-4 text-xs font-semibold tracking-wider uppercase bg-royal-blue/10 text-royal-blue rounded-full">
            Nos atouts
          </span>
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
            Pourquoi choisir le GED ?
          </h2>
          <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
            Une approche académique et professionnelle pour faire la différence.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: '🎓',
              title: 'Expertise académique',
              desc: 'Intervenants magistrats, avocats, universitaires de renom.',
            },
            {
              icon: '📈',
              title: 'Méthodologie éprouvée',
              desc: 'Plus de 90% de réussite aux concours préparés.',
            },
            {
              icon: '🗣️',
              title: 'Art oratoire',
              desc: 'Coaching personnalisé pour une éloquence maîtrisée.',
            },
            {
              icon: '📚',
              title: 'Ressources exclusives',
              desc: 'Synthèses, fiches, annales corrigées et mises à jour.',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="group bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:border-royal-blue/20 transition-all duration-300 text-center"
            >
              <div className="text-5xl mb-5">{item.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-royal-blue transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}