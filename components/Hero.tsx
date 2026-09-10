import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="grain relative isolate flex min-h-[100svh] items-end overflow-hidden">
      <link
        rel="preload"
        as="image"
        type="image/webp"
        href="/images/hero-800.webp"
        imageSrcSet="/images/hero-800.webp 800w, /images/hero-1600.webp 1600w"
        imageSizes="(max-width: 768px) 100vw, 1600px"
        fetchPriority="high"
      />
      <div className="absolute inset-0">
        <picture>
          <source
            type="image/webp"
            srcSet="/images/hero-800.webp 800w, /images/hero-1600.webp 1600w"
            sizes="(max-width: 768px) 100vw, 1600px"
          />
          <img
            src="/images/hero-800.webp"
            alt="Kemalpaşa Yaşarkent Et Restoran ızgara et"
            width={1600}
            height={1201}
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </picture>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/25" />
      <div className="absolute inset-0 bg-ink/20" />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 pb-28 pt-40 md:px-8 lg:px-12 lg:pb-32">
        <p className="mb-6 inline-flex border border-gold/40 px-4 py-1.5 text-[10px] uppercase tracking-[0.42em] text-gold">
          Kemalpaşa, İzmir
        </p>

        <h1 className="max-w-4xl font-display text-5xl font-medium leading-[1.05] text-cream sm:text-6xl md:text-7xl lg:text-8xl">
          Kemalpaşa’da Gerçek Et Lezzeti.
        </h1>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-cream-muted sm:text-lg">
          İzmir Kemalpaşa’da ızgara, kebap, pide ve lahmacun. Sekiz Eylül’de
          Yaşarkent sofrası.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button href="/#rezervasyon" showArrow>
            Masa Rezervasyonu
          </Button>
          <Button href="/menu" variant="ghost">
            Menüyü Keşfet
          </Button>
        </div>
      </div>
    </section>
  );
}
