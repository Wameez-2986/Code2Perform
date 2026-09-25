import type { Metadata } from "next";
import { HomeView } from "@/components/home/home-view";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Code2Perform is an independent digital agency that designs, builds, and supports fast websites, mobile apps, and custom platforms.",
};

export default function HomePage() {
  return <HomeView />;
}
