import Image from "next/image";
import { Instagram as InstagramIcon, Play } from "lucide-react";
import { instagramPosts } from "@/data/instagram";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function Instagram() {
  const profileUrl = siteConfig.contact.instagramUrl;
  const handle = siteConfig.contact.instagramHandle;

  return (
    <section className="bg-ink py-24 md:py-32">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
        <Reveal>
          <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-[11px] uppercase tracking-[0.38em] text-gold">
                Instagram
              </p>
              <h2 className="font-display text-4xl text-cream sm:text-5xl">
                {handle ? `@${handle}` : "Instagram’dan kareler"}
              </h2>
            </div>
            {profileUrl ? (
              <Button href={profileUrl} variant="outline" external>
                Takip et
              </Button>
            ) : null}
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:gap-4">
          {instagramPosts.map((post, index) => (
            <Reveal key={post.id} delay={index * 0.05}>
              <a
                href={post.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${post.alt} — Instagram’da aç`}
                className="group relative block aspect-square overflow-hidden"
              >
                <Image
                  src={post.src}
                  alt={post.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  quality={90}
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                />
                <span className="absolute inset-0 bg-ink/0 transition-colors group-hover:bg-ink/40" />
                {post.isReel ? (
                  <Play
                    className="absolute left-3 top-3 size-5 fill-cream text-cream drop-shadow"
                    aria-hidden
                  />
                ) : null}
                <InstagramIcon className="absolute right-3 top-3 size-5 text-cream opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
