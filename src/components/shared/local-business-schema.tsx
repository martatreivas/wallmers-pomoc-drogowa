import { siteConfig } from "@/config/site";
import { content } from "@/content/pl";

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AutomotiveBusiness",
    name: siteConfig.siteName,
    url: siteConfig.siteUrl,
    telephone: siteConfig.defaultPhone,
    email: siteConfig.defaultEmail,
    areaServed: siteConfig.serviceArea,
    description: content.metadata.defaultDescription,
    availableLanguage: "Polish",
    openingHours: "Mo-Su 00:00-23:59",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
