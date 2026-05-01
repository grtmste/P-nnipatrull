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
  subtitle = "Lai valik premium elektriauto&shy;sid ja sõidukeid lastele",
}: ProductGridProps) {
  const displayed = limit ? products.slice(0, limit) : products;

  return (
    <section className="py-16 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2
            className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-3"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <p
            className="text-neutral-500 max-w-xl mx-auto"
            dangerouslySetInnerHTML={{ __html: subtitle }}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayed.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>

        {showCta && (
          <div className="text-center mt-10">
            <Link
              href="/e-pood"
              className="inline-flex items-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
            >
              Vaata kõiki tooteid
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
