import ContactForm from '@/components/forms/ContactForm';

export default function Contact() {
  return (
    <section className="bg-light-bg min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900">Contact & Clinique juridique</h1>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Besoin d’un conseil ou d’une orientation juridique ? Nos experts vous écoutent et vous accompagnent gratuitement.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 sm:p-12">
          <ContactForm />
        </div>
        <div className="mt-12 grid sm:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-royal-blue text-3xl mb-2">??</div>
            <h3 className="font-semibold text-slate-900">Adresse</h3>
            <p className="text-sm text-slate-600">12 rue de la Loi, 75001 Paris</p>
          </div>
          <div>
            <div className="text-royal-blue text-3xl mb-2">??</div>
            <h3 className="font-semibold text-slate-900">Email</h3>
            <p className="text-sm text-slate-600">contact@ged-droit.fr</p>
          </div>
          <div>
            <div className="text-royal-blue text-3xl mb-2">??</div>
            <h3 className="font-semibold text-slate-900">Téléphone</h3>
            <p className="text-sm text-slate-600">+33 1 23 45 67 89</p>
          </div>
        </div>
      </div>
    </section>
  );
}
