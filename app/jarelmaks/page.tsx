import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Järelmaks 0% intressiga",
  description: "Osta laste elektriauto järelmaksuga 0% intressiga. Kohe heakskiit, ilma lisatasuta.",
};

const steps = [
  {
    step: "01",
    title: "Vali toode",
    desc: "Sirvi meie e-poodi ja vali endale sobiv laste elektriauto.",
  },
  {
    step: "02",
    title: "Vali järelmaks",
    desc: "Makseviisina vali Esto järelmaks ja sisesta oma andmed.",
  },
  {
    step: "03",
    title: "Saad kohe otsuse",
    desc: "Heakskiit tuleb mõne minutiga. Enamik taotlusi kinnitatakse.",
  },
  {
    step: "04",
    title: "Saad kauba kätte",
    desc: "Toode toimetatakse kohale 1–2 tööpäeva jooksul.",
  },
];

const faqs = [
  {
    q: "Mis on minimaalne ostu väärtus järelmaksu saamiseks?",
    a: "Järelmaksu saab kasutada ostude puhul alates 100 €.",
  },
  {
    q: "Kui kauaks saab järelmaksu võtta?",
    a: "Järelmaksuperiood on 3–36 kuud vastavalt valitud summale.",
  },
  {
    q: "Kas on vaja käendajat?",
    a: "Ei ole. Järelmaksu taotlemine on lihtne ja kiire, käendajat pole vaja.",
  },
  {
    q: "Mida on vaja taotlemiseks?",
    a: "Vaja läheb isikutunnistust ja aktiivset pangakontot.",
  },
];

export default function JarelmaksPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-neutral-900 to-neutral-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-orange-600/20 border border-orange-500/30 rounded-full px-4 py-1.5 text-orange-300 text-sm font-medium mb-6">
            💳 Järelmaks ilma intressita
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Järelmaks <span className="text-orange-400">0%</span> intressiga
          </h1>
          <p className="text-neutral-300 text-lg max-w-xl mx-auto mb-8">
            Jaga ostu hind mugavateks kuumaksedeks ilma intressikuluta.
            Kiire heakskiit, selged tingimused.
          </p>
          <Link
            href="/e-pood"
            className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-500 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-200 hover:-translate-y-0.5"
          >
            Vaata tooteid
          </Link>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-neutral-900 mb-12">
            Kuidas see toimib?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  {s.step}
                </div>
                <h3 className="font-semibold text-neutral-900 mb-2">{s.title}</h3>
                <p className="text-sm text-neutral-500">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator example */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-neutral-900 mb-8">
            Näidisarvutus
          </h2>
          <div className="bg-white rounded-3xl shadow-card overflow-hidden">
            <div className="p-6 border-b border-neutral-100">
              <h3 className="font-semibold text-neutral-900">
                Mercedes G63 AMG XXL — 750 €
              </h3>
            </div>
            <div className="divide-y divide-neutral-100">
              {[
                { months: 3, monthly: "250,00 €" },
                { months: 6, monthly: "125,00 €" },
                { months: 12, monthly: "62,50 €" },
                { months: 24, monthly: "31,25 €" },
              ].map((row) => (
                <div key={row.months} className="flex items-center justify-between px-6 py-4">
                  <span className="text-neutral-600">{row.months} kuud</span>
                  <div className="text-right">
                    <p className="font-bold text-neutral-900">{row.monthly} / kuu</p>
                    <p className="text-xs text-neutral-400">0% intress</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p className="text-xs text-neutral-400 text-center mt-4">
            Näidishinnad. Täpsed kuumaksed arvutatakse taotluse käigus.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-neutral-900 mb-8">
            Järelmaks – KKK
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-neutral-50 rounded-2xl p-6">
                <h3 className="font-semibold text-neutral-900 mb-2">{faq.q}</h3>
                <p className="text-neutral-600 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
