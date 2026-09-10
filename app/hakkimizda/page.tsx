import { About } from "@/components/About";
import { AboutDetails } from "@/components/AboutDetails";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { Experience } from "@/components/Experience";
import { PageHero } from "@/components/PageHero";
import { Reservation } from "@/components/Reservation";
import { pageSeo } from "@/lib/seo";

export const metadata = pageSeo({
  title: "Hakkımızda",
  description:
    "Kemalpaşa et restoran Yaşarkent: ızgara, kebap ve pide. Sekiz Eylül Mahallesi, Kemalpaşa / İzmir.",
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
        title="Kemalpaşa Et Restoran Hikâyesi."
        description="İzmir Kemalpaşa’da ızgara, kebap ve pide. Yaşarkent’in et sofrası."
        image="/images/page-about.jpg"
      />
      <About showCta={false} />
      <AboutDetails />
      <Experience />
      <Reservation />
    </>
  );
}
