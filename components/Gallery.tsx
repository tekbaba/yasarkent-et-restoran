"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Plus, X } from "lucide-react";
import { galleryImages } from "@/data/gallery";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SocialLinks } from "@/components/SocialLinks";
import { cn } from "@/lib/utils";

interface GalleryProps {
  compact?: boolean;
}

export function Gallery({ compact = true }: GalleryProps) {
  const images = compact ? galleryImages.slice(0, 8) : galleryImages;
  const [active, setActive] = useState<string | null>(null);
  const selected = images.find((image) => image.id === active);

  useEffect(() => {
    if (!active) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <section id="galeri" className="bg-ink py-24 md:py-32">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
        <Reveal>
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Galeri"
              title="Kemalpaşa Sofrasından Kareler."
              description="Izgara, kebap, pide ve tatlı. Yaşarkent Et Restoran, Kemalpaşa / İzmir."
            />
            <SocialLinks />
          </div>
        </Reveal>

        <div className="mt-14 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {images.map((image, index) => (
            <Reveal key={image.id} delay={index * 0.05} className="mb-4 break-inside-avoid">
              <button
                type="button"
                onClick={() => setActive(image.id)}
                className="group relative block w-full overflow-hidden"
                aria-label={`${image.alt} — büyüt`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={1200}
                  height={image.span === "tall" ? 1500 : image.span === "wide" ? 900 : 1100}
                  quality={90}
                  className={cn(
                    "w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]",
                    image.span === "tall" ? "aspect-[3/4]" : "aspect-[4/3]",
                  )}
                />
                <span className="absolute inset-0 flex items-center justify-center bg-ink/0 transition-colors duration-500 group-hover:bg-ink/45">
                  <Plus className="size-8 text-cream opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {selected ? (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={selected.alt}
        >
          <button
            type="button"
            className="absolute inset-0"
            aria-label="Galeriyi kapat"
            onClick={() => setActive(null)}
          />
          <button
            type="button"
            className="absolute right-5 top-5 z-10 text-cream"
            onClick={() => setActive(null)}
            aria-label="Kapat"
          >
            <X className="size-7" />
          </button>
          <div className="relative z-10 max-h-[86vh] w-full max-w-5xl">
            <Image
              src={selected.src}
              alt={selected.alt}
              width={1600}
              height={1100}
              quality={90}
              className="mx-auto max-h-[86vh] w-auto object-contain"
            />
          </div>
        </div>
      ) : null}
    </section>
  );
}
