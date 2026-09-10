import Image from "next/image";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description?: string;
  image: string;
  className?: string;
}

export function PageHero({ eyebrow, title, description, image, className }: PageHeroProps) {
  return (
    <section className={cn("grain relative isolate min-h-[48vh] overflow-hidden pt-20", className)}>
      <Image
        src={image}
        alt={title}
        fill
        priority
        quality={90}
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/30" />
      <div className="relative mx-auto flex min-h-[48vh] max-w-[1440px] items-end px-5 pb-16 md:px-8 lg:px-12">
        <div>
          <p className="mb-4 text-[11px] uppercase tracking-[0.38em] text-gold">{eyebrow}</p>
          <h1 className="max-w-4xl font-display text-5xl font-medium text-cream sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          {description ? (
            <p className="mt-5 max-w-xl text-cream-muted">{description}</p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
