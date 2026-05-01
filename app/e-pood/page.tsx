import type { Metadata } from "next";
import { ProductGrid } from "@/components/ProductGrid";
import { TrustBar } from "@/components/TrustBar";
import { Newsletter } from "@/components/Newsletter";

export const metadata: Metadata = {
  title: "E-pood – laste elektriauto&shy;d ja ATV-d",
  description:
    "Vaata meie täielikku valikut laste elektriautosid, ATV-sid ja traktoreid. Kiire tarne, garantii, varuosad laos.",
};

export default function EPoodPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-neutral-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">E-pood</h1>
          <p className="text-neutral-300 text-lg max-w-xl mx-auto">
            Lai valik premium laste elektriauto&shy;sid, ATV-sid ja traktoreid.
            Kõik tooted laos ja kiirelt tarnitavad.
          </p>
        </div>
      </section>

      <TrustBar />

      {/* Filter badges (static UI) */}
      <section className="bg-white border-b border-neutral-100 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-2">
            {["Kõik", "Elektriauto&shy;d", "ATV / Quad", "Traktor", "Sooduspakkumised", "Uued tooted"].map(
              (filter, i) => (
                <button
                  key={filter}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    i === 0
                      ? "bg-orange-600 text-white"
                      : "bg-neutral-100 text-neutral-700 hover:bg-orange-50 hover:text-orange-600"
                  }`}
                  dangerouslySetInnerHTML={{ __html: filter }}
                />
              )
            )}
          </div>
        </div>
      </section>

      <ProductGrid title="Kõik tooted" subtitle="Vaata meie täielikku valikut" />
      <Newsletter />
    </>
  );
}
