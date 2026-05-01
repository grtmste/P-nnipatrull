import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kasutustingimused ja garantii",
  description: "Põnnipatrull kasutustingimused ja garantiipoliitika.",
};

export default function KasutustingimisedPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-8">
        Kasutustingimused ja garantii
      </h1>

      <div className="space-y-8 text-neutral-700 leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-neutral-900 mb-3">Garantii kestus</h2>
          <p>
            Kõigile meie müüdavatele toodetele kehtib <strong>12 kuu garantii</strong> ostukuupäevast
            alates. Garantii katab tootja tootmisvead ja materjalide puudused normaalse kasutuse korral.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-neutral-900 mb-3">Garantii ei kehti</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Mehaaniliselt kahjustatud toodetele (kukkumine, kokkupõrge)</li>
            <li>Veele kokkupuutel tekkinud kahjustused (ei ole veekindlad)</li>
            <li>Vale pinge kasutamisest tekkinud kahjustused</li>
            <li>Kohandamise või parandamise katsest tekkinud kahjustused</li>
            <li>Normaalne kulumine (rehvid, pidurid jne)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-neutral-900 mb-3">Garantiinõude esitamine</h2>
          <p>
            Garantiijuhtumi korral võtke ühendust meie klienditoega e-posti teel{" "}
            <a href="mailto:info@ponnipatrull.ee" className="text-orange-600 underline">
              info@ponnipatrull.ee
            </a>{" "}
            ning lisage ostutõend ja kirjeldus probleemist. Vaatame nõude läbi 3 tööpäeva jooksul.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-neutral-900 mb-3">Ohutusreeglid</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Sõidukid on mõeldud väikelastele vanuses 1–8 aastat</li>
            <li>Kasutage alati järelevalve all</li>
            <li>Ärge laske sõita liiklusohtlikes kohtades</li>
            <li>Laadige akut ainult kaasasoleva laadijaga</li>
            <li>Hoidke masinaid kuivas kohas</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-neutral-900 mb-3">Kasutustingimused</h2>
          <p>
            Veebipoe kasutamisega nõustute meie privaatsuspoliitika ja müügitingimustega. Kõik
            hinnad on esitatud eurodes koos käibemaksuga. Jätame endale õiguse hindu ja tooteid
            muuta ilma ette teatamata.
          </p>
        </section>
      </div>
    </div>
  );
}
