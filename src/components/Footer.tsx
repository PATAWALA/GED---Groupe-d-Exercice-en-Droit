export default function Footer() {
  return (
    <footer className="bg-light-bg border-t border-slate-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-8 text-sm text-slate-600 flex flex-col sm:flex-row justify-between items-center">
        <p>� {new Date().getFullYear()} GED � Groupe d&apos;Exercice en Droit. Tous droits r�serv�s.</p>
        <p className="mt-2 sm:mt-0">
          contact@ged-droit.fr � +33 1 23 45 67 89
        </p>
      </div>
    </footer>
  );
}
