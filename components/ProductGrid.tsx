import { products } from "@/data/products";
import { ProductCard } from "./ProductCard";
import Link from "next/link";

interface ProductGridProps {
  limit?: number;
  showCta?: boolean;
  title?: string;
  subtitle?: string;
}

export function ProductGrid({
  limit,
  showCta = false,
  title = "Populaarsed tooted",
  subtitle,
}: ProductGridProps) {
  const displayed = limit ? products.slice(0, limit) : products;

  return (
    <section className="py-16 bg-[--bg]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div className="flex items-end justify-between mb-8 gap-4">
          <div>
            <p className="text-xs font-medium tracking-widest uppercase text-ink-muted mb-2">
              E-pood
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-ink tracking-tight">
              {title}
            </h2>
            {subtitle && (
              <p className="text-sm text-ink-secondary mt-1">{subtitle}</p>
            )}
          </div>
          {showCta && (
            <Link
              href="/e-pood"
              className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-hover transition-colors duration-150 shrink-0"
            >
              Kõik tooted
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-ink-faint border border-ink-faint">
          {displayed.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>

        {showCta && (
          <div className="mt-8 sm:hidden text-center">
            <Link href="/e-pood" className="btn-ghost">
              Kõik tooted
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
