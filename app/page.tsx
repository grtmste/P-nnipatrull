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
      <ProductGrid limit={8} showCta title="Populaarsed tooted" subtitle="Meie enimmüüdud ja hinnatud laste elektriauto&shy;d" />

      {/* Varuosad CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative rounded-3xl overflow-hidden bg-neutral-900 text-white p-8 flex flex-col justify-between min-h-[280px]">
              <Image
                src="https://ponnipatrull.ee/wp-content/uploads/2025/11/DSC_5273-768x513.jpg"
                alt="Varuosad"
                fill
                className="object-cover opacity-30"
              />
              <div className="relative">
                <span className="inline-block bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                  VARUOSAD
                </span>
                <h2 className="text-2xl font-bold mb-2">Varuosad olemas</h2>
                <p className="text-neutral-300 text-sm">
                  Akud, mootorid, puldid ja muud osad. Telli mugavalt veebist.
                </p>
              </div>
              <Link
                href="/varuosad"
                className="relative inline-flex items-center gap-2 bg-white text-neutral-900 font-semibold px-6 py-3 rounded-xl hover:bg-neutral-100 transition-colors w-fit mt-6"
              >
                Vaata varuosi
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="relative rounded-3xl overflow-hidden bg-orange-600 text-white p-8 flex flex-col justify-between min-h-[280px]">
              <Image
                src="https://ponnipatrull.ee/wp-content/uploads/2025/04/DSC_6560-768x513.jpg"
                alt="Järelmaks"
                fill
                className="object-cover opacity-20"
              />
              <div className="relative">
                <span className="inline-block bg-white text-orange-600 text-xs font-bold px-3 py-1 rounded-full mb-4">
                  JÄRELMAKS
                </span>
                <h2 className="text-2xl font-bold mb-2">Järelmaks 0% intressiga</h2>
                <p className="text-orange-100 text-sm">
                  Jaga makse mitmeks kuuks ilma lisatasuta. Kohe heakskiit.
                </p>
              </div>
              <Link
                href="/jarelmaks"
                className="relative inline-flex items-center gap-2 bg-white text-orange-600 font-semibold px-6 py-3 rounded-xl hover:bg-orange-50 transition-colors w-fit mt-6"
              >
                Uuri järelmaksu
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <InstagramGrid />
      <FAQ />
      <Newsletter />
    </>
  );
}
