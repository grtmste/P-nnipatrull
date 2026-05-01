import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { ProductGrid } from "@/components/ProductGrid";
import { PromoBar } from "@/components/PromoBar";
import { FAQ } from "@/components/FAQ";
import { Newsletter } from "@/components/Newsletter";
import { InstagramGrid } from "@/components/InstagramGrid";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Põnnipatrull – Laste elektriauto&shy;de ekspert Eestis",
  description:
    "Eesti suurim laste elektriautode ja ATV-de pood. Mercedes, Lamborghini, Can-Am. Kiire tarne, garantii ja varuosad laos.",
};

export default function Home() {
  return (
    <>
      <PromoBar />
      <Hero />
      <TrustBar />
      <ProductGrid limit={8} showCta title="Populaarsed tooted" />

      {/* Dual CTA strip */}
      <section className="bg-surface border-t border-b border-ink-faint py-16">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-px bg-ink-faint border border-ink-faint">
          {/* Varuosad */}
          <div className="relative bg-surface overflow-hidden group min-h-[300px] flex flex-col justify-between p-8">
            <Image
              src="https://ponnipatrull.ee/wp-content/uploads/2025/11/DSC_5273-768x513.jpg"
              alt="Varuosad"
              fill
              className="object-cover opacity-[0.08] group-hover:opacity-[0.14] transition-opacity duration-300"
            />
            <div className="relative">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-ink-muted mb-3">
                Varuosad
              </p>
              <h2 className="text-xl font-semibold text-ink tracking-tight mb-2">
                Varuosad laos
              </h2>
              <p className="text-sm text-ink-secondary max-w-xs leading-relaxed">
                Akud, mootorid, puldid ja rehvid — kiire kohaletoimetamine.
              </p>
            </div>
            <Link
              href="/varuosad"
              className="relative mt-8 btn-ghost w-fit"
            >
              Vaata varuosi
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </Link>
          </div>

          {/* Järelmaks */}
          <div className="relative bg-ink overflow-hidden group min-h-[300px] flex flex-col justify-between p-8">
            <Image
              src="https://ponnipatrull.ee/wp-content/uploads/2025/04/DSC_6560-768x513.jpg"
              alt="Järelmaks"
              fill
              className="object-cover opacity-[0.12] group-hover:opacity-[0.18] transition-opacity duration-300"
            />
            <div className="relative">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-white/30 mb-3">
                Rahastamine
              </p>
              <h2 className="text-xl font-semibold text-white tracking-tight mb-2">
                Järelmaks 0% intressiga
              </h2>
              <p className="text-sm text-white/50 max-w-xs leading-relaxed">
                Jaga makse mitmeks kuuks. Kohe heakskiit, ilma lisatasuta.
              </p>
            </div>
            <Link
              href="/jarelmaks"
              className="relative mt-8 inline-flex items-center gap-2 border border-white/20 text-white text-sm font-medium px-5 py-2.5 rounded-md hover:bg-white/5 hover:border-white/40 transition-colors duration-150 w-fit"
            >
              Uuri järelmaksu
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <InstagramGrid />
      <FAQ />
      <Newsletter />
    </>
  );
}
