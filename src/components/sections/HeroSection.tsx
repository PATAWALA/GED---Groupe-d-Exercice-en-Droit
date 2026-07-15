import Button from '@/components/ui/Button';

export default function FinalCTASection() {
  return (
    <section className="bg-gradient-to-br from-royal-blue to-blue-900">
      <div className="max-w-4xl mx-auto px-4 py-20 sm:py-28 text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          Prêt à faire la différence ?
        </h2>
        <p className="mt-6 text-lg text-blue-100 max-w-2xl mx-auto">
          Rejoignez la communauté GED et donnez un nouvel élan à votre parcours juridique.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Button variant="primary" href="/contact">
            Nous contacter
          </Button>
          <Button variant="outline" href="/publications" className="border-white text-white hover:bg-white hover:text-royal-blue">
            Télécharger la TEM 2026
          </Button>
        </div>
      </div>
    </section>
  );
}