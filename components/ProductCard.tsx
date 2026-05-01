"use client";

import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/data/products";

const badgeColors: Record<string, string> = {
  LAOS: "bg-emerald-500",
  SOODUS: "bg-red-500",
  UUS: "bg-blue-500",
};

const badgeLabels: Record<string, string> = {
  LAOS: "Laos",
  SOODUS: "Soodus",
  UUS: "Uus",
};

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/toode/${product.slug}`}
      className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {product.badge && (
          <span
            className={`absolute top-3 left-3 ${badgeColors[product.badge]} text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide`}
          >
            {badgeLabels[product.badge]}
          </span>
        )}
        {product.compareAtPrice && (
          <span className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">
            -{Math.round((1 - parseFloat(product.price.replace(/[^0-9,]/g, "").replace(",", ".")) / parseFloat(product.compareAtPrice.replace(/[^0-9,]/g, "").replace(",", "."))) * 100)}%
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4">
        <h3 className="font-semibold text-neutral-900 text-sm leading-snug mb-2 line-clamp-2 group-hover:text-orange-600 transition-colors">
          {product.title}
        </h3>
        <p className="text-xs text-neutral-500 mb-3 line-clamp-2">
          {product.shortDescription}
        </p>

        <div className="mt-auto flex items-end justify-between">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-bold text-neutral-900">
                {product.price}
              </span>
            </div>
            {product.compareAtPrice && (
              <span className="text-xs text-neutral-400 line-through">
                oli {product.compareAtPrice}
              </span>
            )}
          </div>

          <span className="flex-shrink-0 inline-flex items-center gap-1 bg-orange-600 group-hover:bg-orange-700 text-white text-xs font-semibold px-3 py-1.5 rounded-xl transition-colors">
            Vaata
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
