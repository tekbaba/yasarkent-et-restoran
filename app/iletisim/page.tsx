import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { Contact } from "@/components/Contact";
import { PageHero } from "@/components/PageHero";
import { Reservation } from "@/components/Reservation";
import { pageSeo } from "@/lib/seo";

export const metadata = pageSeo({
  title: "İletişim ve Rezervasyon",
  description:
    "Kemalpaşa Yaşarkent Et Restoran iletişim, yol tarifi ve masa rezervasyonu. Sekiz Eylül, 96. Sk No:3, Kemalpaşa / İzmir. Tel: (0232) 878 80 81.",
  path: "/iletisim",
});

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Ana Sayfa", path: "/" },
          { name: "İletişim", path: "/iletisim" },
        ]}
      />
      <PageHero
        eyebrow="İletişim"
        title="Kemalpaşa’ya Yolunuz Düşsün."
        image="/images/section-about.jpg"
      />
      <Reservation />
      <Contact />
    </>
  );
}
