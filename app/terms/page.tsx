import type { Metadata } from "next";
import { TermsView } from "@/components/terms/terms-view";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for Code2Perform. Clear, straightforward terms governing digital design, software engineering engagements, and website use.",
};

export default function TermsPage() {
  return <TermsView />;
}
