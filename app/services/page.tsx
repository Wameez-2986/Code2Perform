import type { Metadata } from "next";
import { ServicesView } from "@/components/services/services-view";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Code2Perform's six core digital practices—from web development and product design to custom software, e-commerce, automation, and dependable post-launch support.",
};

export default function ServicesPage() {
  return <ServicesView />;
}
