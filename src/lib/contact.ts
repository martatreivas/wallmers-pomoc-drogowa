import { siteConfig } from "@/config/site";

export const phoneHref = `tel:${siteConfig.defaultPhone.replace(/\s+/g, "")}`;
export const emailHref = `mailto:${siteConfig.defaultEmail}`;
