import type { Metadata } from "next";
import { ProductGrid } from "@/components/ProductGrid";
import { TrustBar } from "@/components/TrustBar";
import { Newsletter } from "@/components/Newsletter";

export const metadata: Metadata = {
  title: "E-pood – laste elektriauto&shy;d ja ATV-d",
  description:
    "Vaata meie täielikku valikut laste elektriautosid, ATV-sid ja traktoreid. Kiire tarne, garantii, varuosad laos.",
};

const filters = ["Kõik", "Elektriauto&shy;d", "ATV / Quad", "Traktor", "Sooduspakkumised", "Uued"];

export default function EPoodPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-ink text-white py-14">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-white/30 mb-3">
            Põnnipatrull
          </p>
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-3">E-pood</h1>
          <p className="text-sm text-white/50 max-w-md leading-relaxed">
            Premium laste elektriauto&shy;d, ATV-d ja traktorid. Kõik tooted laos
            ja kiirelt tarnitavad.
          </p>
        </div>
      </section>

      <TrustBar />

      {/* Filter bar */}
      <section className="bg-surface border-b border-ink-faint py-3">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center gap-1.5">
          <span className="text-xs text-ink-muted mr-2">Filter:</span>
          {filters.map((f, i) => (
            <button
              key={f}
              className={`text-xs font-medium px-3 py-1.5 rounded-md border transition-colors duration-150 ${
                i === 0
                  ? "bg-ink text-white border-ink"
                  : "bg-surface text-ink-secondary border-ink-faint hover:border-ink/30 hover:text-ink"
              }`}
              dangerouslySetInnerHTML={{ __html: f }}
            />
          ))}
        </div>
      </section>

      <ProductGrid title="Kõik tooted" />
      <Newsletter />
    </>
  );
}
