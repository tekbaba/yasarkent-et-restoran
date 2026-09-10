"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { featuredMenuItems, menuCategories, menuItems, menuNote, type MenuCategoryId } from "@/data/menu";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

interface MenuSectionProps {
  heading?: string;
  showFilters?: boolean;
  featuredOnly?: boolean;
}

function formatPrice(price: number | null, category?: MenuCategoryId): string | null {
  if (price === null) return null;
  const formatted = new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
    maximumFractionDigits: 0,
  }).format(price);
  return category === "et-kg" ? `${formatted} / kg` : formatted;
}

export function MenuSection({
  heading = "Menüden Seçtiklerimiz",
  showFilters = false,
  featuredOnly = true,
}: MenuSectionProps) {
  const [active, setActive] = useState<MenuCategoryId | "all">("all");

  const items = useMemo(() => {
    const source = featuredOnly ? featuredMenuItems : menuItems;
    if (active === "all") return source;
    return source.filter((item) => item.category === active);
  }, [active, featuredOnly]);

  return (
    <section id="menu" className="bg-ink-soft py-24 md:py-32">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
        <Reveal>
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow="Menü"
              title={heading}
              description="Kemalpaşa’da çorba, ızgara, kebap, pide ve tatlı. Güncel fiyatlarla resmi menümüz."
            />
            <div className="flex flex-wrap gap-3 self-start lg:self-auto">
              {featuredOnly ? (
                <Button href="/menu" variant="outline" showArrow>
                  Tüm Menüyü Gör
                </Button>
              ) : null}
              <Button
                href={siteConfig.menuPdf}
                variant={featuredOnly ? "ghost" : "outline"}
                download="yasarkent-menu.pdf"
              >
                PDF İndir
              </Button>
            </div>
          </div>
        </Reveal>

        {showFilters ? (
          <div className="mt-10 flex gap-2 overflow-x-auto no-scrollbar pb-2">
            <FilterChip
              label="Tümü"
              active={active === "all"}
              onClick={() => setActive("all")}
            />
            {menuCategories.map((category) => (
              <FilterChip
                key={category.id}
                label={category.label}
                active={active === category.id}
                onClick={() => setActive(category.id)}
              />
            ))}
          </div>
        ) : null}

        {showFilters && !featuredOnly ? (
          <p className="mt-6 text-sm text-cream-muted">{menuNote}</p>
        ) : null}

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <Reveal key={item.id} delay={Math.min(index * 0.03, 0.24)}>
              <article className="group overflow-hidden border border-line bg-charcoal transition-all duration-500 hover:-translate-y-1 hover:border-gold/35 hover:shadow-lift">
                {item.image ? (
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      quality={90}
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                    />
                  </div>
                ) : null}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display text-2xl text-cream">{item.name}</h3>
                    {formatPrice(item.price, item.category) ? (
                      <span className="shrink-0 text-sm tracking-wide text-gold">
                        {formatPrice(item.price, item.category)}
                      </span>
                    ) : null}
                  </div>
                  {item.description ? (
                    <p className="mt-3 text-sm leading-relaxed text-cream-muted">
                      {item.description}
                    </p>
                  ) : null}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {items.length === 0 ? (
          <p className="mt-12 text-center text-cream-muted">
            Bu kategoride henüz ürün eklenmedi.
          </p>
        ) : null}
      </div>
    </section>
  );
}

interface FilterChipProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

function FilterChip({ label, active, onClick }: FilterChipProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "shrink-0 border px-4 py-2 text-[11px] uppercase tracking-[0.22em] transition-colors duration-300",
        active
          ? "border-gold bg-gold/10 text-gold"
          : "border-line text-cream-muted hover:border-cream/30 hover:text-cream",
      )}
    >
      {label}
    </button>
  );
}
