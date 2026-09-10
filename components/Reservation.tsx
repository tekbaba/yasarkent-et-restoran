import Image from "next/image";
import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";
import { siteConfig, telHref, whatsappHref } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function Reservation() {
  const phone = telHref(siteConfig.contact.phone);
  const whatsapp = whatsappHref(
    siteConfig.contact.whatsapp,
    "Merhaba, Kemalpaşa Yaşarkent Et Restoran için masa rezervasyonu yapmak istiyorum.",
  );

  return (
    <section id="rezervasyon" className="grain relative isolate overflow-hidden py-28 md:py-36">
      <Image
        src="/images/section-reservation.jpg"
        alt="Kemalpaşa Yaşarkent ızgara rezervasyon"
        fill
        quality={75}
        sizes="(max-width: 768px) 100vw, 1600px"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-ink/82" />

      <div className="relative mx-auto max-w-3xl px-5 text-center md:px-8">
        <Reveal>
          <p className="mb-4 text-[11px] uppercase tracking-[0.38em] text-gold">
            Rezervasyon
          </p>
          <h2 className="font-display text-5xl font-medium text-cream sm:text-6xl lg:text-7xl">
            Kemalpaşa’da Masa Rezervasyonu.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-cream-muted sm:text-lg">
            Sevdiklerinizle Kemalpaşa’da unutulmaz bir Yaşarkent sofrası için
            yerinizi ayırtın.{" "}
            <Link href="/iletisim" className="text-gold underline-offset-4 hover:underline">
              İletişim sayfasından
            </Link>{" "}
            da ulaşabilirsiniz.
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href={phone ?? "/iletisim"} showArrow>
              Masa Rezervasyonu
            </Button>
            {phone ? (
              <Button href={phone} variant="ghost">
                <span className="inline-flex items-center gap-2">
                  <Phone className="size-4" aria-hidden />
                  Hemen Ara
                </span>
              </Button>
            ) : null}
            {whatsapp ? (
              <Button href={whatsapp} variant="outline" external>
                <span className="inline-flex items-center gap-2">
                  <MessageCircle className="size-4" aria-hidden />
                  WhatsApp&apos;tan Ulaş
                </span>
              </Button>
            ) : null}
          </div>
          {!phone && !whatsapp ? (
            <p className="mt-6 text-sm text-cream-muted">
              Rezervasyon hattı yakında aktif olacaktır.
            </p>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
