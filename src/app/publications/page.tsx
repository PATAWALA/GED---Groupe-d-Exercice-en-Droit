import LeadCaptureForm from '../../components/forms/LeadCaptureForm';

export default function Publications() {
  return (
    <section className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-16 sm:py-24 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-sm font-semibold text-gold uppercase tracking-wider">Publication exclusive</span>
          <h1 className="mt-2 text-4xl font-bold text-slate-900 sm:text-5xl">TEM 2026 : la synth�se fiscale incontournable</h1>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            Une analyse approfondie de la fiscalit� locale � jour des derni�res r�formes. Con�ue par des experts, elle vous donne les cl�s pour r�ussir vos �preuves �crites et briller en entretien.
          </p>
          <ul className="mt-6 space-y-3 text-slate-700">
            <li className="flex items-center gap-2"><span className="text-gold">?</span> Fiches th�matiques par imp�t</li>
            <li className="flex items-center gap-2"><span className="text-gold">?</span> Cas pratiques corrig�s</li>
            <li className="flex items-center gap-2"><span className="text-gold">?</span> Mises � jour l�gislatives 2025-2026</li>
          </ul>
        </div>
        <div className="bg-light-bg rounded-2xl p-8 shadow-sm border border-slate-100">
          <h2 className="text-2xl font-bold text-royal-blue mb-6">Obtenez votre exemplaire gratuit</h2>
          <LeadCaptureForm />
        </div>
      </div>
    </section>
  );
}
