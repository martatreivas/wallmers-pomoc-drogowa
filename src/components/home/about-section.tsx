import { content } from "@/content/pl";

import { SectionHeading } from "@/components/shared/section-heading";

export function AboutSection() {
  const about = content.home.about;

  return (
    <section className="section" id={about.id} aria-labelledby={`${about.id}-title`}>
      <div className="container section-grid">
        <SectionHeading
          kicker={about.kicker}
          title={about.title}
          description={about.description}
          titleId={`${about.id}-title`}
        />

        <div className="grid-2">
          {about.highlights.map((item) => (
            <article key={item.title} className="card feature-card">
              <h3 className="card-title">{item.title}</h3>
              <p className="card-description">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
