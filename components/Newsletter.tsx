"use client";

import { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="bg-ink py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-xl">
          <p className="text-xs font-medium tracking-widest uppercase text-white/30 mb-4">
            Uudiskiri
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mb-3">
            Liitu uudiskirjaga
          </h2>
          <p className="text-sm text-white/50 mb-8 leading-relaxed">
            Uued tooted, eripakkumised ja soodushinnad — otse su postkasti.
            Saad tellimuse igal ajal tühistada.
          </p>

          {submitted ? (
            <div className="flex items-center gap-2 text-white/70 text-sm">
              <svg className="w-4 h-4 text-accent-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              Liitunud. Aitäh!
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-2">
              <label htmlFor="nl-email" className="sr-only">E-posti aadress</label>
              <input
                id="nl-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="sinu@email.ee"
                className="flex-1 min-w-0 bg-white/5 border border-white/10 text-white placeholder:text-white/25 text-sm px-4 py-2.5 rounded-md outline-none focus:border-white/30 focus:bg-white/10 transition-colors duration-150"
              />
              <button
                type="submit"
                className="btn-accent shrink-0 px-5 py-2.5"
              >
                Liitu
              </button>
            </form>
          )}

          <p className="text-[11px] text-white/25 mt-4">
            Loe meie{" "}
            <a href="/privaatsuspoliitika" className="underline underline-offset-2 hover:text-white/40 transition-colors duration-150">
              privaatsuspoliitikat
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
