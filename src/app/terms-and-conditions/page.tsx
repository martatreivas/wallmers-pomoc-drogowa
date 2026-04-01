import type { Metadata } from "next";

import { LegalDocument } from "@/components/shared/legal-document";
import { termsContent } from "@/content/legal";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: termsContent.title,
  description: termsContent.description,
  path: "/terms-and-conditions",
});

export default function TermsAndConditionsPage() {
  return (
    <LegalDocument
      title={termsContent.title}
      description={termsContent.description}
      updatedAt={termsContent.updatedAt}
      sections={termsContent.sections}
    />
  );
}
