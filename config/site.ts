export interface ContactConfig {
  phone: string | null;
  phoneDisplay: string | null;
  whatsapp: string | null;
  email: string | null;
  address: string | null;
  addressNote: string | null;
  mapsEmbedUrl: string | null;
  mapsUrl: string | null;
  instagramUrl: string | null;
  instagramHandle: string | null;
  tiktokUrl: string | null;
}

export interface HoursConfig {
  days: string;
  time: string;
}

export const siteConfig = {
  name: "Yaşarkent Et Restoran",
  shortName: "YAŞARKENT",
  legalName: "Yaşarkent Et Restoran",
  domain: "https://yasarkentetrestorant.com",
  menuPdf: "/menu/yasarkent-menu.pdf",
  title: "Kemalpaşa Et Restoran | Yaşarkent | Kebap, Pide, Izgara",
  description:
    "Kemalpaşa’da Yaşarkent Et Restoran. Izgara, kebap, pide ve lahmacun. Sekiz Eylül, 96. Sk No:3, Kemalpaşa / İzmir. Rezervasyon: (0232) 878 80 81.",
  locale: "tr_TR",
  ogImage: "/images/og.jpg",
  geo: {
    lat: 38.4342082,
    lng: 27.4042554,
  },

  contact: {
    phone: "+902328788081",
    phoneDisplay: "(0232) 878 80 81",
    whatsapp: "905337364670",
    email: null,
    address: "Sekiz Eylül, 96. Sk No:3, 35730 Kemalpaşa/İzmir",
    addressNote: null,
    mapsEmbedUrl:
      "https://www.google.com/maps?q=38.4342082,27.4042554&hl=tr&z=16&output=embed",
    mapsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=38.4342082,27.4042554&travelmode=driving",
    instagramUrl: "https://www.instagram.com/yasarkent.et.restaurant/",
    instagramHandle: "yasarkent.et.restaurant",
    tiktokUrl: "https://www.tiktok.com/@yasarkentet",
  } satisfies ContactConfig,

  hours: [
    { days: "Pazartesi – Cumartesi", time: "09:00 – 23:00" },
    { days: "Pazar", time: "Kapalı" },
  ] as HoursConfig[],

  nav: [
    { href: "/", label: "Ana Sayfa" },
    { href: "/hakkimizda", label: "Hakkımızda" },
    { href: "/menu", label: "Menü" },
    { href: "/galeri", label: "Galeri" },
    { href: "/iletisim", label: "İletişim" },
  ],
} as const;

export function telHref(phone: string | null): string | null {
  if (!phone) return null;
  return `tel:${phone}`;
}

export function whatsappHref(whatsapp: string | null, message?: string): string | null {
  if (!whatsapp) return null;
  const text = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${whatsapp}${text}`;
}
