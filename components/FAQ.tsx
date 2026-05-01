"use client";

import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const faqs = [
  {
    q: "Kui kiiresti toimub tarne?",
    a: "Laos olevad tooted saadetakse 1–2 tööpäeva jooksul pärast makse laekumist. Kasutame DPD ja Omniva kullerteenust.",
  },
  {
    q: "Kas saab maksta järelmaksuga?",
    a: "Jah. Pakume järelmaksu 0% intressiga koostöös Esto finantsteenusega. Täpsemalt vaata lehe /jarelmaks alt.",
  },
  {
    q: "Kas toodetele antakse garantii?",
    a: "Kõik tooted tulevad 12 kuu garantiiga. Tootevea korral parandame või vahetame toote tasuta.",
  },
  {
    q: "Kas varuosad on saadaval?",
    a: "Jah, hoiame laos laia valikut varuosi — akud, mootorid, puldid ja muud osad. Vaata varuosade lehte.",
  },
  {
    q: "Millises vanuses lastele sobivad teie sõidukid?",
    a: "Meie valikus on sõidukeid 1–8-aastastele lastele. Iga toote juurde oleme lisanud soovitusliku vanuse ja kaalupiiri.",
  },
  {
    q: "Kuidas toimub tagastamine?",
    a: "14 päeva jooksul saab toote tagastada. Toode peab olema kasutamata ja originaalpakendis. Loe lähemalt tagastamise lehelt.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-ink-faint last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left gap-6"
        aria-expanded={open}
      >
        <span className="text-sm font-medium text-ink">{q}</span>
        <svg
          className={`w-4 h-4 text-ink-muted shrink-0 transition-transform duration-200 ${open ? "rotate-45" : ""}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
        </svg>
      </button>
      <div className={`overflow-hidden transition-all duration-200 ${open ? "max-h-48 pb-4" : "max-h-0"}`}>
        <p className="text-sm text-ink-secondary leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

export function FAQ() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section className="py-16 bg-[--bg]">
      <div className="max-w-3xl mx-auto px-4">
        <div className="mb-10">
          <p className="text-xs font-medium tracking-widest uppercase text-ink-muted mb-2">
            Abi
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-ink tracking-tight">
            Korduma kippuvad küsimused
          </h2>
        </div>
        <div ref={ref} className="border border-ink-faint bg-surface divide-y divide-ink-faint">
          {faqs.map((f) => (
            <div key={f.q} className="px-6">
              <FAQItem q={f.q} a={f.a} />
            </div>
          ))}
        </div>
        <p className="text-xs text-ink-muted mt-5">
          Ei leia vastust?{" "}
          <a href="mailto:info@ponnipatrull.ee" className="text-accent underline underline-offset-2 hover:text-accent-hover transition-colors duration-150">
            Kirjuta meile
          </a>
          .
        </p>
      </div>
    </section>
  );
}
