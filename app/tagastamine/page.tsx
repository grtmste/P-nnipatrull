import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tagastamine",
  description: "Põnnipatrull tagastamispoliitika – 14 päeva tagastusõigus.",
};

export default function TagastaminePage() {
  return (
    <div className="bg-[--bg] min-h-screen">
      <div className="max-w-2xl mx-auto px-4 py-14">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-ink-muted mb-3">Teave</p>
        <h1 className="text-2xl sm:text-3xl font-semibold text-ink tracking-tight mb-4">
          Tagastamine
        </h1>

        {/* Highlight */}
        <div className="border border-ink-faint bg-surface px-5 py-4 mb-10 flex items-start gap-3">
          <svg className="w-4 h-4 text-accent mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
          </svg>
          <div>
            <p className="text-sm font-medium text-ink">14 päeva tagastusõigus</p>
            <p className="text-xs text-ink-secondary mt-0.5">
              Vastavalt EL direktiivile on teil õigus toode 14 päeva jooksul tagastada põhjust esitamata.
            </p>
          </div>
        </div>

        <div className="space-y-8 text-sm text-ink-secondary leading-relaxed">
          <section>
            <h2 className="text-sm font-semibold text-ink mb-2 uppercase tracking-wide">Tagastuse tingimused</h2>
            <ul className="space-y-1.5 pl-4">
              {[
                "Toode peab olema kasutamata ja originaalpakendis",
                "Kõik komplektis olevad osad peavad olema alles",
                "Tagastus tuleb algatada 14 päeva jooksul kauba kättesaamisest",
                "Tagastuskulud kannab ostja (v.a toote vea korral)",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1.5 w-1 h-1 bg-ink-muted rounded-full shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-sm font-semibold text-ink mb-2 uppercase tracking-wide">Tagastuse protsess</h2>
            <div className="border border-ink-faint divide-y divide-ink-faint">
              {[
                ["01", 'Saatke e-kiri aadressile info@ponnipatrull.ee teemaga "Tagastus [tellimuse nr]"'],
                ["02", "Kinnitame tagastuse ja saadame juhised 1–2 tööpäeva jooksul"],
                ["03", "Pakkige toode hoolikalt originaalpakendisse"],
                ["04", "Saatke toode meie poolt antud aadressile"],
                ["05", "Tagastame raha 14 päeva jooksul pärast kauba saamist"],
              ].map(([n, step]) => (
                <div key={n} className="flex gap-4 px-4 py-3 bg-surface">
                  <span className="text-ink-muted font-light shrink-0">{n}</span>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-sm font-semibold text-ink mb-2 uppercase tracking-wide">Tagastust ei aktsepteerita</h2>
            <ul className="space-y-1.5 pl-4">
              {[
                "Kasutatud või kahjustatud tooted",
                "Tooted ilma originaalpakendita",
                "Eritellimuse alusel toodetud tooted",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1.5 w-1 h-1 bg-ink-muted rounded-full shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-sm font-semibold text-ink mb-2 uppercase tracking-wide">Defektsed tooted</h2>
            <p>
              Toote vea korral tagastame kauba kulud täies ulatuses. Pildistage defekt ja saatke meile
              e-kirjaga — asendame toote või tagastame kogu summa.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
