export interface Feature {
  id: string;
  title: string;
  description: string;
  image: string;
}

export const features: Feature[] = [
  {
    id: "select",
    title: "Özenle Seçilen Etler",
    description: "Kemalpaşa sofrasına yakışır kalitede, özenle seçilen etler.",
    image: "/images/menu/food-kg-1.png",
  },
  {
    id: "craft",
    title: "Ustalıkla Hazırlanır",
    description: "Izgara ve kebapta etin doğal lezzetini öne çıkaran pişirme.",
    image: "/images/menu/food-et-1.png",
  },
  {
    id: "fire",
    title: "Ateşin Lezzeti",
    description: "Kemalpaşa’da ızgaranın başında şekillenen kebap ve şiş.",
    image: "/images/menu/food-kebap-2.png",
  },
  {
    id: "atmosphere",
    title: "Sıcak Bir Atmosfer",
    description: "İzmir yolunda ve Kemalpaşa’da duraklanacak samimi bir sofra.",
    image: "/images/menu/food-pide-1.png",
  },
];
