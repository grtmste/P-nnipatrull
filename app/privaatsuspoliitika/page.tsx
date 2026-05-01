import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privaatsuspoliitika",
  description: "Põnnipatrull privaatsuspoliitika – kuidas me teie andmeid kasutame.",
};

export default function PrivaatsuspoliitikPage() {
  return (
    <div className="bg-[--bg] min-h-screen">
      <div className="max-w-2xl mx-auto px-4 py-14">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-ink-muted mb-3">Teave</p>
        <h1 className="text-2xl sm:text-3xl font-semibold text-ink tracking-tight mb-10">
          Privaatsuspoliitika
        </h1>

        <div className="space-y-8 text-sm text-ink-secondary leading-relaxed">
          {[
            {
              title: "Kogutavad andmed",
              body: "Kogume ainult andmeid, mis on vajalikud tellimuse täitmiseks: nimi, aadress, telefon, e-post. Muid isikuandmeid ei koguta ilma teie nõusolekuta.",
            },
            {
              title: "Andmete kasutamine",
              list: [
                "Tellimuste töötlemine ja tarne",
                "Klienditeenindus ja garantiijuhtumid",
                "Uudiskirja saatmine (ainult nõusolekul)",
                "Seadusest tulenevad kohustused",
              ],
            },
            {
              title: "Küpsised",
              body: "Kasutame küpsiseid veebipoe toimimiseks. Analüütilisi küpsiseid kasutame ainult anonüümsete külastusstatistikate kogumiseks.",
            },
            {
              title: "Andmete jagamine",
              body: "Me ei müü ega jaga teie isikuandmeid kolmandatele osapooltele, välja arvatud tarneettevõtted (DPD, Omniva) ja makseteenuse pakkujad.",
            },
            {
              title: "Teie õigused",
              body: "Teil on õigus tutvuda, parandada või kustutada oma andmeid. Võtke ühendust: info@ponnipatrull.ee.",
            },
            {
              title: "Andmete säilitamine",
              body: "Säilitame isikuandmeid nii kaua, kui see on vajalik — üldjuhul kuni 7 aastat.",
            },
          ].map((s) => (
            <section key={s.title}>
              <h2 className="text-sm font-semibold text-ink mb-2 uppercase tracking-wide">{s.title}</h2>
              {s.body && <p>{s.body}</p>}
              {s.list && (
                <ul className="space-y-1.5 pl-4">
                  {s.list.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1.5 w-1 h-1 bg-ink-muted rounded-full shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
