import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 bg-[--bg]">
      <div>
        <p className="text-6xl font-light text-ink-muted mb-6">404</p>
        <h1 className="text-xl font-semibold text-ink tracking-tight mb-2">
          Lehte ei leitud
        </h1>
        <p className="text-sm text-ink-secondary mb-8 max-w-xs">
          Otsitav leht pole saadaval. Proovi navigeerida avaleheküljele või e-poodi.
        </p>
        <div className="flex gap-2">
          <Link href="/" className="btn-accent">Avaleht</Link>
          <Link href="/e-pood" className="btn-ghost">E-pood</Link>
        </div>
      </div>
    </div>
  );
}
