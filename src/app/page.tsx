import Button from '@/components/ui/Button';

export default function Home() {
  return (
    <section className="bg-white">
      <div className="max-w-4xl mx-auto px-4 py-20 sm:py-32 text-center">
        <span className="inline-block px-4 py-1 mb-6 text-xs font-medium tracking-wide uppercase bg-royal-blue/10 text-royal-blue rounded-full">
          Groupe d&apos;Exercice en Droit (GED)
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
          Rendre le droit accessible.
          <br />
          <span className="text-royal-blue">Propulser votre réussite.</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-slate-600 leading-relaxed">
          Préparation aux concours administratifs et juridiques, formations en art
          oratoire, synthèses fiscales (TEM 2026) et conseil personnalisé pour les
          étudiants et professionnels.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Button variant="primary" href="/formations">
            Réserver ma place aux formations
          </Button>
          <Button variant="outline" href="/publications">
            Télécharger la TEM 2026
          </Button>
        </div>
      </div>
    </section>
  );
}
