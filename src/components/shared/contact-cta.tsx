import { content } from "@/content/site-content";

import { ContactModalTrigger } from "@/components/shared/contact-modal";

export function ContactCta() {
  return (
    <section className="section" aria-labelledby="cta-title">
      <div className="container">
        <div className="cta-card">
          <div>
            <h2 className="cta-title" id="cta-title">
              {content.common.contactCtaTitle}
            </h2>
            <p className="section-description">{content.common.contactCtaDescription}</p>
          </div>

          <ContactModalTrigger className="button button-primary button-large">
            {content.common.contactCtaButton}
          </ContactModalTrigger>
        </div>
      </div>
    </section>
  );
}
