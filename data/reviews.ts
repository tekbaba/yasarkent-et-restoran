export interface Review {
  id: string;
  name: string;
  quote: string;
  rating: 4 | 5;
  source: "google";
}

/** Google Haritalar yorumları — yalnızca 4 ve 5 yıldız. */
export const reviews: Review[] = [
  {
    id: "faruk",
    name: "Faruk Çınaroğlu",
    rating: 5,
    source: "google",
    quote:
      "Yaşarkent Et Restaurant tam anlamıyla et severler için biçilmiş kaftan. Etleri hem taze hem de ustalıkla pişiriliyor. Özellikle lokum kıvamındaki antrikotu ve dinlenmiş biftekleri mutlaka denemelisiniz. Mekanın ferah ve geniş bir oturma düzeni var. Servis ekibi oldukça profesyonel, ilgili ve hızlı.",
  },
  {
    id: "can-xr",
    name: "Can XR",
    rating: 5,
    source: "google",
    quote:
      "Uzun yıllardır pide ve et tüketen ve bu konuda kesinlikle çok seçici olan biri olarak rahatlıkla söyleyebilirim ki kaliteleri ve lezzetleri ile kendilerini çok öne çıkarıyorlar. Mekanla ilgili ilk deneyimimden beridir başka hiçbir yerden yemiyorum.",
  },
  {
    id: "ibrahim",
    name: "İbrahim Samet Avcı",
    rating: 5,
    source: "google",
    quote:
      "Yok böyle bir lezzet, her şeyi ile müthiş bir mekan. Çalışanlar ilgili ve güler yüzlü. Kesinlikle tavsiye ediyorum.",
  },
  {
    id: "mustafa-eke",
    name: "Av. M. Mustafa Eke",
    rating: 5,
    source: "google",
    quote:
      "Kemalpaşa’nın en kaliteli ve sağlıklı çiftliğine sahip, et konusunda uzman Yaşarkent şimdi işin mutfağına girdi. Ahmet Yaşar ve ekibi et konusunda uzman. Mutlaka lezzet deneyimi için gidilmeli.",
  },
  {
    id: "nalan",
    name: "Nalan Demir",
    rating: 5,
    source: "google",
    quote:
      "Kemalpaşa’da güzel yatık döner yiyecek bir yer bulamıyordum. Personelin güler yüzü ve şefin ikramları ile açıldığı günden bu yana müdavimi oldum. Harika lezzetler, doyurucu porsiyonlar.",
  },
  {
    id: "sahin",
    name: "Şahin Oğuz",
    rating: 5,
    source: "google",
    quote:
      "İstanbul’dan İzmir’e gelirken otobandan içeri birkaç kilometre girseniz restoranla karşılaşıyorsunuz. Lezzetler efsane, özellikle sucuk çok lezzetliydi. Herkese tavsiye ederim.",
  },
  {
    id: "ayse",
    name: "Ayşe Nur Aktaş",
    rating: 4,
    source: "google",
    quote:
      "Kemalpaşa’da ismi çok bilinen bir yer olduğu için denemek istedik, genel olarak memnun kaldık. Menüde yoğurtlu köfte yoktu fakat istediğimiz için yaptılar, sosuyla çok güzel olmuştu. Hizmet güzel, çalışanlar güler yüzlü.",
  },
  {
    id: "sule",
    name: "Şule Karaman",
    rating: 4,
    source: "google",
    quote:
      "Porsiyonlar gayet iyi, fiyat normal, tat olarak da gayet iyi. Bence tam bir fiyat-performans ürünü.",
  },
  {
    id: "ali-kemal",
    name: "Ali Kemal",
    rating: 5,
    source: "google",
    quote: "Cağ kebap harika, tavsiye ederim. İzmir yolunda yemek için güzel bir durak.",
  },
];
