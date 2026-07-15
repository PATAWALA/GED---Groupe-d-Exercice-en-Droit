export default function TestimonialsSection() {
  return (
    <section className="bg-light-bg">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:py-24">
        <h2 className="text-3xl font-bold text-center text-slate-900 sm:text-4xl mb-12">
          Ils nous font confiance
        </h2>
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
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100"
            >
              <p className="text-slate-600 italic">“{t.quote}”</p>
              <p className="mt-4 text-sm font-semibold text-royal-blue">
                — {t.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}