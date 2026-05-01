"use client";

import { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section className="bg-orange-600 py-16">
      <div className="max-w-2xl mx-auto px-4 text-center text-white">
        <div className="text-4xl mb-4">📬</div>
        <h2 className="text-3xl sm:text-4xl font-bold mb-3">
          Liitu uudiskirjaga
        </h2>
        <p className="text-orange-100 mb-8 text-lg">
          Saa esimesena teada uutest toodetest, eripakkumistest ja
          soodushindadest. Ainult relevantne sisu, rämpsposti mitte.
        </p>

        {submitted ? (
          <div className="bg-white/20 backdrop-blur rounded-2xl p-6 inline-flex items-center gap-3 text-white font-semibold">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Suurepärane! Oled uudiskirjaga liitunud.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Sinu e-posti aadress
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="sinu@email.ee"
              className="flex-1 px-5 py-3.5 rounded-xl text-neutral-900 placeholder:text-neutral-400 outline-none focus:ring-2 focus:ring-white/50"
            />
            <button
              type="submit"
              className="bg-neutral-900 hover:bg-neutral-800 text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap"
            >
              Liitu
            </button>
          </form>
        )}

        <p className="text-orange-200 text-xs mt-4">
          Saad uudiskirja tellimuse igal ajal tühistada. Loe meie{" "}
          <a href="/privaatsuspoliitika" className="underline hover:text-white">
            privaatsuspoliitikat
          </a>
          .
        </p>
      </div>
    </section>
  );
}
