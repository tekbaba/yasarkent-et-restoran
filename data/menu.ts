export type MenuCategoryId =
  | "corba"
  | "et"
  | "et-kg"
  | "kiremit"
  | "kebap"
  | "pide"
  | "tatlilar"
  | "icecekler";

export interface MenuItem {
  id: string;
  category: MenuCategoryId;
  name: string;
  description: string;
  price: number | null;
  image: string | null;
  featured?: boolean;
  placeholder: boolean;
}

export interface MenuCategory {
  id: MenuCategoryId;
  label: string;
}

export const menuNote = "Tatlılarda kaymak ve dondurma ilavesi 50 ₺’dir.";

export const menuCategories: MenuCategory[] = [
  { id: "corba", label: "Çorba" },
  { id: "et", label: "Et (Porsiyon)" },
  { id: "kiremit", label: "Kiremit" },
  { id: "kebap", label: "Kebap" },
  { id: "pide", label: "Pide & Lahmacun" },
  { id: "tatlilar", label: "Tatlılar" },
  { id: "icecekler", label: "İçecekler" },
  { id: "et-kg", label: "Et (KG)" },
];

function item(
  id: string,
  category: MenuCategoryId,
  name: string,
  price: number,
  image: string | null,
  featured = false,
): MenuItem {
  return {
    id,
    category,
    name,
    description: "",
    price,
    image,
    featured,
    placeholder: false,
  };
}

