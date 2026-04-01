type PageHeroProps = {
  kicker: string;
  title: string;
  description: string;
};

export function PageHero({ kicker, title, description }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="container">
        <header className="page-hero-grid">
          <p className="section-kicker">{kicker}</p>
          <h1 className="section-title">{title}</h1>
          <p className="section-description">{description}</p>
        </header>
      </div>
    </section>
  );
}
