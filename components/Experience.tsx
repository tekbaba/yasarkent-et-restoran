import { Flame, Heart, Wine } from "lucide-react";
import { experienceItems, type ExperienceItem } from "@/data/experience";
import { Reveal } from "@/components/ui/Reveal";

const icons = {
  flame: Flame,
  wine: Wine,
  heart: Heart,
} as const;

export function Experience() {
  return (
    <section className="relative overflow-hidden bg-charcoal py-24 md:py-32 lg:py-40">
      <div className="pointer-events-none absolute inset-0 opacity-[0.07]">
        <div className="absolute -left-24 top-10 font-display text-[9rem] leading-none text-cream lg:text-[14rem]">
          DENEYİM
        </div>
      </div>

      <div className="relative mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
        <Reveal>
          <p className="mb-4 text-[11px] uppercase tracking-[0.38em] text-gold">
            Restoran Deneyimi
          </p>
          <h2 className="max-w-4xl font-display text-4xl font-medium leading-[1.08] text-cream sm:text-6xl lg:text-7xl">
            Kemalpaşa’da Bir Sofra, Bir Deneyim.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-px bg-line md:grid-cols-3">
          {experienceItems.map((item, index) => (
            <ExperienceCard key={item.id} item={item} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ExperienceCardProps {
  item: ExperienceItem;
  delay: number;
}

function ExperienceCard({ item, delay }: ExperienceCardProps) {
  const Icon = icons[item.icon];

  return (
    <Reveal delay={delay}>
      <article className="h-full bg-charcoal px-8 py-12">
        <Icon className="size-7 text-gold" aria-hidden />
        <h3 className="mt-8 font-display text-3xl text-cream">{item.title}</h3>
        <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream-muted">
          {item.description}
        </p>
      </article>
    </Reveal>
  );
}
