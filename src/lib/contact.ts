import { siteConfig } from "@/config/site";

const normalizedPhone = siteConfig.defaultPhone.replace(/\s+/g, "");
const normalizedWhatsappPhone = siteConfig.whatsappPhone.replace(/\D+/g, "");

export const phoneHref = `tel:${normalizedPhone}`;
export const emailHref = `mailto:${siteConfig.defaultEmail}`;
export const whatsappHref = `https://wa.me/${normalizedWhatsappPhone}?text=${encodeURIComponent(
  siteConfig.whatsappMessage,
)}`;
