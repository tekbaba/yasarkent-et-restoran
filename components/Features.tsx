import Image from "next/image";
import { features } from "@/data/features";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Features() {
  return (
    <section className="bg-ink py-24 md:py-32">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
        <Reveal>
            <SectionHeading
              eyebrow="Et Kültürü"
              title="Kemalpaşa’da İyi Et Tesadüf Değildir."
              description="İzmir Kemalpaşa’da seçim, hazırlık ve ateş. Lezzet bu üçünün bir araya gelmesiyle doğar."
            />
        </Reveal>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Reveal key={feature.id} delay={index * 0.08}>
              <article className="group overflow-hidden rounded-sm border border-line bg-charcoal transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/40 hover:shadow-lift">
                <ImageReveal className="aspect-[4/5]">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    quality={90}
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  />
                </ImageReveal>
                <div className="p-6">
                  <h3 className="font-display text-2xl text-cream">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-cream-muted">
                    {feature.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
