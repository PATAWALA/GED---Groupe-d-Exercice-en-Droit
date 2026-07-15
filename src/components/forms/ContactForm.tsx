'use client';

import { useState, FormEvent } from 'react';
import Button from '@/components/ui/Button';

export default function ContactForm() {
  const [form, setForm] = useState({ nom: '', email: '', sujet: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <div className="p-8 bg-green-50 border border-green-200 rounded-xl text-center">
        <p className="text-green-800 font-semibold">Message envoyé avec succès.</p>
        <p className="text-sm text-green-700 mt-2">Notre équipe vous répondra sous 24h.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-slate-700">Nom complet</label>
        <input type="text" required value={form.nom} onChange={(e) => setForm({ ...form, nom: e.target.value })} className="mt-1 block w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm shadow-sm focus:border-royal-blue focus:ring-1 focus:ring-royal-blue" />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700">Email</label>
        <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="mt-1 block w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm shadow-sm focus:border-royal-blue focus:ring-1 focus:ring-royal-blue" />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700">Sujet</label>
        <select value={form.sujet} onChange={(e) => setForm({ ...form, sujet: e.target.value })} className="mt-1 block w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm shadow-sm focus:border-royal-blue focus:ring-1 focus:ring-royal-blue">
          <option value="">Choisissez un motif</option>
          <option value="orientation">Orientation juridique</option>
          <option value="clinique">Clinique juridique</option>
          <option value="formation">Formations</option>
          <option value="autre">Autre</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700">Message</label>
        <textarea rows={4} required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="mt-1 block w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm shadow-sm focus:border-royal-blue focus:ring-1 focus:ring-royal-blue" placeholder="Décrivez votre situation ou votre besoin..." />
      </div>
      <Button type="submit" variant="secondary" className="w-full">
        Envoyer ma demande
      </Button>
    </form>
  );
}
