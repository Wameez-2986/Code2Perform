import type { Metadata } from "next";
import { AboutView } from "@/components/about/about-view";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn how Code2Perform approaches client relationships as a practical digital partner—understanding the business behind every project, building the right digital solution, and staying available after launch.",
};

export default function AboutPage() {
  return <AboutView />;
}
