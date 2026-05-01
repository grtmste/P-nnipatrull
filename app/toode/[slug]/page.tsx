import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { products, getProductBySlug } from "@/data/products";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Toode ei leitud" };
  return {
    title: product.title,
    description: product.shortDescription,
  };
}

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

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-neutral-500 mb-8" aria-label="Leivapuru">
        <Link href="/" className="hover:text-orange-600 transition-colors">Avaleht</Link>
        <span>/</span>
        <Link href="/e-pood" className="hover:text-orange-600 transition-colors">E-pood</Link>
        <span>/</span>
        <span className="text-neutral-900 font-medium line-clamp-1">{product.title}</span>
      </nav>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Images */}
        <div className="space-y-4">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-neutral-100 shadow-lg">
            <Image
              src={product.images[0]}
              alt={product.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {product.badge && (
              <span
                className={`absolute top-4 left-4 ${badgeColors[product.badge]} text-white text-sm font-bold px-4 py-1.5 rounded-full`}
              >
                {badgeLabels[product.badge]}
              </span>
            )}
          </div>
          {product.images.length > 1 && (
            <div className="grid grid-cols-4 gap-3">
              {product.images.map((img, i) => (
                <div key={i} className="relative aspect-square rounded-xl overflow-hidden bg-neutral-100 cursor-pointer ring-2 ring-transparent hover:ring-orange-400 transition-all">
                  <Image
                    src={img}
                    alt={`${product.title} ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="100px"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Info */}
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-4 leading-tight">
            {product.title}
          </h1>

          {/* Price */}
          <div className="flex items-baseline gap-3 mb-6">
            <span className="text-4xl font-bold text-neutral-900">{product.price}</span>
            {product.compareAtPrice && (
              <div className="flex flex-col">
                <span className="text-sm text-neutral-400 line-through">
                  oli {product.compareAtPrice}
                </span>
                <span className="text-sm font-semibold text-red-600">Soodushind</span>
              </div>
            )}
          </div>

          <p className="text-neutral-600 leading-relaxed mb-6">
            {product.shortDescription}
          </p>

          {/* Specs */}
          <div className="bg-neutral-50 rounded-2xl p-6 mb-6">
            <h2 className="font-semibold text-neutral-900 mb-3">Tehnilised andmed</h2>
            <ul className="space-y-2">
              {product.specs.map((spec) => (
                <li key={spec} className="flex items-center gap-2 text-sm text-neutral-600">
                  <svg className="w-4 h-4 text-orange-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {spec}
                </li>
              ))}
            </ul>
          </div>

          {/* Trust badges */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            {[
              { icon: "🚚", text: "Tarne 1–2 tööpäeva" },
              { icon: "🛡️", text: "12 kuu garantii" },
              { icon: "🔧", text: "Varuosad laos" },
              { icon: "↩️", text: "14 päeva tagastus" },
            ].map((t) => (
              <div key={t.text} className="flex items-center gap-2 bg-white border border-neutral-200 rounded-xl px-3 py-2.5 text-sm text-neutral-700">
                <span>{t.icon}</span>
                <span>{t.text}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="mailto:info@ponnipatrull.ee"
              className="flex-1 bg-orange-600 hover:bg-orange-700 text-white font-semibold text-center py-4 rounded-2xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
            >
              Telli nüüd
            </a>
            <a
              href="tel:+37255555555"
              className="flex-1 flex items-center justify-center gap-2 border border-neutral-300 hover:border-orange-400 text-neutral-700 hover:text-orange-600 font-semibold py-4 rounded-2xl transition-all duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Helista
            </a>
          </div>

          <p className="text-xs text-neutral-400 mt-4 text-center">
            Küsimused? Kirjuta info@ponnipatrull.ee või helista. Vastame kiirelt.
          </p>
        </div>
      </div>

      {/* Back to shop */}
      <div className="mt-12 text-center">
        <Link
          href="/e-pood"
          className="inline-flex items-center gap-2 text-neutral-500 hover:text-orange-600 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Tagasi e-poodi
        </Link>
      </div>
    </div>
  );
}
