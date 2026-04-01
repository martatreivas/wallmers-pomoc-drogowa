import type { Metadata } from "next";

import { LegalDocument } from "@/components/shared/legal-document";
import { privacyPolicyContent } from "@/content/legal";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: privacyPolicyContent.title,
  description: privacyPolicyContent.description,
  path: "/polityka-prywatnosci",
});

export default function PrivacyPolicyPage() {
  return (
    <LegalDocument
      title={privacyPolicyContent.title}
      description={privacyPolicyContent.description}
      updatedAt={privacyPolicyContent.updatedAt}
      sections={privacyPolicyContent.sections}
    />
  );
}
