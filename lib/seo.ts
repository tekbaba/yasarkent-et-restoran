import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

interface PageSeoInput {
  title: string;
  description: string;
  path: string;
}

export function dishImageAlt(name: string): string {
  return `Kemalpaşa Yaşarkent ${name}`;
}

export function pageSeo({ title, description, path }: PageSeoInput): Metadata {
  const url = `${siteConfig.domain}${path}`;
  const brandedTitle = `${title} | ${siteConfig.name}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url,
      title: brandedTitle,
      description,
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} Kemalpaşa ızgara`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: brandedTitle,
      description,
      images: [siteConfig.ogImage],
    },
  };
}
