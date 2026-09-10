import { Clock, MapPin, Phone } from "lucide-react";
import { siteConfig, telHref } from "@/config/site";
import { Reveal } from "@/components/ui/Reveal";

export function Contact() {
  const { contact, hours } = siteConfig;
  const phone = telHref(contact.phone);

  return (
    <section id="iletisim" className="bg-ink-soft py-24 md:py-32">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-5 md:px-8 lg:grid-cols-12 lg:px-12">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="mb-4 text-[11px] uppercase tracking-[0.38em] text-gold">
              Konum
            </p>
            <h2 className="font-display text-4xl text-cream sm:text-5xl">
              Kemalpaşa’da Sizi Bekliyoruz.
            </h2>
          </Reveal>

          <div className="mt-10 space-y-8">
            <Reveal delay={0.08}>
              <div className="flex gap-4">
                <MapPin className="mt-1 size-5 text-gold" aria-hidden />
                <div>
                  <p className="text-[11px] uppercase tracking-[0.22em] text-cream-muted">
                    Adres
                  </p>
                  <p className="mt-2 text-cream">
                    {contact.address ?? contact.addressNote}
                  </p>
                  {contact.mapsUrl ? (
                    <a
                      href={contact.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block text-sm text-gold hover:text-cream"
                    >
                      Yol tarifi al
                    </a>
                  ) : null}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="flex gap-4">
                <Phone className="mt-1 size-5 text-gold" aria-hidden />
                <div>
                  <p className="text-[11px] uppercase tracking-[0.22em] text-cream-muted">
                    Telefon
                  </p>
                  {phone && contact.phoneDisplay ? (
                    <a href={phone} className="mt-2 block text-cream hover:text-gold">
                      {contact.phoneDisplay}
                    </a>
                  ) : (
                    <p className="mt-2 text-cream-muted">Yakında eklenecektir.</p>
                  )}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="flex gap-4">
                <Clock className="mt-1 size-5 text-gold" aria-hidden />
                <div>
                  <p className="text-[11px] uppercase tracking-[0.22em] text-cream-muted">
                    Çalışma Saatleri
                  </p>
                  {hours.length > 0 ? (
                    <ul className="mt-2 space-y-1 text-cream">
                      {hours.map((row) => (
                        <li key={row.days}>
                          {row.days}: {row.time}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-2 text-cream-muted">
                      Çalışma saatleri yakında eklenecektir.
                    </p>
                  )}
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="lg:col-span-7">
          <Reveal>
            {contact.mapsEmbedUrl ? (
              <iframe
                title="Yaşarkent Et Restoran Kemalpaşa haritası"
                src={contact.mapsEmbedUrl}
                className="h-[420px] w-full border-0 grayscale contrast-125"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              <div className="flex h-[420px] items-center justify-center border border-line bg-charcoal px-8 text-center">
                <div>
                  <p className="font-display text-3xl text-cream">Harita yakında</p>
                  <p className="mt-3 text-sm text-cream-muted">
                    Google Maps embed bağlantısı eklendiğinde burada görünecek.
                  </p>
                </div>
              </div>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
