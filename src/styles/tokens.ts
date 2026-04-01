export const themeTokens = {
  colors: {
    background: "#eef4ef",
    surface: "#ffffff",
    surfaceStrong: "#e4efe6",
    text: "#171717",
    textMuted: "#5b635f",
    border: "#d7e2d8",
    borderStrong: "#b4c7b7",
    primary: "#2f8f5b",
    primaryStrong: "#247247",
    accent: "#7ab58b",
    success: "#247247",
    shadow: "rgba(23, 23, 23, 0.08)",
  },
  radii: {
    sm: "0.9rem",
    md: "0.9rem",
    lg: "0.9rem",
    pill: "0.9rem",
  },
  spacing: {
    section: "clamp(4rem, 8vw, 7rem)",
    container: "min(1120px, calc(100% - 2rem))",
  },
} as const;
