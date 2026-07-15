import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="bg-white border-b border-slate-100 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold text-royal-blue">GED</span>
          <span className="hidden sm:inline text-sm text-slate-600">
            Groupe d&apos;Exercice en Droit
          </span>
        </Link>
        <div className="flex items-center space-x-6 text-sm font-medium">
          <Link href="/formations" className="text-slate-600 hover:text-royal-blue transition-colors">
            Formations
          </Link>
          <Link href="/publications" className="text-slate-600 hover:text-royal-blue transition-colors">
            Publications
          </Link>
          <Link href="/contact" className="text-slate-600 hover:text-royal-blue transition-colors">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
