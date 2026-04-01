import Link from "next/link";

import { content } from "@/content/pl";

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
            <Link className="button button-primary" href={hero.primaryCta.href}>
              {hero.primaryCta.label}
            </Link>
            <Link className="button button-secondary" href={hero.secondaryCta.href}>
              {hero.secondaryCta.label}
            </Link>
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
            {content.common.serviceHighlights.map((item) => (
              <li key={item} className="panel-list-item">
                <span className="panel-bullet" aria-hidden="true">
                  +
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
