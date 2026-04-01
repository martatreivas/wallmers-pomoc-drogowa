import { content } from "@/content/pl";

import { SectionHeading } from "@/components/shared/section-heading";

export function ReasonsSection() {
  const reasons = content.home.reasons;

  return (
    <section className="section" id={reasons.id} aria-labelledby={`${reasons.id}-title`}>
      <div className="container section-grid">
        <SectionHeading
          kicker={reasons.kicker}
          title={reasons.title}
          titleId={`${reasons.id}-title`}
        />

        <div className="grid-2">
          {reasons.items.map((item) => (
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
