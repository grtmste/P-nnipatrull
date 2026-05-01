"use client";

import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const faqs = [
  {
    q: "Kui kiiresti toimub tarne?",
    a: "Tooted, mis on laos, saadetakse 1–2 tööpäeva jooksul pärast tellimuse kinnitamist. Kasutame DPD ja Omniva kullerteenust üle Eesti.",
  },
  {
    q: "Kas saab maksta järelmaksuga?",
    a: "Jah! Pakume järelmaksu 0% intressiga koostöös Esto ja teiste finantsteenuste pakkujatega. Vaata täpsemalt lehe /jarelmaks alt.",
  },
  {
    q: "Kas toodetele antakse garantii?",
    a: "Kõik tooted tulevad 12 kuu garantiiga. Tootevea korral parandame või vahetame toote tasuta.",
  },
  {
    q: "Kas varuosad on saadaval?",
    a: "Jah, hoiame laos laia valikut varuosi. Akud, mootorid, puldid ja muud osad on olemas. Vaata varuosade lehte.",
  },
  {
    q: "Millises vanuses lastele sobivad teie elektriauto&shy;d?",
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
    <div className="border-b border-neutral-200 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-4"
        aria-expanded={open}
      >
        <span
          className="font-semibold text-neutral-900"
          dangerouslySetInnerHTML={{ __html: q }}
        />
        <span
          className={`shrink-0 w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-48 pb-5" : "max-h-0"
        }`}
      >
        <p
          className="text-neutral-600 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: a }}
        />
      </div>
    </div>
  );
}

export function FAQ() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-3">
            Korduma kippuvad küsimused
          </h2>
          <p className="text-neutral-500">
            Ei leia vastust? Võta meiega ühendust.
          </p>
        </div>
        <div ref={ref} className="bg-neutral-50 rounded-3xl p-6 sm:p-8">
          {faqs.map((faq) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
