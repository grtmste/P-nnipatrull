import Link from "next/link";

export function PromoBar() {
  return (
    <div className="bg-gradient-to-r from-red-600 to-red-500 text-white">
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-center">
        <span className="text-sm font-medium">
          🔥 <strong>Sooduspakkumine:</strong> Audi Q7 must — 265 € (oli 529 €) &nbsp;|&nbsp; Lamborghini Veneno — 390 € (oli 499 €)
        </span>
        <Link
          href="/e-pood?badge=SOODUS"
          className="inline-flex items-center gap-1 bg-white text-red-600 font-bold text-xs px-4 py-1.5 rounded-full hover:bg-red-50 transition-colors whitespace-nowrap"
        >
          Kasuta soodusat
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
