"use client";

import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/data/products";

const badgeConfig: Record<string, { label: string; cls: string }> = {
  LAOS:   { label: "Laos",   cls: "bg-accent text-white" },
  SOODUS: { label: "Soodus", cls: "bg-red-700 text-white" },
  UUS:    { label: "Uus",    cls: "bg-ink text-white" },
};

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const badge = product.badge ? badgeConfig[product.badge] : null;

  return (
    <Link
      href={`/toode/${product.slug}`}
      className="group flex flex-col bg-surface border border-ink-faint hover:border-ink/30 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-surface-subtle">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover group-hover:scale-[1.03] transition-transform duration-300"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {badge && (
          <span className={`absolute top-2.5 left-2.5 ${badge.cls} text-[10px] font-semibold px-2 py-0.5 rounded-sm uppercase tracking-wider`}>
            {badge.label}
          </span>
        )}
        {product.compareAtPrice && (
          <span className="absolute top-2.5 right-2.5 bg-red-700 text-white text-[10px] font-semibold px-2 py-0.5 rounded-sm uppercase tracking-wider">
            Soodus
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4 gap-2">
        <h3 className="text-sm font-medium text-ink leading-snug line-clamp-2 group-hover:text-accent transition-colors duration-150">
          {product.title}
        </h3>

        <p className="text-xs text-ink-muted line-clamp-1 flex-1">
          {product.shortDescription}
        </p>

        <div className="flex items-end justify-between pt-2 border-t border-ink-faint">
          <div>
            <p className="text-base font-semibold text-ink">{product.price}</p>
            {product.compareAtPrice && (
              <p className="text-xs text-ink-muted line-through">
                {product.compareAtPrice}
              </p>
            )}
          </div>

          <span className="text-xs font-medium text-accent group-hover:text-accent-hover transition-colors duration-150 flex items-center gap-1">
            Vaata
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
