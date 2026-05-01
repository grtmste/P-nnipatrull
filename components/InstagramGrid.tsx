import Image from "next/image";

const posts = [
  {
    src: "https://ponnipatrull.ee/wp-content/uploads/sb-instagram-feed-images/ponnipatrull.webp",
    alt: "Põnnipatrull Instagram",
  },
  {
    src: "https://ponnipatrull.ee/wp-content/uploads/sb-instagram-feed-images/660112453_1466229444999489_8700665430137053116_nlow.webp",
    alt: "Instagram",
  },
  {
    src: "https://ponnipatrull.ee/wp-content/uploads/sb-instagram-feed-images/657821808_1186468453416316_2070812729512634713_nlow.webp",
    alt: "Instagram",
  },
  {
    src: "https://ponnipatrull.ee/wp-content/uploads/sb-instagram-feed-images/625052810_17973383183993303_6457048967078108925_nlow.webp",
    alt: "Instagram",
  },
  {
    src: "https://ponnipatrull.ee/wp-content/uploads/sb-instagram-feed-images/619186959_17972363309993303_2317836193690706103_nlow.webp",
    alt: "Instagram",
  },
  {
    src: "https://ponnipatrull.ee/wp-content/uploads/sb-instagram-feed-images/616269427_17971538639993303_2789406776852632881_nlow.webp",
    alt: "Instagram",
  },
];

export function InstagramGrid() {
  return (
    <section className="py-16 bg-surface border-t border-ink-faint">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-end justify-between mb-8 gap-4">
          <div>
            <p className="text-xs font-medium tracking-widest uppercase text-ink-muted mb-2">
              Sotsiaalmeedia
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-ink tracking-tight">
              @ponnipatrull
            </h2>
          </div>
          <a
            href="https://www.instagram.com/ponnipatrull/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-accent hover:text-accent-hover transition-colors duration-150 flex items-center gap-1.5 shrink-0"
          >
            Jälgi Instagramis
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-3 lg:grid-cols-6 gap-px bg-ink-faint border border-ink-faint">
          {posts.map((post, i) => (
            <a
              key={i}
              href="https://www.instagram.com/ponnipatrull/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden bg-surface-subtle block"
              aria-label={post.alt}
            >
              <Image
                src={post.src}
                alt={post.alt}
                fill
                className="object-cover group-hover:scale-[1.04] transition-transform duration-300"
                sizes="(max-width: 640px) 33vw, (max-width: 1024px) 33vw, 16vw"
              />
              <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/20 transition-colors duration-200" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
