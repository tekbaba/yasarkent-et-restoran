import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { Gallery } from "@/components/Gallery";
import { Instagram } from "@/components/Instagram";
import { PageHero } from "@/components/PageHero";
import { pageSeo } from "@/lib/seo";

export const metadata = pageSeo({
  title: "Galeri",
  description:
    "Kemalpaşa Yaşarkent Et Restoran galerisi: ızgara, kebap, pide ve sofra kareleri. İzmir Kemalpaşa.",
  path: "/galeri",
});

export default function GalleryPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Ana Sayfa", path: "/" },
          { name: "Galeri", path: "/galeri" },
        ]}
      />
      <PageHero
        eyebrow="Galeri"
        title="Kemalpaşa’dan Izgara Kareleri."
        image="/images/page-gallery.jpg"
      />
      <Gallery compact={false} />
      <Instagram />
    </>
  );
}
