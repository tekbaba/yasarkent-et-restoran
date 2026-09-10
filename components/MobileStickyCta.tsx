"use client";

import Link from "next/link";
import { MessageCircle, Phone, CalendarDays } from "lucide-react";
import { siteConfig, telHref, whatsappHref } from "@/config/site";

export function MobileStickyCta() {
  const phone = telHref(siteConfig.contact.phone);
  const whatsapp = whatsappHref(
    siteConfig.contact.whatsapp,
    "Merhaba, Kemalpaşa Yaşarkent Et Restoran için masa rezervasyonu yapmak istiyorum.",
  );

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-ink/92 pb-[env(safe-area-inset-bottom)] backdrop-blur-md md:hidden">
      <div className="grid grid-cols-3">
        {phone ? (
          <a
            href={phone}
            className="flex flex-col items-center gap-1 py-3 text-[10px] uppercase tracking-[0.18em] text-cream"
          >
            <Phone className="size-4" aria-hidden />
            Ara
          </a>
        ) : (
          <span className="flex flex-col items-center gap-1 py-3 text-[10px] uppercase tracking-[0.18em] text-cream-muted/50">
            <Phone className="size-4" aria-hidden />
            Ara
          </span>
        )}
        {whatsapp ? (
          <a
            href={whatsapp}
            className="flex flex-col items-center gap-1 py-3 text-[10px] uppercase tracking-[0.18em] text-cream"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="size-4" aria-hidden />
            WhatsApp
          </a>
        ) : (
          <span className="flex flex-col items-center gap-1 py-3 text-[10px] uppercase tracking-[0.18em] text-cream-muted/50">
            <MessageCircle className="size-4" aria-hidden />
            WhatsApp
          </span>
        )}
        <Link
          href="/#rezervasyon"
          className="flex flex-col items-center gap-1 bg-ember py-3 text-[10px] uppercase tracking-[0.18em] text-cream"
        >
          <CalendarDays className="size-4" aria-hidden />
          Rezervasyon
        </Link>
      </div>
    </div>
  );
}
