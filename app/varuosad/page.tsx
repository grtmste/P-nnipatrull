import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Varuosad – laste elektriauto&shy;de osad",
  description:
    "Laia valikut laste elektriauto varuosi: akud, mootorid, puldid, rehvid ja muud osad. Kiire tarne.",
};

const categories = [
  {
    icon: "🔋",
    title: "Akud",
    desc: "6V, 12V ja 24V akud kõikvõimalikele mudelitele.",
    price: "alates 29 €",
  },
  {
    icon: "⚙️",
    title: "Mootorid",
    desc: "45W, 100W, 200W ja 280W mootorid.",
    price: "alates 19 €",
  },
  {
    icon: "📡",
    title: "Puldid",
    desc: "Vanemapuldi komplektid erinevate mudelite jaoks.",
    price: "alates 24 €",
  },
  {
    icon: "🛞",
    title: "Rehvid ja rattad",
    desc: "Eva-rehvid, õhkrehvid ja rattakomplektid.",
    price: "alates 12 €",
  },
  {
    icon: "💡",
    title: "LED tuled",
    desc: "Esituled, tagatuled ja dekoratiivsed LED-ribad.",
    price: "alates 8 €",
  },
  {
    icon: "🎵",
    title: "Kõlarid ja elektroonika",
    desc: "MP3-moodulid, Bluetooth-kõlarid, USB-adapterid.",
    price: "alates 14 €",
  },
  {
    icon: "🪑",
    title: "Istmed ja nahk",
    desc: "Asendusistmed ja nahatriibud.",
    price: "alates 25 €",
  },
  {
    icon: "🔩",
    title: "Kinnitused ja muu",
    desc: "Kruvid, kaablid, lülitid ja väiksemad osad.",
    price: "alates 2 €",
  },
];

export default function VaruosadPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-neutral-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <Image
            src="https://ponnipatrull.ee/wp-content/uploads/2025/11/DSC_4926-768x513.jpg"
            alt=""
            fill
            className="object-cover"
            aria-hidden="true"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/80 to-neutral-900/50" />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Varuosad</h1>
          <p className="text-neutral-300 text-lg max-w-xl mx-auto mb-8">
            Hoiame laos laia valikut varuosi kõigi meie toodete jaoks. Tellige
            mugavalt veebist või kirjutage meile.
          </p>
          <a
            href="mailto:info@ponnipatrull.ee"
            className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-500 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-200"
          >
            Küsi varuosa
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">
            Varuosade kategooriad
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <div
                key={cat.title}
                className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="text-4xl mb-4">{cat.icon}</div>
                <h3 className="font-semibold text-neutral-900 mb-2 group-hover:text-orange-600 transition-colors">
                  {cat.title}
                </h3>
                <p className="text-sm text-neutral-500 mb-3">{cat.desc}</p>
                <p className="text-sm font-bold text-orange-600">{cat.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">
            Ei leia otsitavat?
          </h2>
          <p className="text-neutral-500 mb-6">
            Kirjutage meile toote mudel ja vajaliku osa nimetus. Aitame leida
            õige varuosa kiirelt.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="mailto:info@ponnipatrull.ee"
              className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              Saada e-kiri
            </a>
            <Link
              href="/#kontakt"
              className="inline-flex items-center gap-2 border border-neutral-300 text-neutral-700 hover:text-orange-600 hover:border-orange-400 font-semibold px-6 py-3 rounded-xl transition-all"
            >
              Helista meile
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
