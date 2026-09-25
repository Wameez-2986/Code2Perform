import type { Metadata } from "next";
import { ContactView } from "@/components/contact/contact-view";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a project conversation with Code2Perform. Tell us about your web, mobile, SaaS, or automation needs.",
};

export default function ContactPage() {
  return <ContactView />;
}
