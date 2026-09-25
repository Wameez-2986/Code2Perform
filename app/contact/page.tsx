import type { Metadata } from "next";
import { ContactView } from "@/components/contact/contact-view";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a consultation with Code2Perform. Tell us what you're trying to achieve, and we will understand the situation and discuss what makes sense.",
};

export default function ContactPage() {
  return <ContactView />;
}
