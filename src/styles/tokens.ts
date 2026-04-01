export const themeTokens = {
  colors: {
    background: "#f8f4ec",
    surface: "#fffdf8",
    surfaceStrong: "#fff7eb",
    text: "#1f2430",
    textMuted: "#5e6572",
    border: "#ddd3c4",
    borderStrong: "#cdb99a",
    primary: "#a95f2f",
    primaryStrong: "#8e4c21",
    accent: "#d8b57c",
    success: "#2f6c50",
    shadow: "rgba(31, 36, 48, 0.08)",
  },
  radii: {
    sm: "0.75rem",
    md: "1.25rem",
    lg: "2rem",
    pill: "999px",
  },
  spacing: {
    section: "clamp(4rem, 8vw, 7rem)",
    container: "min(1120px, calc(100% - 2rem))",
  },
} as const;
