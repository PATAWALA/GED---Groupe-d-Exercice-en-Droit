export default function TestimonialsSection() {
  return (
    <section className="bg-light-bg">
      <div className="max-w-7xl mx-auto px-4 py-20 sm:py-28">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 mb-4 text-xs font-semibold tracking-wider uppercase bg-gold/10 text-gold rounded-full">
            Témoignages
          </span>
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
            Ils nous font confiance
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              quote:
                'Grâce au GED, j’ai intégré l’ENM dès ma première tentative. Le suivi est exceptionnel.',
              author: 'Marie L., auditrice de justice',
            },
            {
              quote:
                'La formation en art oratoire a transformé ma façon de plaider. Je recommande vivement.',
              author: 'Karim B., avocat',
            },
            {
              quote:
                'La synthèse fiscale TEM 2026 est une pépite. Clair, complet, efficace.',
              author: 'Sophie D., étudiante en M2 droit public',
            },
          ].map((t) => (
            <div
              key={t.author}
              className="relative bg-white rounded-2xl p-8 shadow-sm border border-slate-100"
            >
              <div className="text-5xl text-royal-blue/20 absolute top-4 left-4">“</div>
              <p className="text-slate-600 italic relative z-10 pl-6">« {t.quote} »</p>
              <p className="mt-6 text-sm font-semibold text-royal-blue pl-6">
                — {t.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}