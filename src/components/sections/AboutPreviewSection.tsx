import Image from 'next/image';
import Button from '@/components/ui/Button';

export default function AboutPreviewSection() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo du président */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/images/portrait.jpg"
              alt="Dr Mahamadou Drissa Tangara, Président du GED"
              width={288}
              height={288}
              className="w-64 h-64 sm:w-72 sm:h-72 rounded-2xl object-cover border-2 border-slate-200 shadow-md"
            />
          </div>

          {/* Texte + bouton */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Derrière chaque succès, une équipe passionnée
            </h2>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Le Groupe d’Exercice en Droit (GED) réunit des professionnels du droit,
              des universitaires et des praticiens engagés pour rendre le droit
              accessible à tous. Notre mission : former, accompagner et faire réussir
              les juristes de demain.
            </p>
            <div className="mt-8 flex justify-center lg:justify-start">
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