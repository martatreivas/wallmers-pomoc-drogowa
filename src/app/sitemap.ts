import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";

const routes = ["", "/o-nas", "/uslugi", "/kontakt"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteConfig.siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
