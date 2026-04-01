import { ImageResponse } from "next/og";

import { siteConfig } from "@/config/site";
import { content } from "@/content/site-content";
import { themeTokens } from "@/styles/tokens";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background: `linear-gradient(135deg, ${themeTokens.colors.surface} 0%, ${themeTokens.colors.background} 100%)`,
          color: themeTokens.colors.text,
          padding: "64px",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            border: `2px solid ${themeTokens.colors.border}`,
            borderRadius: "36px",
            padding: "44px",
            background: "rgba(255,253,248,0.82)",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "18px",
              maxWidth: "820px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignSelf: "flex-start",
                padding: "10px 18px",
                borderRadius: "999px",
                background: "rgba(169,95,47,0.1)",
                color: themeTokens.colors.primary,
                fontSize: "28px",
                fontWeight: 700,
              }}
            >
              {content.home.hero.eyebrow}
            </div>
            <div
              style={{
                fontSize: "72px",
                lineHeight: 1,
                fontWeight: 800,
              }}
            >
              {siteConfig.siteName}
            </div>
            <div
              style={{
                fontSize: "34px",
                lineHeight: 1.35,
                color: themeTokens.colors.textMuted,
              }}
            >
              {content.metadata.defaultDescription}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: "28px",
              color: themeTokens.colors.textMuted,
            }}
          >
            <div>{siteConfig.defaultPhone}</div>
            <div>{siteConfig.serviceArea}</div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
