import { Barlow, Barlow_Condensed } from "next/font/google";

export const bodyFont = Barlow({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

export const headingFont = Barlow_Condensed({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
  weight: ["600", "700"],
});