export const menuItems: MenuItem[] = [
  item("corba-ezogelin", "corba", "Ezogelin", 180, "/images/menu/food-corba-1.png"),
  item("corba-mercimek", "corba", "Mercimek", 180, "/images/menu/food-corba-1.png"),
  item("corba-kelle", "corba", "Kelle Paça", 220, "/images/menu/food-corba-2.png"),
  item("corba-az-ezogelin", "corba", "Az Ezogelin", 180, "/images/menu/food-corba-1.png"),
  item("corba-az-mercimek", "corba", "Az Mercimek", 180, "/images/menu/food-corba-1.png"),
  item("corba-az-kelle", "corba", "Az Kelle Paça", 200, "/images/menu/food-corba-2.png"),

  item("et-sucuk", "et", "Sucuk Şiş", 550, null),
  item("et-biftek", "et", "Dana Biftek", 700, "/images/menu/food-steak.jpg", true),
  item("et-beyti", "et", "Kuzu Beyti", 700, "/images/menu/food-et-1.png"),
  item("et-kulbasti", "et", "Kuzu Külbastı", 700, "/images/section-reservation.jpg"),
  item("et-pirzola", "et", "Kuzu Pirzola", 700, "/images/menu/food-et-2.png", true),
  item("et-antrikot", "et", "Dana Antrikot", 700, "/images/menu/food-steak.jpg", true),
  item("et-kuzu-sis", "et", "Kuzu Şiş", 700, "/images/menu/food-sis.jpg"),
  item("et-ciger", "et", "Ciğer Şiş", 700, null),
  item("et-dana-lokum", "et", "Dana Lokum", 900, null, true),
  item("et-kuzu-lokum", "et", "Kuzu Lokum", 900, null),
  item("et-bonfile", "et", "Dana Bonfile", 900, "/images/menu/food-steak.jpg"),

  item("kg-sucuk", "et-kg", "Sucuk Şiş", 2400, null),
  item("kg-biftek", "et-kg", "Dana Biftek", 3000, "/images/menu/food-kg-1.png"),
  item("kg-antrikot", "et-kg", "Dana Antrikot", 3000, "/images/menu/food-kg-1.png"),
  item("kg-kuzu-sis", "et-kg", "Kuzu Şiş", 3000, "/images/menu/food-sis.jpg"),
  item("kg-pirzola", "et-kg", "Kuzu Pirzola", 3000, "/images/menu/food-et-2.png"),
  item("kg-kulbasti", "et-kg", "Kuzu Külbastı", 3000, "/images/section-reservation.jpg"),
  item("kg-beyti", "et-kg", "Kuzu Beyti", 3000, "/images/menu/food-et-1.png"),
  item("kg-dana-lokum", "et-kg", "Dana Lokum", 3750, "/images/menu/food-kg-1.png"),
  item("kg-kuzu-lokum", "et-kg", "Kuzu Lokum", 3750, null),
  item("kg-bonfile", "et-kg", "Dana Bonfile", 3750, "/images/menu/food-kg-1.png"),
  item("kg-anne-kofte", "et-kg", "Anne Köfte", 2400, "/images/menu/food-kg-2.png"),
  item("kg-kofte", "et-kg", "Köfte", 2400, "/images/menu/food-kg-2.png"),
  item("kg-kasarli-kofte", "et-kg", "Kaşarlı Köfte", 2600, "/images/menu/food-kg-2.png"),

  item("kir-kofte-sade", "kiremit", "Kiremitte Köfte Sade", 500, "/images/menu/food-kiremit-1.png"),
  item("kir-kofte-kasar", "kiremit", "Kiremitte Köfte Kaşarlı", 600, "/images/menu/food-kiremit-1.png", true),
  item("kir-kusbasi-sade", "kiremit", "Kiremitte Kuşbaşı Sade", 700, "/images/menu/food-kiremit-2.png"),
  item("kir-kusbasi-kasar", "kiremit", "Kiremitte Kuşbaşı Kaşarlı", 700, "/images/menu/food-kiremit-2.png"),
  item("kir-izgara-kofte", "kiremit", "Izgara Köfte", 400, null),
  item("kir-yogurtlu-kofte", "kiremit", "Yoğurtlu Soslu Tereyağlı Köfte", 550, "/images/menu/food-yogurtlu-kofte.jpg"),

  item("kebap-adana", "kebap", "Adana", 500, "/images/menu/food-kebap-2.png", true),
  item("kebap-urfa", "kebap", "Urfa", 500, "/images/menu/food-kebap-2.png"),
  item("kebap-adana-durum", "kebap", "Adana Dürüm", 400, "/images/menu/food-durum.jpg"),
  item("kebap-urfa-durum", "kebap", "Urfa Dürüm", 400, "/images/menu/food-durum.jpg"),
  item("kebap-hamburger", "kebap", "Hamburger", 500, "/images/menu/food-hamburger.jpg"),

  item("pide-kiymali-sade", "pide", "Kıymalı Sade", 220, "/images/menu/food-pide-1.png"),
  item("pide-kiymali-yumurta", "pide", "Kıymalı Yumurtalı Pide", 230, "/images/menu/food-pide-1.png"),
  item("pide-kiymali-kasar", "pide", "Kıymalı Kaşarlı Pide", 270, "/images/menu/food-pide-1.png"),
  item("pide-kasarli-sade", "pide", "Kaşarlı Sade Pide", 270, "/images/menu/food-pide-1.png"),
  item("pide-kasarli-yumurta", "pide", "Kaşarlı Yumurtalı Pide", 290, "/images/menu/food-pide-1.png"),
  item("pide-kusbasi-sade", "pide", "Kuşbaşılı Sade Pide", 340, "/images/menu/food-pide-2.png"),
  item("pide-kusbasi-kasar", "pide", "Kuşbaşı Kaşarlı Pide", 360, "/images/menu/food-pide-2.png"),
  item("pide-karisik", "pide", "Karışık Pide", 340, "/images/menu/food-pide-2.png"),
  item("pide-findik-lahmacun", "pide", "Fındık Lahmacun", 175, "/images/menu/food-lahmacun.jpg"),
  item("pide-lahmacun", "pide", "Lahmacun", 200, "/images/menu/food-lahmacun.jpg", true),
  item("pide-kasarli-lahmacun", "pide", "Kaşarlı Lahmacun", 220, "/images/menu/food-lahmacun.jpg"),
  item("pide-pizza", "pide", "Pizza", 450, "/images/menu/food-pizza.jpg"),

  item("tatli-kemalpasa", "tatlilar", "Kemalpaşa Tatlısı", 250, "/images/menu/food-tatli-2.png"),
  item("tatli-katmer", "tatlilar", "Katmer", 300, null),
  item("tatli-kunefe", "tatlilar", "Künefe", 300, "/images/menu/food-kunefe.jpg", true),
  item("tatli-fistikli-kunefe", "tatlilar", "Fıstıklı Künefe", 350, "/images/menu/food-kunefe-fistik.jpg"),
  item("tatli-sutlac", "tatlilar", "Fırın Sütlaç", 250, "/images/menu/food-sutlac.jpg"),
  item("tatli-basma", "tatlilar", "Cevizli Basma Kadayıf", 250, null),
  item("tatli-sufle", "tatlilar", "Sufle", 250, null),

  item("icecek-kola", "icecekler", "Kola", 90, null),
  item("icecek-fanta", "icecekler", "Fanta", 90, null),
  item("icecek-sprite", "icecekler", "Sprite", 90, null),
  item("icecek-sise-ayran", "icecekler", "Şişe Ayran", 75, null),
  item("icecek-tombul-ayran", "icecekler", "Tombul Ayran", 75, null),
  item("icecek-kucuk-ayran", "icecekler", "Küçük Ayran", 40, null),
  item("icecek-soda", "icecekler", "Soda", 50, null),
  item("icecek-salgam", "icecekler", "Şalgam", 90, null),
  item("icecek-nigde", "icecekler", "Niğde Gazozu", 90, null),
  item("icecek-1lt-kola", "icecekler", "1 Lt Kola", 250, null),
  item("icecek-limonata", "icecekler", "Limonata", 90, null),
  item("icecek-cappy", "icecekler", "Cappy", 90, null),
  item("icecek-su", "icecekler", "Su", 25, null),
];

export const featuredMenuItems = menuItems.filter((entry) => entry.featured);
