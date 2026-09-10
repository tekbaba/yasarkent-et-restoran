import { About } from "@/components/About";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { Experience } from "@/components/Experience";
import { PageHero } from "@/components/PageHero";
import { Reservation } from "@/components/Reservation";
import { pageSeo } from "@/lib/seo";

export const metadata = pageSeo({
  title: "Hakkımızda",
  description:
    "Kemalpaşa’da Yaşarkent Et Restoran: ızgara, kebap ve pide kültürü. İzmir Kemalpaşa’daki et sofrasını tanıyın.",
  path: "/hakkimizda",
});

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Ana Sayfa", path: "/" },
          { name: "Hakkımızda", path: "/hakkimizda" },
        ]}
      />
      <PageHero
        eyebrow="Hikayemiz"
        title="Kemalpaşa’da Lezzetin Merkezinde."
        description="İzmir Kemalpaşa’da et seçimi, ızgara ve sofra kültürü."
        image="/images/page-about.jpg"
      />
      <About showCta={false} />
      <Experience />
      <Reservation />
    </>
  );
}
