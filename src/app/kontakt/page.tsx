import type { Metadata } from "next";
import Link from "next/link";

import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { siteConfig } from "@/config/site";
import { content } from "@/content/pl";
import { emailHref, phoneHref } from "@/lib/contact";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: content.contactPage.title,
  description: content.contactPage.metadataDescription,
  path: "/kontakt",
});

export default function ContactPage() {
  const contact = content.home.contact;

  return (
    <>
      <PageHero
        kicker={content.contactPage.kicker}
        title={content.contactPage.title}
        description={content.contactPage.lead}
      />

      <section className="section" aria-labelledby="contact-details-title">
        <div className="container section-grid">
          <SectionHeading
            kicker={contact.kicker}
            title={contact.title}
            description={contact.description}
            titleId="contact-details-title"
          />

          <div className="grid-2">
            <article className="card">
              <h2 className="card-title">{content.contactPage.detailsTitle}</h2>
              <div className="contact-list">
                <div className="contact-list-item">
                  <span className="contact-label">{contact.phoneLabel}</span>
                  <Link className="contact-value" href={phoneHref}>
                    {siteConfig.defaultPhone}
                  </Link>
                </div>
                <div className="contact-list-item">
                  <span className="contact-label">{contact.emailLabel}</span>
                  <Link className="contact-value" href={emailHref}>
                    {siteConfig.defaultEmail}
                  </Link>
                </div>
                <div className="contact-list-item">
                  <span className="contact-label">{contact.areaLabel}</span>
                  <p className="contact-value">{siteConfig.serviceArea}</p>
                </div>
              </div>
            </article>

            <aside className="info-card">
              <h2 className="card-title">{content.contactPage.stepsTitle}</h2>
              <ul className="highlight-list">
                {content.contactPage.steps.map((item) => (
                  <li key={item}>
                    <span className="panel-bullet" aria-hidden="true">
                      +
                    </span>
                    <span className="contact-copy">{item}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
