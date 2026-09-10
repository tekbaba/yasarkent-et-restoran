import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

export function MenuIntro() {
  return (
    <section className="bg-ink py-16 md:py-20">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
        <Reveal>
          <div className="max-w-3xl space-y-5 text-base leading-relaxed text-cream-muted sm:text-lg">
            <p>
              Yaşarkent Et Restoran menüsü, Kemalpaşa’da ızgara et, kebap, pide
              ve lahmacun arayanlar için güncel fiyatlardır. Çorbalar, porsiyon
              ve kilo et, kiremit, kebap dürüm, pide çeşitleri, tatlı ve içecek
              aynı listede durur.
            </p>
            <p>
              Kemalpaşa kebap denince Adana, Urfa ve dürüm; ızgarada köfte,
              şiş ve pirzola; fırında pide ile lahmacun öne çıkar. Tatlıda
              Kemalpaşa tatlısı, künefe, katmer ve kadayıf vardır. Masa için{" "}
              <Link href="/iletisim" className="text-gold underline-offset-4 hover:underline">
                iletişim ve rezervasyon
              </Link>{" "}
              sayfasını kullanın; restoranı tanımak için{" "}
              <Link href="/hakkimizda" className="text-gold underline-offset-4 hover:underline">
                hakkımızda
              </Link>
              ’ya bakabilirsiniz.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
