import { siteConfig } from "@/config/site";

export function GET() {
  const body = [
    "Contact: https://yasarkentetrestorant.com/iletisim",
    `Contact: tel:${siteConfig.contact.phone}`,
    "Expires: 2027-09-14T00:00:00.000Z",
    "Preferred-Languages: tr",
    "Canonical: https://yasarkentetrestorant.com/.well-known/security.txt",
    "",
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
