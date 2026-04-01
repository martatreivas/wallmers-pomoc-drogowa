import { content } from "@/content/pl";

import { SectionHeading } from "@/components/shared/section-heading";

export function ServicesSection() {
  const services = content.home.services;

  return (
    <section className="section" id={services.id} aria-labelledby={`${services.id}-title`}>
      <div className="container section-grid">
        <SectionHeading
          kicker={services.kicker}
          title={services.title}
          description={services.description}
          titleId={`${services.id}-title`}
        />

        <div className="grid-3">
          {services.items.map((service, index) => (
            <article key={service.title} className="card">
              <div className="service-card-header">
                <span className="service-icon" aria-hidden="true">
                  {index + 1}
                </span>
                <h3 className="card-title">{service.title}</h3>
              </div>
              <p className="card-description">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
