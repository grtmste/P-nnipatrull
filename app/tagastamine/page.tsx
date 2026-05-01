import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tagastamine",
  description: "Põnnipatrull tagastamispoliitika – 14 päeva tagastusõigus.",
};

export default function TagastaminePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-8">
        Tagastamine
      </h1>

      <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6 mb-8">
        <div className="flex items-start gap-3">
          <span className="text-2xl">↩️</span>
          <div>
            <h2 className="font-semibold text-orange-900 mb-1">14 päeva tagastusõigus</h2>
            <p className="text-orange-800 text-sm">
              Vastavalt Euroopa Liidu direktiivile on teil õigus toode 14 päeva jooksul tagastada
              põhjust esitamata.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-8 text-neutral-700 leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-neutral-900 mb-3">Tagastuse tingimused</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Toode peab olema <strong>kasutamata ja originaalpakendis</strong></li>
            <li>Kõik komplektis olevad osad peavad olema alles</li>
            <li>Tagastus tuleb algatada 14 päeva jooksul kauba kättesaamisest</li>
            <li>Tagastuskulud kannab ostja (v.a toote vea korral)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-neutral-900 mb-3">Tagastuse protsess</h2>
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              Saatke e-kiri aadressile{" "}
              <a href="mailto:info@ponnipatrull.ee" className="text-orange-600 underline">
                info@ponnipatrull.ee
              </a>{" "}
              teemaga &ldquo;Tagastus [tellimuse number]&rdquo;
            </li>
            <li>Meie tiim kinnitab tagastuse ja saadab juhised 1–2 tööpäeva jooksul</li>
            <li>Pakkige toode hoolikalt originaalpakendisse</li>
            <li>Saatke toode meie poolt saadetud aadressile</li>
            <li>Tagastame raha 14 päeva jooksul pärast kauba saamist</li>
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-neutral-900 mb-3">Tagastust ei aktsepteerita</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Kasutatud või kahjustatud tooted</li>
            <li>Tooted ilma originaalpakendita</li>
            <li>Eritellimuse alusel toodetud tooted</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-neutral-900 mb-3">Defektsed tooted</h2>
          <p>
            Toote vea korral tagastame kauba kulud täies ulatuses. Pildistage defekt ja
            saatke meile e-kirjaga. Asendame toote või tagastame kogu summa.
          </p>
        </section>
      </div>
    </div>
  );
}
