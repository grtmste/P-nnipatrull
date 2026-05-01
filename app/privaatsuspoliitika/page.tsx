import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privaatsuspoliitika",
  description: "Põnnipatrull privaatsuspoliitika – kuidas me teie andmeid kasutame.",
};

export default function PrivaatsuspoliitikPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-8">
        Privaatsuspoliitika
      </h1>

      <div className="space-y-8 text-neutral-700 leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-neutral-900 mb-3">Kogutavad andmed</h2>
          <p>
            Kogume ainult andmeid, mis on vajalikud tellimuse täitmiseks: nimi, aadress,
            telefon, e-post. Muid isikuandmeid ei koguta ilma teie nõusolekuta.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-neutral-900 mb-3">Andmete kasutamine</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Tellimuste töötlemine ja tarne</li>
            <li>Klienditeenindus ja garantiijuhtumid</li>
            <li>Uudiskirja saatmine (ainult nõusolekul)</li>
            <li>Seadusest tulenevad kohustused</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-neutral-900 mb-3">Küpsised</h2>
          <p>
            Kasutame küpsiseid veebipoe toimimiseks ja kasutuskogemuse parandamiseks.
            Analüütilisi küpsiseid kasutame ainult anonüümsete külastusstatistikate
            kogumiseks.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-neutral-900 mb-3">Andmete jagamine</h2>
          <p>
            Me ei müü ega jaga teie isikuandmeid kolmandatele osapooltele, välja arvatud
            tarneettevõtted (DPD, Omniva) ja makseteenuse pakkujad, kelle osalemine on
            vajalik tellimuse täitmiseks.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-neutral-900 mb-3">Teie õigused</h2>
          <p>
            Teil on õigus tutvuda oma andmetega, neid parandada või kustutada. Võtke
            ühendust aadressil{" "}
            <a href="mailto:info@ponnipatrull.ee" className="text-orange-600 underline">
              info@ponnipatrull.ee
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-neutral-900 mb-3">Andmete säilitamine</h2>
          <p>
            Säilitame isikuandmeid nii kaua, kui see on vajalik teenuste osutamiseks või
            seadusest tulenevate kohustuste täitmiseks – üldjuhul kuni 7 aastat.
          </p>
        </section>
      </div>
    </div>
  );
}
