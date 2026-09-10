import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { Reveal } from "@/components/ui/Reveal";

export function SignatureDish() {
  return (
    <section className="relative isolate overflow-hidden bg-ink">
      <div className="mx-auto grid min-h-[80vh] max-w-[1440px] lg:grid-cols-12">
        <div className="relative min-h-[50vh] lg:col-span-7 lg:min-h-[80vh]">
          <ImageReveal className="absolute inset-0 h-full">
            <Image
              src="/images/section-signature.jpg"
              alt="Kemalpaşa Yaşarkent ızgara et"
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              quality={90}
              className="object-cover"
            />
          </ImageReveal>
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-ink/40" />
        </div>

        <div className="relative z-10 flex items-center px-5 py-16 md:px-8 lg:col-span-5 lg:px-12">
          <Reveal>
            <p className="mb-4 text-[11px] uppercase tracking-[0.38em] text-gold">
              Kemalpaşa’nın İmza Lezzetleri
            </p>
            <h2 className="font-display text-5xl font-medium leading-[1.05] text-cream sm:text-6xl">
              Ateşten Sofraya.
            </h2>
            <p className="mt-8 max-w-md text-base leading-relaxed text-cream-muted sm:text-lg">
              Kemalpaşa’da ızgara yalnızca bir pişirme yöntemi değil; kebap ve
              etin karakterini ortaya çıkaran bir dildir.
            </p>
            <div className="mt-10">
              <Button href="/menu" variant="outline" showArrow>
                Menüye Göz At
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
