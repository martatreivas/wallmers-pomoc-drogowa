import type { Metadata } from "next";

import { LegalDocument } from "@/components/shared/legal-document";
import { PageHero } from "@/components/shared/page-hero";
import { content } from "@/content/site-content";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: content.legal.terms.title,
  description: content.legal.terms.metadataDescription,
  path: "/regulamin",
});

export default function TermsPage() {
  return (
    <>
      <PageHero
        kicker={content.legal.terms.kicker}
        title={content.legal.terms.title}
        description={content.legal.terms.lead}
      />
      <LegalDocument sections={content.legal.terms.sections} />
    </>
  );
}
