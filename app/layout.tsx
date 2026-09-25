import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Code2Perform",
    template: "%s | Code2Perform",
  },
  description:
    "Code2Perform is a digital agency delivering high-performance websites, scalable platforms, and refined digital experiences.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-bone text-ink">
        {/* Skip to Main Content Link for Keyboard and Screen Reader Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2.5 focus:bg-ink focus:text-bone focus:outline-none focus:ring-2 focus:ring-champagne font-medium text-sm"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" tabIndex={-1} className="flex-1 w-full focus:outline-none">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
