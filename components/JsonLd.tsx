import { siteConfig } from "@/config/site";

export function JsonLd() {
  const { contact, hours, geo, domain } = siteConfig;
  const restaurantId = `${domain}/#restaurant`;
  const sameAs = [contact.instagramUrl, contact.tiktokUrl].filter(
    (url): url is string => Boolean(url),
  );

  const restaurant: Record<string, unknown> = {
    "@type": "Restaurant",
    "@id": restaurantId,
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: domain,
    image: [
      `${domain}${siteConfig.ogImage}`,
      `${domain}/images/hero.jpg`,
      `${domain}/images/section-about.jpg`,
    ],
    logo: `${domain}/images/logo.png`,
    description: siteConfig.description,
    servesCuisine: ["Turkish", "Grill", "Kebab", "Pide", "Lahmacun"],
    priceRange: "₺₺",
    currenciesAccepted: "TRY",
    paymentAccepted: "Cash, Credit Card",
    acceptsReservations: "True",
    hasMenu: `${domain}/menu`,
    menu: `${domain}${siteConfig.menuPdf}`,
    inLanguage: "tr-TR",
    areaServed: [
      { "@type": "City", name: "Kemalpaşa" },
      { "@type": "City", name: "İzmir" },
    ],
    geo: {
      "@type": "GeoCoordinates",
      latitude: geo.lat,
      longitude: geo.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "23:00",
      },
    ],
    potentialAction: {
      "@type": "ReserveAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${domain}/iletisim`,
        actionPlatform: ["http://schema.org/DesktopWebPlatform", "http://schema.org/MobileWebPlatform"],
      },
      result: {
        "@type": "FoodEstablishmentReservation",
        name: "Masa rezervasyonu",
      },
    },
  };

  if (contact.phone) {
    restaurant.telephone = contact.phone;
  }

  if (contact.address) {
    restaurant.address = {
      "@type": "PostalAddress",
      streetAddress: "Sekiz Eylül, 96. Sk No:3",
      addressLocality: "Kemalpaşa",
      addressRegion: "İzmir",
      postalCode: "35730",
      addressCountry: "TR",
    };
  }

  if (contact.mapsUrl) {
    restaurant.hasMap = contact.mapsUrl;
  }

  if (hours.length > 0) {
    restaurant.openingHours = hours.map((row) => `${row.days} ${row.time}`);
  }

  if (sameAs.length > 0) {
    restaurant.sameAs = sameAs;
  }

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      restaurant,
      {
        "@type": "WebSite",
        "@id": `${domain}/#website`,
        name: siteConfig.name,
        url: domain,
        inLanguage: "tr-TR",
        publisher: { "@id": restaurantId },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
