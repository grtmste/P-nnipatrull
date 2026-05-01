import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kasutustingimused ja garantii",
  description: "Põnnipatrull kasutustingimused ja garantiipoliitika.",
};

export default function KasutustingimisedPage() {
  return (
    <div className="bg-[--bg] min-h-screen">
      <div className="max-w-2xl mx-auto px-4 py-14">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-ink-muted mb-3">Teave</p>
        <h1 className="text-2xl sm:text-3xl font-semibold text-ink tracking-tight mb-10">
          Kasutustingimused ja garantii
        </h1>

        <div className="space-y-8 text-sm text-ink-secondary leading-relaxed">
          <section>
            <h2 className="text-sm font-semibold text-ink mb-2 uppercase tracking-wide">Garantii kestus</h2>
            <p>
              Kõigile meie müüdavatele toodetele kehtib <strong className="text-ink font-medium">12 kuu garantii</strong>{" "}
              ostukuupäevast alates. Garantii katab tootja tootmisvead ja materjalide puudused normaalse
              kasutuse korral.
            </p>
          </section>

          <section>
            <h2 className="text-sm font-semibold text-ink mb-2 uppercase tracking-wide">Garantii ei kehti</h2>
            <ul className="space-y-1.5 pl-4">
              {[
                "Mehaaniliselt kahjustatud toodetele (kukkumine, kokkupõrge)",
                "Veele kokkupuutel tekkinud kahjustused",
                "Vale pinge kasutamisest tekkinud kahjustused",
                "Loata kohandamise katsest tekkinud kahjustused",
                "Normaalne kulumine (rehvid, pidurid jne)",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1.5 w-1 h-1 bg-ink-muted rounded-full shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-sm font-semibold text-ink mb-2 uppercase tracking-wide">Garantiinõude esitamine</h2>
            <p>
              Garantiijuhtumi korral võtke ühendust e-posti teel{" "}
              <a href="mailto:info@ponnipatrull.ee" className="text-accent underline underline-offset-2 hover:text-accent-hover transition-colors duration-150">
                info@ponnipatrull.ee
              </a>{" "}
              ning lisage ostutõend ja kirjeldus probleemist. Vaatame nõude läbi 3 tööpäeva jooksul.
            </p>
          </section>

          <section>
            <h2 className="text-sm font-semibold text-ink mb-2 uppercase tracking-wide">Ohutusreeglid</h2>
            <ul className="space-y-1.5 pl-4">
              {[
                "Sõidukid on mõeldud lastele vanuses 1–8 aastat",
                "Kasutage alati täiskasvanu järelevalve all",
                "Ärge laske sõita liiklusohtlikes kohtades",
                "Laadige akut ainult kaasasoleva laadijaga",
                "Hoidke masinaid kuivas kohas",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1.5 w-1 h-1 bg-ink-muted rounded-full shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-sm font-semibold text-ink mb-2 uppercase tracking-wide">Kasutustingimused</h2>
            <p>
              Veebipoe kasutamisega nõustute meie privaatsuspoliitika ja müügitingimustega. Kõik hinnad
              on esitatud eurodes koos käibemaksuga. Jätame endale õiguse hindu ja tooteid muuta.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
