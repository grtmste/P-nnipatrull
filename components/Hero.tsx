"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";

export function Hero() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    el.style.opacity = "0";
    el.style.transform = "translateY(12px)";
    const id = requestAnimationFrame(() => {
      el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    });
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section className="relative overflow-hidden bg-ink min-h-[88vh] flex items-center">
      {/* Background — low opacity editorial image */}
      <div className="absolute inset-0">
        <Image
          src="https://ponnipatrull.ee/wp-content/uploads/2026/01/DSC_5736-768x513.jpg"
          alt=""
          fill
          className="object-cover object-center"
          priority
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-ink/75" />
        {/* subtle vignette */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink/60 via-transparent to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-24 grid lg:grid-cols-2 gap-16 items-center w-full">
        {/* Copy */}
        <div ref={contentRef}>
          {/* Eyebrow */}
          <p className="text-xs font-medium tracking-widest uppercase text-white/50 mb-6">
            Laste elektrisõidukid · Eesti laost
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-[1.07] tracking-tight mb-6 text-balance">
            Premium sõidukid<br />
            <span className="text-white/40">lastele.</span>
          </h1>

          <p className="text-base text-white/60 leading-relaxed mb-10 max-w-md">
            Mercedes, Lamborghini, Can-Am ja rohkem — laias valikus laste
            elektriauto&shy;sid ja ATV-sid. Tarne 1–2 tööpäeva, garantii, varuosad.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link href="/e-pood" className="btn-accent text-sm px-6 py-3">
              Vaata e-poodi
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a
              href="mailto:info@ponnipatrull.ee"
              className="inline-flex items-center gap-2 border border-white/20 text-white/80 text-sm font-medium px-6 py-3 rounded-md hover:bg-white/5 hover:border-white/40 transition-colors duration-150"
            >
              Küsi nõu
            </a>
          </div>

          {/* Micro trust */}
          <div className="flex flex-wrap gap-6 mt-12 pt-8 border-t border-white/10">
            {[
              "Tarne 1–2 tööpäeva",
              "12 kuu garantii",
              "Varuosad laos",
              "Järelmaks 0%",
            ].map((t) => (
              <span key={t} className="text-xs text-white/40 tracking-wide">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Feature card */}
        <div className="hidden lg:block">
          <div className="relative overflow-hidden rounded-lg shadow-[0_24px_64px_rgb(0,0,0,0.5)]">
            <Image
              src="https://ponnipatrull.ee/wp-content/uploads/2026/01/DSC_5883-768x513.jpg"
              alt="Laste elektriauto Mercedes G63"
              width={768}
              height={513}
              className="w-full h-auto object-cover"
              priority
            />
            {/* Overlay card */}
            <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/70 to-transparent">
              <p className="text-xs text-white/60 uppercase tracking-wider mb-1">Laos</p>
              <p className="text-white font-medium text-sm">Mercedes G63 AMG XXL</p>
              <p className="text-white text-xl font-semibold mt-0.5">750,00 €</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
