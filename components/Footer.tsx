import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";
import { siteConfig, telHref, whatsappHref } from "@/config/site";
import { SocialLinks } from "@/components/SocialLinks";

export function Footer() {
  const { contact, hours } = siteConfig;
  const phone = telHref(contact.phone);
  const whatsapp = whatsappHref(contact.whatsapp);

  return (
    <footer className="border-t border-line bg-ink">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-16 md:grid-cols-2 md:px-8 lg:grid-cols-4 lg:px-12">
        <div>
          <p className="font-display text-2xl tracking-[0.28em] text-cream">
            {siteConfig.shortName}
          </p>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream-muted">
            Kemalpaşa’da ızgara, kebap, pide ve lahmacun. İzmir’in et sofrası
            Yaşarkent.
          </p>
          <p className="mt-6 text-[11px] uppercase tracking-[0.22em] text-gold">Sosyal</p>
          <SocialLinks className="mt-3" />
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.28em] text-gold">Navigasyon</p>
          <ul className="mt-5 space-y-3">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-cream-muted transition-colors hover:text-cream"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.28em] text-gold">İletişim</p>
          <ul className="mt-5 space-y-3 text-sm text-cream-muted">
            <li>{contact.address ?? "Adres yakında eklenecektir."}</li>
            {contact.mapsUrl ? (
              <li>
                <a
                  href={contact.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cream"
                >
                  Yol tarifi
                </a>
              </li>
            ) : null}
            <li>
              {phone && contact.phoneDisplay ? (
                <a href={phone} className="hover:text-cream">
                  {contact.phoneDisplay}
                </a>
              ) : (
                "Telefon yakında eklenecektir."
              )}
            </li>
            <li className="flex gap-3 pt-2">
              {phone ? (
                <a href={phone} aria-label="Telefon" className="hover:text-cream">
                  <Phone className="size-4" />
                </a>
              ) : null}
              {whatsapp ? (
                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="hover:text-cream"
                >
                  <MessageCircle className="size-4" />
                </a>
              ) : null}
            </li>
          </ul>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.28em] text-gold">
            Çalışma Saatleri
          </p>
          {hours.length > 0 ? (
            <ul className="mt-5 space-y-2 text-sm text-cream-muted">
              {hours.map((row) => (
                <li key={row.days}>
                  {row.days}: {row.time}
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-5 text-sm text-cream-muted">
              Çalışma saatleri yakında eklenecektir.
            </p>
          )}
        </div>
      </div>

      <div className="border-t border-line">
        <p className="mx-auto max-w-[1440px] px-5 py-6 text-xs tracking-wide text-cream-muted md:px-8 lg:px-12">
          © 2026 Yaşarkent Et Restoran — Kemalpaşa, İzmir. Tüm hakları saklıdır.
        </p>
      </div>
    </footer>
  );
}
