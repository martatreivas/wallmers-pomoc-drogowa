import type { Metadata } from "next";

import { ContactCta } from "@/components/shared/contact-cta";
import { PageHero } from "@/components/shared/page-hero";
import { createPageMetadata } from "@/lib/metadata";
import { content } from "@/content/pl";

export const metadata: Metadata = createPageMetadata({
  title: content.aboutPage.title,
  description: content.aboutPage.metadataDescription,
  path: "/o-nas",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker={content.aboutPage.kicker}
        title={content.aboutPage.title}
        description={content.aboutPage.lead}
      />

      <section className="section" aria-labelledby="about-story-title">
        <div className="container grid-2">
          <article className="card">
            <h2 className="card-title" id="about-story-title">
              {content.aboutPage.storyTitle}
            </h2>
            <div className="text-flow">
              {content.aboutPage.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>

          <aside className="card">
            <h2 className="card-title">{content.aboutPage.valuesTitle}</h2>
            <ul className="highlight-list">
              {content.aboutPage.values.map((item) => (
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
      </section>

      <ContactCta />
    </>
  );
}
