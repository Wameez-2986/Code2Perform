import type { Metadata } from "next";
import { ServicesView } from "@/components/services/services-view";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Code2Perform's core engineering and design practices: Web & Digital Development, UI/UX & Product Design, Mobile App Development, SaaS & Custom Platforms, E-Commerce Solutions, and AI & Business Automation.",
};

export default function ServicesPage() {
  return <ServicesView />;
}
