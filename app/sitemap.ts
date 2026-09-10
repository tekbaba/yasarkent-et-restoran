import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/hakkimizda", "/menu", "/galeri", "/iletisim"];

  return routes.map((route) => ({
    url: `${siteConfig.domain}${route}`,
    lastModified: new Date("2026-09-10"),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
