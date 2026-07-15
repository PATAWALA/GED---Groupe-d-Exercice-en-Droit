'use client';

import { useState, FormEvent } from 'react';
import Button from '@/components/ui/Button';

export default function LeadCaptureForm() {
  const [form, setForm] = useState({ nom: '', prenom: '', email: '', whatsapp: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="p-8 bg-green-50 border border-green-200 rounded-xl text-center">
        <p className="text-green-800 font-semibold">Merci ! Votre demande a été envoyée.</p>
        <p className="text-sm text-green-700 mt-2">Vous recevrez le lien de téléchargement par email.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-slate-700">Nom</label>
          <input type="text" required value={form.nom} onChange={(e) => setForm({ ...form, nom: e.target.value })} className="mt-1 block w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm shadow-sm focus:border-royal-blue focus:ring-1 focus:ring-royal-blue" placeholder="Dupont" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700">Prénom</label>
          <input type="text" required value={form.prenom} onChange={(e) => setForm({ ...form, prenom: e.target.value })} className="mt-1 block w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm shadow-sm focus:border-royal-blue focus:ring-1 focus:ring-royal-blue" placeholder="Jean" />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700">Email</label>
        <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="mt-1 block w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm shadow-sm focus:border-royal-blue focus:ring-1 focus:ring-royal-blue" placeholder="jean.dupont@email.com" />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700">WhatsApp (optionnel)</label>
        <input type="tel" value={form.whatsapp} onChange={(e) => setForm({ ...form, whatsapp: e.target.value })} className="mt-1 block w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm shadow-sm focus:border-royal-blue focus:ring-1 focus:ring-royal-blue" placeholder="+33 6 12 34 56 78" />
      </div>
      <Button type="submit" variant="primary" className="w-full">
        Télécharger gratuitement la TEM 2026
      </Button>
      <p className="text-xs text-slate-500 text-center">Vos données restent confidentielles et ne seront jamais partagées.</p>
    </form>
  );
}
