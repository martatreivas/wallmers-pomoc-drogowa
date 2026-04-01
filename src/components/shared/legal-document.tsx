type LegalSection = {
  heading: string;
  paragraphs: readonly string[];
};

type LegalDocumentProps = {
  title: string;
  description: string;
  updatedAt: string;
  sections: readonly LegalSection[];
};

export function LegalDocument({
  title,
  description,
  updatedAt,
  sections,
}: LegalDocumentProps) {
  return (
    <section className="section legal-section" aria-labelledby="legal-document-title">
      <div className="container legal-layout">
        <header className="legal-intro">
          <p className="section-kicker">Legal</p>
          <h1 className="section-title" id="legal-document-title">
            {title}
          </h1>
          <p className="section-description">{description}</p>
          <p className="legal-updated">Aktualizacja: {updatedAt}</p>
        </header>

        <div className="legal-stack">
          {sections.map((section) => (
            <article key={section.heading} className="legal-card">
              <h2 className="legal-card-title">{section.heading}</h2>
              <div className="legal-copy">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
