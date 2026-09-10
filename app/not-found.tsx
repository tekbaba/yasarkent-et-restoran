import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center px-5 text-center">
      <p className="text-[11px] uppercase tracking-[0.38em] text-gold">404</p>
      <h1 className="mt-4 font-display text-5xl text-cream">Sayfa bulunamadı.</h1>
      <Link
        href="/"
        className="mt-8 text-[13px] uppercase tracking-[0.22em] text-cream-muted hover:text-cream"
      >
        Ana sayfaya dön
      </Link>
    </section>
  );
}
