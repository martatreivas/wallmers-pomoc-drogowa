import { content } from "@/content/site-content";

import { ContactModalTrigger } from "@/components/shared/contact-modal";

export function HeroSection() {
  const hero = content.home.hero;

  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="hero-eyebrow">{hero.eyebrow}</p>
          <h1 className="hero-title">{hero.title}</h1>
          <p className="hero-description">{hero.description}</p>

          <div className="hero-actions">
            <ContactModalTrigger className="button button-primary button-large hero-contact-button">
              {hero.primaryCtaLabel}
            </ContactModalTrigger>
          </div>

          <div className="stats" aria-label={hero.statsLabel}>
            {hero.stats.map((stat) => (
              <div key={stat.label} className="stat-card">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <aside className="hero-panel" aria-label={hero.panelLabel}>
          <h2 className="panel-title">{hero.panelTitle}</h2>
          <ul className="panel-list">
            {hero.dispatchItems.map((item) => (
              <li key={item} className="panel-list-item">
                <span className="panel-bullet" aria-hidden="true">
                  !
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
