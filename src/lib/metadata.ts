import type { Metadata } from "next";

import { siteConfig } from "@/config/site";
import { content } from "@/content/pl";

export const metadataBase = new URL(siteConfig.siteUrl);

type MetadataInput = {
  title: string;
  description: string;
  path?: string;
};

export function createPageMetadata({
  title,
  description,
  path = "/",
}: MetadataInput): Metadata {
  const canonical = new URL(path, metadataBase).toString();

  return {
    title,
    description,
    keywords: [...content.metadata.keywords],
    metadataBase,
    alternates: {
      canonical,
    },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url: canonical,
      siteName: siteConfig.siteName,
      title,
      description,
      images: [
        {
          url: siteConfig.socialPreview,
          width: 1200,
          height: 630,
          alt: `${siteConfig.siteName} - podgląd strony`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [siteConfig.socialPreview],
    },
  };
}
