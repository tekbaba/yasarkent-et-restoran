import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(align === "center" && "mx-auto max-w-3xl text-center", className)}>
      {eyebrow ? (
        <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.38em] text-gold">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-4xl font-medium leading-[1.1] text-cream sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-6 max-w-xl text-base leading-relaxed text-cream-muted sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
