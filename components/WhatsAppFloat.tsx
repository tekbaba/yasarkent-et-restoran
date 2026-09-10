"use client";

import { MessageCircle } from "lucide-react";
import { siteConfig, whatsappHref } from "@/config/site";

export function WhatsAppFloat() {
  const href = whatsappHref(
    siteConfig.contact.whatsapp,
    "Merhaba, Yaşarkent Et Restoran Kemalpaşa için bilgi almak istiyorum.",
  );

  if (!href) return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-5 z-40 flex items-center gap-3 md:bottom-8 md:right-8"
      aria-label="WhatsApp'tan bize ulaşın"
    >
      <span className="hidden border border-line bg-ink/90 px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-cream shadow-lift lg:inline">
        WhatsApp&apos;tan yazın
      </span>
      <span className="inline-flex size-14 items-center justify-center bg-[#25D366] text-white shadow-lift transition-transform hover:scale-105">
        <MessageCircle className="size-7" aria-hidden />
      </span>
    </a>
  );
}
