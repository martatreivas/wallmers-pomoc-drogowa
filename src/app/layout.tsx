import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { LocalBusinessSchema } from "@/components/shared/local-business-schema";
import { siteConfig } from "@/config/site";
import { content } from "@/content/pl";
import { createPageMetadata } from "@/lib/metadata";
import { bodyFont, headingFont } from "@/styles/fonts";
import { themeTokens } from "@/styles/tokens";

import "./globals.css";

export const metadata: Metadata = {
  ...createPageMetadata({
    title: `${siteConfig.siteName} | ${content.metadata.defaultTitle}`,
    description: content.metadata.defaultDescription,
    path: "/",
  }),
  title: {
    default: `${siteConfig.siteName} | ${content.metadata.defaultTitle}`,
    template: `%s | ${siteConfig.siteName}`,
  },
  applicationName: siteConfig.siteName,
  category: "automotive",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: themeTokens.colors.background,
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pl">
      <body className={`${bodyFont.variable} ${headingFont.variable}`}>
        <div className="page-shell">
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </div>
        <LocalBusinessSchema />
      </body>
    </html>
  );
}
