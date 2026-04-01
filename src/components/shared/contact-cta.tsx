import Link from "next/link";

import { content } from "@/content/pl";
import { phoneHref } from "@/lib/contact";

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

          <Link className="button button-primary" href={phoneHref}>
            {content.common.contactCtaButton}
          </Link>
        </div>
      </div>
    </section>
  );
}
