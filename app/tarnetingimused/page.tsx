import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tarnetingimused",
  description: "Põnnipatrull tarnetingimused – kohaletoimetamine, tarneajad ja hinnad.",
};

export default function TarnetingimisedPage() {
  return (
    <div className="bg-[--bg] min-h-screen">
      <div className="max-w-2xl mx-auto px-4 py-14">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-ink-muted mb-3">Teave</p>
        <h1 className="text-2xl sm:text-3xl font-semibold text-ink tracking-tight mb-10">
          Tarnetingimused
        </h1>

        <div className="space-y-8 text-sm text-ink-secondary leading-relaxed">
          <section>
            <h2 className="text-sm font-semibold text-ink mb-2 uppercase tracking-wide">Tarneaeg</h2>
            <p>
              Laos olevad tooted toimetatakse kohale <strong className="text-ink font-medium">1–2 tööpäeva</strong> jooksul
              pärast makse laekumist. Tööpäeviti enne kella 14:00 esitatud tellimused saadetakse sama päeva jooksul.
            </p>
          </section>

          <section>
            <h2 className="text-sm font-semibold text-ink mb-2 uppercase tracking-wide">Tarnepiirkonnad</h2>
            <p>
              Toimetame kauba kätte üle terve Eesti. Kasutame <strong className="text-ink font-medium">DPD</strong> ja{" "}
              <strong className="text-ink font-medium">Omniva</strong> kullerteenust ning pakiautomaate.
            </p>
          </section>

          <section>
            <h2 className="text-sm font-semibold text-ink mb-2 uppercase tracking-wide">Tarnehinnad</h2>
            <div className="border border-ink-faint divide-y divide-ink-faint">
              {[
                ["Kullertarne (kodu / kontor)", "9,90 €"],
                ["Pakiautomaat (Omniva / DPD)", "4,90 €"],
                ["Tasuta tarne ostude puhul alates", "500 €"],
              ].map(([label, price]) => (
                <div key={label} className="flex justify-between px-4 py-3 bg-surface">
                  <span>{label}</span>
                  <span className="font-medium text-ink">{price}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-sm font-semibold text-ink mb-2 uppercase tracking-wide">Tellimuse jälgimine</h2>
            <p>
              Pärast kauba saatmist saadetakse e-kirjaga jälgimislink. Probleemide korral võtke ühendust:{" "}
              <a href="mailto:info@ponnipatrull.ee" className="text-accent underline underline-offset-2 hover:text-accent-hover transition-colors duration-150">
                info@ponnipatrull.ee
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-sm font-semibold text-ink mb-2 uppercase tracking-wide">Pakendi kahjustused</h2>
            <p>
              Palume kaubapaket üle vaadata kohaletoimetamisel. Kahjustuse korral dokumenteerige
              fotodega ja teavitage meid esimesel võimalusel.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
