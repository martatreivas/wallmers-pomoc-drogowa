import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";
import { content } from "@/content/pl";
import { themeTokens } from "@/styles/tokens";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.siteName,
    short_name: siteConfig.brandName,
    description: content.metadata.defaultDescription,
    start_url: "/",
    display: "standalone",
    background_color: themeTokens.colors.background,
    theme_color: themeTokens.colors.background,
    lang: "pl",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
