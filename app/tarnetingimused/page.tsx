import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tarnetingimused",
  description: "Põnnipatrull tarnetingimused – kohaletoimetamine, tarneajad ja hinnad.",
};

export default function TarnetingimisedPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-8">Tarnetingimused</h1>

      <div className="prose prose-neutral max-w-none space-y-6 text-neutral-700 leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-neutral-900 mb-3">Tarneaeg</h2>
          <p>
            Laos olevad tooted toimetatakse kohale <strong>1–2 tööpäeva</strong> jooksul pärast
            makse laekumist. Tellimused, mis esitatakse tööpäeviti enne kella 14:00, saadetakse
            sama päeva jooksul.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-neutral-900 mb-3">Tarnepiirkonnad</h2>
          <p>
            Toimetame kauba kätte üle terve Eesti. Kasutame <strong>DPD</strong> ja{" "}
            <strong>Omniva</strong> kullerteenust ning pakiautomaate.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-neutral-900 mb-3">Tarnehinnad</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Kullertarne kodule/kontorile: <strong>9,90 €</strong></li>
            <li>Pakiautomaat (Omniva / DPD): <strong>4,90 €</strong></li>
            <li>Tasuta tarne ostude puhul alates <strong>500 €</strong></li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-neutral-900 mb-3">Tellimuse jälgimine</h2>
          <p>
            Pärast kauba saatmist saadetakse e-kirjaga jälgimislink. Pakiga seotud probleemide
            korral võtke ühendust meie klienditoega aadressil{" "}
            <a href="mailto:info@ponnipatrull.ee" className="text-orange-600 underline">
              info@ponnipatrull.ee
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-neutral-900 mb-3">Pakendi kahjustused</h2>
          <p>
            Palume kaubapaket üle vaadata kohe kohaletoimetamisel. Kui pakend on kahjustatud,
            dokumenteerige see fotodega ja teavitage meid esimesel võimalusel.
          </p>
        </section>
      </div>
    </div>
  );
}
