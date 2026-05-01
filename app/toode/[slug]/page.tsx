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
  return { title: product.title, description: product.shortDescription };
}

const badgeConfig: Record<string, { label: string; cls: string }> = {
  LAOS:   { label: "Laos",   cls: "bg-accent text-white" },
  SOODUS: { label: "Soodus", cls: "bg-red-700 text-white" },
  UUS:    { label: "Uus",    cls: "bg-ink text-white" },
};

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const badge = product.badge ? badgeConfig[product.badge] : null;

  return (
    <div className="bg-[--bg] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Breadcrumb */}
        <nav
          className="flex items-center gap-2 text-xs text-ink-muted mb-8"
          aria-label="Leivapuru"
        >
          <Link href="/" className="hover:text-ink transition-colors duration-150">Avaleht</Link>
          <span>/</span>
          <Link href="/e-pood" className="hover:text-ink transition-colors duration-150">E-pood</Link>
          <span>/</span>
          <span className="text-ink-secondary line-clamp-1">{product.title}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Images */}
          <div className="space-y-2">
            <div className="relative aspect-[4/3] overflow-hidden bg-surface border border-ink-faint">
              <Image
                src={product.images[0]}
                alt={product.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {badge && (
                <span className={`absolute top-3 left-3 ${badge.cls} text-[10px] font-semibold px-2 py-0.5 rounded-sm uppercase tracking-wider`}>
                  {badge.label}
                </span>
              )}
            </div>
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((img, i) => (
                  <div
                    key={i}
                    className="relative aspect-square overflow-hidden bg-surface border border-ink-faint hover:border-ink/30 transition-colors duration-150 cursor-pointer"
                  >
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
            <h1 className="text-xl sm:text-2xl font-semibold text-ink tracking-tight mb-5 leading-snug">
              {product.title}
            </h1>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-6 pb-6 border-b border-ink-faint">
              <span className="text-3xl font-semibold text-ink tracking-tight">{product.price}</span>
              {product.compareAtPrice && (
                <div>
                  <span className="text-sm text-ink-muted line-through">{product.compareAtPrice}</span>
                  <span className="ml-2 text-xs font-semibold text-red-700">Soodushind</span>
                </div>
              )}
            </div>

            <p className="text-sm text-ink-secondary leading-relaxed mb-6">
              {product.shortDescription}
            </p>

            {/* Specs */}
            <div className="mb-6">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-ink-muted mb-3">
                Tehnilised andmed
              </p>
              <ul className="space-y-1.5">
                {product.specs.map((spec) => (
                  <li key={spec} className="flex items-center gap-2.5 text-sm text-ink-secondary">
                    <span className="w-1 h-1 bg-accent rounded-full shrink-0" />
                    {spec}
                  </li>
                ))}
              </ul>
            </div>

            {/* Trust micro */}
            <div className="grid grid-cols-2 gap-2 mb-6">
              {[
                "Tarne 1–2 tööpäeva",
                "12 kuu garantii",
                "Varuosad laos",
                "14 päeva tagastus",
              ].map((t) => (
                <div
                  key={t}
                  className="flex items-center gap-2 bg-surface border border-ink-faint px-3 py-2 text-xs text-ink-secondary"
                >
                  <span className="w-1 h-1 bg-ink-muted rounded-full shrink-0" />
                  {t}
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex gap-2">
              <a href="mailto:info@ponnipatrull.ee" className="btn-accent flex-1 justify-center py-3">
                Telli nüüd
              </a>
              <a
                href="tel:+37255555555"
                className="btn-ghost flex-1 justify-center py-3"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                Helista
              </a>
            </div>

            <p className="text-[11px] text-ink-muted mt-4">
              Küsimused? info@ponnipatrull.ee — vastame kiirelt.
            </p>
          </div>
        </div>

        {/* Back */}
        <div className="mt-12 pt-8 border-t border-ink-faint">
          <Link
            href="/e-pood"
            className="inline-flex items-center gap-1.5 text-sm text-ink-secondary hover:text-ink transition-colors duration-150"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Tagasi e-poodi
          </Link>
        </div>
      </div>
    </div>
  );
}
