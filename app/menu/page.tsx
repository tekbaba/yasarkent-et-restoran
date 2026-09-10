import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { MenuSection } from "@/components/Menu";
import { PageHero } from "@/components/PageHero";
import { Reservation } from "@/components/Reservation";
import { pageSeo } from "@/lib/seo";

export const metadata = pageSeo({
  title: "Menü ve Fiyatlar",
  description:
    "Kemalpaşa et restoran menüsü ve fiyatları: ızgara et, kebap, pide, lahmacun, künefe. Yaşarkent, Sekiz Eylül / Kemalpaşa.",
  path: "/menu",
});

export default function MenuPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Ana Sayfa", path: "/" },
          { name: "Menü", path: "/menu" },
        ]}
      />
      <PageHero
        eyebrow="Menü"
        title="Kemalpaşa Izgara & Kebap Menüsü."
        description="Çorba, ızgara, kebap, pide ve tatlı. Kemalpaşa’daki güncel fiyatlarımız."
        image="/images/page-menu.jpg"
      />
      <MenuSection heading="Kategoriler" showFilters featuredOnly={false} />
      <Reservation />
    </>
  );
}
