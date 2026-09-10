export interface InstagramPost {
  id: string;
  src: string;
  href: string;
  alt: string;
  isReel?: boolean;
}

export const instagramPosts: InstagramPost[] = [
  {
    id: "ig-1",
    src: "/images/instagram/01.jpg",
    href: "https://www.instagram.com/reel/DZNMgGZAEUh/",
    alt: "Kemalpaşa Yaşarkent fırın sütlaç",
    isReel: true,
  },
  {
    id: "ig-2",
    src: "/images/instagram/02.jpg",
    href: "https://www.instagram.com/p/DY9KdDHAnEO/",
    alt: "Kemalpaşa Yaşarkent paket servis kutuları",
  },
  {
    id: "ig-3",
    src: "/images/instagram/03.jpg",
    href: "https://www.instagram.com/p/DY5JJrCAkN4/",
    alt: "Kemalpaşa Yaşarkent paket kutu ve salon",
  },
  {
    id: "ig-4",
    src: "/images/instagram/04.jpg",
    href: "https://www.instagram.com/reel/DWYnxiYCKJE/",
    alt: "Kemalpaşa Yaşarkent yoğurtlu köfte",
    isReel: true,
  },
  {
    id: "ig-5",
    src: "/images/instagram/05.jpg",
    href: "https://www.instagram.com/reel/DWFI9F8gNkS/",
    alt: "Kemalpaşa Yaşarkent et vitrini, salon ve cephe",
    isReel: true,
  },
  {
    id: "ig-6",
    src: "/images/instagram/06.jpg",
    href: "https://www.instagram.com/reel/DVy3FTOAEH_/",
    alt: "Kemalpaşa Yaşarkent Et Restoran gece cephesi",
    isReel: true,
  },
];
