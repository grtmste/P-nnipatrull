import Link from "next/link";

export function PromoBar() {
  return (
    <div className="bg-surface-subtle border-b border-ink-faint">
      <div className="max-w-7xl mx-auto px-4 py-2.5 flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
        <p className="text-xs text-ink-secondary tracking-wide">
          <span className="font-semibold text-ink">Sooduspakkumised:</span>
          {" "}Audi Q7 must — <span className="font-medium">265 €</span> (oli 529 €)
          {" "}·{" "}
          Lamborghini Veneno — <span className="font-medium">390 €</span> (oli 499 €)
        </p>
        <Link
          href="/e-pood"
          className="text-xs font-semibold text-accent hover:text-accent-hover underline underline-offset-2 transition-colors duration-150 whitespace-nowrap"
        >
          Vaata soodusat →
        </Link>
      </div>
    </div>
  );
}
