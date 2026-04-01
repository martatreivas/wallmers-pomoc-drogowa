import { pricingItems, pricingNote } from "@/constants/pricing";
import { content } from "@/content/site-content";

import { SectionHeading } from "@/components/shared/section-heading";

type PricingSectionProps = {
  compact?: boolean;
};

export function PricingSection({ compact = false }: PricingSectionProps) {
  const pricing = content.home.pricing;

  return (
    <section className="section" id={pricing.id} aria-labelledby={`${pricing.id}-title`}>
      <div className="container section-grid">
        <SectionHeading
          kicker={pricing.kicker}
          title={pricing.title}
          description={pricing.description}
          titleId={`${pricing.id}-title`}
        />

        <div className={`pricing-grid${compact ? " is-compact" : ""}`}>
          {pricingItems.map((item) => (
            <article key={item.title} className="pricing-card">
              <div className="pricing-card-top">
                <h3 className="card-title">{item.title}</h3>
                <p className="pricing-value">{item.price}</p>
              </div>
              <p className="card-description">{item.description}</p>
            </article>
          ))}
        </div>

        <p className="pricing-note">{pricingNote}</p>
      </div>
    </section>
  );
}
