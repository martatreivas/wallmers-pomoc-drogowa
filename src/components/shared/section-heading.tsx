type SectionHeadingProps = {
  kicker: string;
  title: string;
  description?: string;
  titleId?: string;
};

export function SectionHeading({
  kicker,
  title,
  description,
  titleId,
}: SectionHeadingProps) {
  return (
    <header className="section-heading">
      <p className="section-kicker">{kicker}</p>
      <h2 className="section-title" id={titleId}>
        {title}
      </h2>
      {description ? <p className="section-description">{description}</p> : null}
    </header>
  );
}
