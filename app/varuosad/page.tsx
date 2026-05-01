import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Varuosad",
  description: "Laste elektriauto varuosad: akud, mootorid, puldid, rehvid. Kiire tarne.",
};

const categories = [
  { icon: "⬡", title: "Akud", desc: "6V, 12V ja 24V erinevate mudelite jaoks", price: "alates 29 €" },
  { icon: "◎", title: "Mootorid", desc: "45W, 100W, 200W ja 280W mootorid", price: "alates 19 €" },
  { icon: "◈", title: "Puldid", desc: "Vanemapuldi komplektid kõikidele mudelitele", price: "alates 24 €" },
  { icon: "◯", title: "Rehvid ja rattad", desc: "Eva-rehvid, õhkrehvid, rattakomplektid", price: "alates 12 €" },
  { icon: "◆", title: "LED tuled", desc: "Esituled, tagatuled ja dekoratiivvalgustus", price: "alates 8 €" },
  { icon: "◉", title: "Kõlarid ja elektroonika", desc: "MP3-moodulid, Bluetooth-kõlarid, USB", price: "alates 14 €" },
  { icon: "▣", title: "Istmed", desc: "Asendusistmed ja nahkkatted", price: "alates 25 €" },
  { icon: "◇", title: "Kinnitused ja muu", desc: "Kruvid, kaablid, lülitid, väiksemad osad", price: "alates 2 €" },
];

export default function VaruosadPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-ink text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://ponnipatrull.ee/wp-content/uploads/2025/11/DSC_4926-768x513.jpg"
            alt=""
            fill
            className="object-cover opacity-10"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/50" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-white/30 mb-4">
            Põnnipatrull
          </p>
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-3">Varuosad</h1>
          <p className="text-sm text-white/50 max-w-md leading-relaxed mb-8">
            Laia valikut varuosi kõigi meie toodete jaoks. Kiire tarne, laost.
          </p>
          <a href="mailto:info@ponnipatrull.ee" className="btn-accent inline-flex">
            Küsi varuosa
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
          </a>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-[--bg]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-8">
            <p className="text-xs font-medium tracking-widest uppercase text-ink-muted mb-2">Kategooriad</p>
            <h2 className="text-2xl font-semibold text-ink tracking-tight">Varuosade valik</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-ink-faint border border-ink-faint">
            {categories.map((cat) => (
              <div
                key={cat.title}
                className="bg-surface p-6 hover:bg-surface-subtle transition-colors duration-150 group"
              >
                <p className="text-2xl text-ink-muted mb-3 font-light">{cat.icon}</p>
                <h3 className="text-sm font-semibold text-ink mb-1 group-hover:text-accent transition-colors duration-150">
                  {cat.title}
                </h3>
                <p className="text-xs text-ink-muted mb-3 leading-relaxed">{cat.desc}</p>
                <p className="text-xs font-semibold text-accent">{cat.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-surface border-t border-ink-faint py-16">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-xl font-semibold text-ink mb-2 tracking-tight">Ei leia otsitavat?</h2>
          <p className="text-sm text-ink-secondary mb-6 leading-relaxed">
            Kirjutage toote mudel ja vajaliku osa nimetus — aitame leida õige varuosa.
          </p>
          <div className="flex flex-col sm:flex-row gap-2">
            <a href="mailto:info@ponnipatrull.ee" className="btn-accent">
              Saada e-kiri
            </a>
            <Link href="/#kontakt" className="btn-ghost">
              Helista meile
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
