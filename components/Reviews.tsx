import { Star } from "lucide-react";
import { reviews } from "@/data/reviews";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Reviews() {
  return (
    <section className="bg-ink-soft py-24 md:py-32">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Sosyal Kanıt"
            title="Misafirlerimiz Ne Diyor?"
            className="mx-auto"
          />
        </Reveal>

        {reviews.length === 0 ? (
          <Reveal delay={0.1}>
            <div className="mx-auto mt-14 max-w-2xl border border-dashed border-line px-8 py-16 text-center">
              <p className="font-display text-3xl text-cream">Yorumlar yakında.</p>
              <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-cream-muted">
                Misafirlerimizin gerçek Google yorumları burada yer alacak.
              </p>
            </div>
          </Reveal>
        ) : (
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {reviews.map((review, index) => (
              <Reveal key={review.id} delay={index * 0.08}>
                <article className="h-full border border-line bg-charcoal p-7">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1" aria-label={`${review.rating} yıldız`}>
                      {Array.from({ length: review.rating }).map((_, star) => (
                        <Star key={star} className="size-4 fill-gold text-gold" />
                      ))}
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-cream-muted">
                      Google
                    </span>
                  </div>
                  <p className="mt-6 text-sm leading-relaxed text-cream-muted">
                    “{review.quote}”
                  </p>
                  <p className="mt-6 text-sm tracking-wide text-cream">{review.name}</p>
                </article>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
