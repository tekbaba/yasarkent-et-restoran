export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  span?: "normal" | "tall" | "wide";
}

export const galleryImages: GalleryImage[] = [
  { id: "g1", src: "/images/menu/food-kebap-2.png", alt: "Kemalpaşa Yaşarkent Adana kebap, bulgur ve közlenmiş sebze", span: "wide" },
  { id: "g2", src: "/images/menu/food-et-2.png", alt: "Kemalpaşa Yaşarkent kuzu pirzola ızgara", span: "tall" },
  { id: "g3", src: "/images/menu/food-et-1.png", alt: "Kemalpaşa Yaşarkent ızgara şiş et" },
  { id: "g4", src: "/images/menu/food-kiremit-1.png", alt: "Kemalpaşa Yaşarkent kiremitte kaşarlı köfte" },
  { id: "g5", src: "/images/menu/food-pide-1.png", alt: "Kemalpaşa Yaşarkent pide çeşitleri", span: "tall" },
  { id: "g6", src: "/images/menu/food-kiremit-2.png", alt: "Kemalpaşa Yaşarkent kiremitte kuşbaşı" },
  { id: "g7", src: "/images/menu/food-tatli-2.png", alt: "Kemalpaşa Yaşarkent Kemalpaşa tatlısı" },
  { id: "g8", src: "/images/menu/food-tatli-1.png", alt: "Kemalpaşa Yaşarkent fırın sütlaç", span: "wide" },
  { id: "g9", src: "/images/menu/food-pide-2.png", alt: "Kemalpaşa Yaşarkent kuşbaşılı pide" },
  { id: "g10", src: "/images/menu/food-kebap-1.png", alt: "Kemalpaşa Yaşarkent ızgara kebap şiş" },
  { id: "g11", src: "/images/menu/food-corba-1.png", alt: "Kemalpaşa Yaşarkent ezogelin çorbası" },
  { id: "g12", src: "/images/menu/food-corba-2.png", alt: "Kemalpaşa Yaşarkent kelle paça" },
];
