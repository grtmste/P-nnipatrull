import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Järelmaks 0% intressiga",
  description: "Osta laste elektriauto järelmaksuga 0% intressiga. Kohe heakskiit, ilma lisatasuta.",
};

const steps = [
  { n: "01", title: "Vali toode", desc: "Sirvi e-poodi ja vali endale sobiv sõiduk." },
  { n: "02", title: "Vali järelmaks", desc: "Makseviisina vali Esto järelmaks, sisesta andmed." },
  { n: "03", title: "Kohe otsus", desc: "Heakskiit tuleb minutitega. Enamik taotlusi kinnitatakse." },
  { n: "04", title: "Kaup tuleb", desc: "Toode toimetatakse kätte 1–2 tööpäeva jooksul." },
];

const faqs = [
  { q: "Minimaalne ostusumma?", a: "Järelmaksu saab kasutada ostude puhul alates 100 €." },
  { q: "Kui pikaks ajaks?", a: "3–36 kuud vastavalt valitud summale." },
  { q: "Kas on vaja käendajat?", a: "Ei. Taotlemine on kiire ja käendajata." },
  { q: "Mida on vaja?", a: "Isikutunnistus ja aktiivne pangakonto." },
];

export default function JarelmaksPage() {
  return (
    <>
      <section className="bg-ink text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-white/30 mb-4">
            Rahastamine
          </p>
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-3">
            Järelmaks <span className="text-accent-muted">0%</span> intressiga
          </h1>
          <p className="text-sm text-white/50 max-w-md leading-relaxed mb-8">
            Jaga ostu hind mugavateks kuumaksedeks ilma intressikuluta.
            Kiire heakskiit, selged tingimused.
          </p>
          <Link href="/e-pood" className="btn-accent inline-flex">
            Vaata tooteid
          </Link>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 bg-[--bg]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-8">
            <p className="text-xs font-medium tracking-widest uppercase text-ink-muted mb-2">Protsess</p>
            <h2 className="text-2xl font-semibold text-ink tracking-tight">Kuidas see toimib?</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-ink-faint border border-ink-faint">
            {steps.map((s) => (
              <div key={s.n} className="bg-surface p-6">
                <p className="text-2xl font-light text-ink-muted mb-4">{s.n}</p>
                <h3 className="text-sm font-semibold text-ink mb-1">{s.title}</h3>
                <p className="text-xs text-ink-secondary leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-16 bg-surface border-t border-ink-faint">
        <div className="max-w-lg mx-auto px-4">
          <div className="mb-6">
            <p className="text-xs font-medium tracking-widest uppercase text-ink-muted mb-2">Kalkulaator</p>
            <h2 className="text-2xl font-semibold text-ink tracking-tight">Näidisarvutus</h2>
            <p className="text-xs text-ink-muted mt-1">Mercedes G63 AMG XXL — 750 €</p>
          </div>
          <div className="border border-ink-faint bg-surface divide-y divide-ink-faint">
            {[
              { months: 3,  monthly: "250,00 €" },
              { months: 6,  monthly: "125,00 €" },
              { months: 12, monthly: "62,50 €"  },
              { months: 24, monthly: "31,25 €"  },
            ].map((row) => (
              <div key={row.months} className="flex items-center justify-between px-5 py-3.5">
                <span className="text-sm text-ink-secondary">{row.months} kuud</span>
                <div className="text-right">
                  <p className="text-sm font-semibold text-ink">{row.monthly} / kuu</p>
                  <p className="text-[10px] text-ink-muted">0% intress</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-[11px] text-ink-muted mt-3">
            Näidishinnad. Täpsed kuumaksed arvutatakse taotluse käigus.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-[--bg]">
        <div className="max-w-lg mx-auto px-4">
          <div className="mb-6">
            <p className="text-xs font-medium tracking-widest uppercase text-ink-muted mb-2">KKK</p>
            <h2 className="text-2xl font-semibold text-ink tracking-tight">Järelmaks — küsimused</h2>
          </div>
          <div className="space-y-2">
            {faqs.map((f) => (
              <div key={f.q} className="bg-surface border border-ink-faint p-5">
                <p className="text-sm font-medium text-ink mb-1">{f.q}</p>
                <p className="text-xs text-ink-secondary leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
