import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo + nom */}
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/images/logo.jpg"
            alt="Logo GED"
            width={40}
            height={40}
            className="h-10 w-auto"
            priority
          />
          <span className="hidden sm:block text-sm font-semibold text-slate-700">
            Groupe d'Exercice en Droit
          </span>
        </Link>

        {/* Liens centraux */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <Link
            href="/"
            className="text-slate-600 hover:text-royal-blue transition-colors"
          >
            Accueil
          </Link>
          <Link
            href="/formations"
            className="text-slate-600 hover:text-royal-blue transition-colors"
          >
            Formations
          </Link>
          <Link
            href="/publications"
            className="text-slate-600 hover:text-royal-blue transition-colors"
          >
            Publications
          </Link>
          <Link
            href="/contact"
            className="text-slate-600 hover:text-royal-blue transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* Bouton CTA (mobile caché) */}
        <div className="hidden md:block">
          <Link
            href="/formations"
            className="inline-flex items-center px-4 py-2 rounded-lg bg-gold text-white text-sm font-semibold shadow-sm hover:bg-amber-600 transition-colors"
          >
            Réserver une formation
          </Link>
        </div>

        {/* Mobile menu button (optionnel, pour plus tard) */}
        <div className="md:hidden">
          {/* Vous pouvez ajouter un menu burger ici si besoin */}
        </div>
      </nav>
    </header>
  );
}