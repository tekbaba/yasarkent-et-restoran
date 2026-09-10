import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

export function AboutDetails() {
  return (
    <section className="bg-ink py-24 md:py-32">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 md:px-8 lg:grid-cols-12 lg:px-12">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="mb-4 text-[11px] uppercase tracking-[0.38em] text-gold">
              Kemalpaşa’da
            </p>
            <h2 className="font-display text-4xl font-medium text-cream sm:text-5xl">
              Kemalpaşa kebap ve ızgara aynı adreste.
            </h2>
          </Reveal>
        </div>
        <div className="lg:col-span-7">
          <Reveal delay={0.08}>
            <div className="space-y-5 text-base leading-relaxed text-cream-muted sm:text-lg">
              <p>
                Restoranımız Sekiz Eylül, 96. Sk No:3 adresinde, Kemalpaşa
                merkezine yakın bir noktada durur. İzmir–Kemalpaşa yolunda et
                yemek isteyenler için konum nettir: ızgara, kebap, pide ve
                lahmacun aynı mutfaktan çıkar.
              </p>
              <p>
                Soframızda et porsiyon, kuzu şiş, ciğer şiş, Adana ve Urfa kebap,
                kiremitte köfte ve kuşbaşı, fırından pide ile künefe yan yana
                durur. Hangisini seçeceğinizi{" "}
                <Link href="/menu" className="text-gold underline-offset-4 hover:underline">
                  Kemalpaşa et restoran menüsünden
                </Link>{" "}
                bakabilir, yerinizi{" "}
                <Link href="/iletisim" className="text-gold underline-offset-4 hover:underline">
                  rezervasyon
                </Link>{" "}
                ile ayırabilirsiniz.
              </p>
              <p>
                Et, ateşte pişer. Yaşarkent’te de iş bu kadar sadedir: doğru
                kesim, doğru ateş, doğru zamanlama. Mahalle sofrası kadar yol
                üstü mola da buraya yakışır; kalabalık masada da tek kişilik
                kebapta da aynı mutfak çalışır.
              </p>
              <p>
                Galerideki kareler salondan ve tabaktan gelir. Gelmeden önce
                bakmak isterseniz{" "}
                <Link href="/galeri" className="text-gold underline-offset-4 hover:underline">
                  galeriye
                </Link>{" "}
                uğrayın; masa için telefon (0232) 878 80 81 veya WhatsApp yeter.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
