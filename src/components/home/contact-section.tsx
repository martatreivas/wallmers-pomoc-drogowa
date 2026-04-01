import Link from "next/link";

import { siteConfig } from "@/config/site";
import { content } from "@/content/pl";
import { emailHref, phoneHref } from "@/lib/contact";

import { SectionHeading } from "@/components/shared/section-heading";

export function ContactSection() {
  const contact = content.home.contact;

  return (
    <section className="section" id={contact.id} aria-labelledby={`${contact.id}-title`}>
      <div className="container section-grid">
        <SectionHeading
          kicker={contact.kicker}
          title={contact.title}
          description={contact.description}
          titleId={`${contact.id}-title`}
        />

        <div className="grid-2">
          <div className="contact-list">
            <article className="contact-list-item">
              <span className="contact-label">{contact.phoneLabel}</span>
              <Link className="contact-value" href={phoneHref}>
                {siteConfig.defaultPhone}
              </Link>
            </article>
            <article className="contact-list-item">
              <span className="contact-label">{contact.emailLabel}</span>
              <Link className="contact-value" href={emailHref}>
                {siteConfig.defaultEmail}
              </Link>
            </article>
            <article className="contact-list-item">
              <span className="contact-label">{contact.areaLabel}</span>
              <p className="contact-value">{contact.areaValue}</p>
            </article>
          </div>

          <article className="info-card">
            <span className="contact-label">{contact.availabilityLabel}</span>
            <p className="contact-copy">{contact.availabilityValue}</p>
            <p className="card-description">{contact.note}</p>
          </article>
        </div>
      </div>
    </section>
  );
}
