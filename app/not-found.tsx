import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <p className="text-7xl font-bold text-orange-600 mb-4">404</p>
        <h1 className="text-2xl font-bold text-neutral-900 mb-3">
          Lehte ei leitud
        </h1>
        <p className="text-neutral-500 mb-8">
          Otsitav leht pole saadaval. Proovi mõnda teist lehte.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            Avaleht
          </Link>
          <Link
            href="/e-pood"
            className="border border-neutral-300 text-neutral-700 hover:border-orange-400 hover:text-orange-600 font-semibold px-6 py-3 rounded-xl transition-all"
          >
            E-pood
          </Link>
        </div>
      </div>
    </div>
  );
}
