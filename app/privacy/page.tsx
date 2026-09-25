import type { Metadata } from "next";
import { PrivacyView } from "@/components/privacy/privacy-view";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Code2Perform. Learn how we handle project inquiries, protect personal data, and maintain website security.",
};

export default function PrivacyPage() {
  return <PrivacyView />;
}
