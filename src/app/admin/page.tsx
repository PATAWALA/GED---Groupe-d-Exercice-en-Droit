const leadsFictifs = [
  { id: 1, nom: 'Dupont', prenom: 'Jean', email: 'jean.dupont@email.com', whatsapp: '+33612345678', date: '2026-07-10' },
  { id: 2, nom: 'Martin', prenom: 'Sophie', email: 'sophie.martin@email.com', whatsapp: '+33698765432', date: '2026-07-12' },
  { id: 3, nom: 'Bernard', prenom: 'Luc', email: 'luc.bernard@email.com', whatsapp: null, date: '2026-07-13' },
  { id: 4, nom: 'Petit', prenom: 'Marie', email: 'marie.petit@email.com', whatsapp: '+33611223344', date: '2026-07-14' },
];

export default function AdminDashboard() {
  return (
    <section className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Tableau de bord</h1>
            <p className="text-slate-600 mt-1">Suivez vos nouveaux inscrits en temps réel.</p>
          </div>
          <span className="px-4 py-2 bg-royal-blue/10 text-royal-blue text-sm font-medium rounded-full">
            {leadsFictifs.length} nouvelles demandes
          </span>
        </div>
        <div className="bg-white shadow-sm border border-slate-200 rounded-2xl overflow-hidden">
          <table className="min-w-full divide-y divide-slate-200">
            <thead className="bg-light-bg">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Nom</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Prénom</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Email</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">WhatsApp</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {leadsFictifs.map((lead) => (
                <tr key={lead.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">{lead.nom}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">{lead.prenom}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">{lead.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">{lead.whatsapp || '—'}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">{lead.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-6 text-right">
          <button disabled className="inline-flex items-center px-4 py-2 bg-gold text-white text-sm rounded-lg opacity-50 cursor-not-allowed">
            Exporter (intégration Supabase à venir)
          </button>
        </div>
      </div>
    </section>
  );
}
