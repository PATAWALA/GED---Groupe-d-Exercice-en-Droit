import Image from 'next/image';
import Button from '@/components/ui/Button';

export default function AboutPreviewSection() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-20 sm:py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <Image
                src="/images/portrait.jpg"
                alt="Dr Mahamadou Drissa Tangara, Président du GED"
                width={320}
                height={320}
                className="w-64 h-64 sm:w-80 sm:h-80 rounded-3xl object-cover shadow-2xl border-2 border-white ring-1 ring-slate-200"
              />
              <div className="absolute -bottom-4 -right-4 bg-gold text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
                ⚖️
              </div>
            </div>
          </div>

          <div className="text-center lg:text-left">
            <span className="inline-block px-4 py-1 mb-4 text-xs font-semibold tracking-wider uppercase bg-royal-blue/10 text-royal-blue rounded-full">
              Notre mission
            </span>
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
              Derrière chaque succès, une équipe passionnée
            </h2>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Le Groupe d’Exercice en Droit (GED) réunit des professionnels du droit,
              des universitaires et des praticiens engagés pour rendre le droit
              accessible à tous. Notre mission : former, accompagner et faire réussir
              les juristes de demain.
            </p>
            <div className="mt-8">
              <Button variant="outline" href="/a-propos">
                Découvrir notre histoire
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}