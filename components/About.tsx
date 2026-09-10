import Image from "next/image";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

interface AboutProps {
  showCta?: boolean;
}

export function About({ showCta = true }: AboutProps) {
  return (
    <section id="hakkimizda" className="bg-ink-soft py-24 md:py-32 lg:py-40">
      <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-5 md:px-8 lg:grid-cols-12 lg:gap-16 lg:px-12">
        <div className="lg:col-span-6">
          <ImageReveal className="aspect-[4/5] rounded-sm lg:aspect-[5/6]">
            <Image
              src="/images/section-about.jpg"
              alt="Kemalpaşa Yaşarkent ızgara kebap şiş"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={90}
              className="object-cover"
            />
          </ImageReveal>
        </div>

        <div className="lg:col-span-6">
          <Reveal>
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.38em] text-gold">
              Bizi Tanıyın
            </p>
            <h2 className="font-display text-4xl font-medium leading-[1.1] text-cream sm:text-5xl lg:text-[3.4rem]">
              Kemalpaşa’nın Et Sofrası.
            </h2>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-cream-muted sm:text-lg">
              <p>
                Yaşarkent Et Restoran, İzmir Kemalpaşa’da ızgara ve kebap
                arayanlar için kurulmuş bir et sofrasıdır. Et seçiminden pişirme
                anına kadar her aşamada aynı özeni gösteririz.
              </p>
              <p>
                Pide, lahmacun, kiremit ve kebap; Sekiz Eylül Mahallesi’ndeki
                soframızda aile masaları ve yol üstü molalar için hazırlanır.
              </p>
              <p>
                Kemalpaşa’da lezzet kadar misafir memnuniyeti de vazgeçilmezdir.
              </p>
            </div>
            {showCta ? (
              <div className="mt-10">
                <Button href="/hakkimizda" variant="outline" showArrow>
                  Hikayemizi Keşfet
                </Button>
              </div>
            ) : null}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
