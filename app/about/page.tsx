import type { Metadata } from "next";
import { AboutView } from "@/components/about/about-view";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Code2Perform, an independent digital agency dedicated to disciplined software engineering, clear typography, and high-performance digital products.",
};

export default function AboutPage() {
  return <AboutView />;
}
