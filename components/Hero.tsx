"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      el.style.opacity = "1";
      return;
    }
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    const raf = requestAnimationFrame(() => {
      el.style.transition = "opacity 0.7s ease, transform 0.7s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white min-h-[90vh] flex items-center">
      {/* Background image overlay */}
      <div className="absolute inset-0 opacity-20">
        <Image
          src="https://ponnipatrull.ee/wp-content/uploads/2026/01/DSC_5736-768x513.jpg"
          alt=""
          fill
          className="object-cover"
          priority
          aria-hidden="true"
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/90 via-neutral-900/60 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 py-20 grid lg:grid-cols-2 gap-12 items-center w-full">
        {/* Text */}
        <div ref={heroRef}>
          <div className="inline-flex items-center gap-2 bg-orange-600/20 border border-orange-500/30 rounded-full px-4 py-1.5 text-orange-300 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
            Laos &amp; kiirelt tarnitav
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-balance mb-6">
            Laste{" "}
            <span className="text-orange-400">elektriauto&shy;de</span> ekspert
            Eestis
          </h1>

          <p className="text-lg text-neutral-300 leading-relaxed mb-8 max-w-lg">
            Mercedes, Lamborghini, Can-Am, Willys – laias valikus premium
            elektriauto&shy;sid, ATV-sid ja traktoreid lastele. Tarne 1–2
            tööpäeva, garantii ja varuosad.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/e-pood"
              className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-500 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-200 hover:shadow-lg hover:shadow-orange-500/25 hover:-translate-y-0.5"
            >
              Vaata e-poodi
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
            <a
              href="/#kontakt"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-200 backdrop-blur-sm"
            >
              Küsi nõu
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-6 mt-10 pt-8 border-t border-white/10">
            {[
              { icon: "🚚", text: "Tarne 1–2 tp" },
              { icon: "🛡️", text: "12 kuu garantii" },
              { icon: "🔧", text: "Varuosad laos" },
              { icon: "💳", text: "Järelmaks 0%" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2 text-sm text-neutral-300">
                <span className="text-base">{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Hero image */}
        <div className="hidden lg:block relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/50">
            <Image
              src="https://ponnipatrull.ee/wp-content/uploads/2026/01/DSC_5883-768x513.jpg"
              alt="Laste elektriauto Mercedes G63"
              width={768}
              height={513}
              className="w-full h-auto object-cover"
              priority
            />
            {/* Floating badge */}
            <div className="absolute top-4 left-4 bg-orange-600 text-white text-sm font-bold px-4 py-2 rounded-xl shadow-lg">
              LAOS
            </div>
            <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur rounded-2xl px-4 py-3 shadow-xl">
              <p className="text-xs text-neutral-500 font-medium">alates</p>
              <p className="text-2xl font-bold text-neutral-900">265 €</p>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-500/20 rounded-full blur-xl" />
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-orange-600/10 rounded-full blur-2xl" />
        </div>
      </div>
    </section>
  );
}
