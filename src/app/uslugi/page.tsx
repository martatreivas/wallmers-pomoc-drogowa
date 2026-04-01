import type { Metadata } from "next";

import { ContactCta } from "@/components/shared/contact-cta";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { content } from "@/content/pl";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: content.servicesPage.title,
  description: content.servicesPage.metadataDescription,
  path: "/uslugi",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        kicker={content.servicesPage.kicker}
        title={content.servicesPage.title}
        description={content.servicesPage.lead}
      />

      <section className="section" aria-labelledby="services-list-title">
        <div className="container section-grid">
          <SectionHeading
            kicker={content.home.services.kicker}
            title={content.home.services.title}
            description={content.home.services.description}
            titleId="services-list-title"
          />

          <div className="grid-3">
            {content.home.services.items.map((service, index) => (
              <article key={service.title} className="card">
                <div className="service-card-header">
                  <span className="service-icon" aria-hidden="true">
                    {index + 1}
                  </span>
                  <h2 className="card-title">{service.title}</h2>
                </div>
                <p className="card-description">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
