import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SCENES_DATA } from "@/content/scenes";

export function HomeScenes() {
  return (
    <div id="home" className="w-full">
      {/* Beat 0: Hero Section */}
      <section className="relative w-full hero-texture border-b border-hairline min-h-[calc(100dvh-4.5rem)] flex flex-col justify-center items-center py-16 sm:py-20 md:py-24 lg:py-28 text-center">
        <div className="page-container max-w-5xl flex flex-col items-center">
          {/* Main Headline */}
          <h1 className="font-bold text-ink w-full mb-0 tracking-tight leading-[1.12] text-3xl sm:text-5xl md:text-6xl lg:text-7xl max-w-5xl">
            <span className="block">{SCENES_DATA.beat0.titleLine1}</span>
            <span className="block text-champagne-deep">{SCENES_DATA.beat0.titleLine2}</span>
          </h1>

          {/* Paragraph */}
          <p className="text-muted leading-relaxed mt-8 sm:mt-10 md:mt-12 mb-10 sm:mb-12 md:mb-14 max-w-3xl text-base sm:text-lg md:text-xl">
            {SCENES_DATA.beat0.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 w-full sm:w-auto">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-ink text-white font-medium rounded-full text-base hover:bg-champagne-deep shadow-xs w-full sm:w-auto"
            >
              Discuss a Project
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center justify-center px-8 py-4 bg-surface border border-hairline text-ink font-medium rounded-full text-base hover:border-ink w-full sm:w-auto"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* Beat 1: What Sets Us Apart */}
      <section className="w-full py-16 sm:py-20 md:py-24 border-b border-hairline bg-bone">
        <div className="page-container max-w-5xl space-y-8 md:space-y-12 text-center">
          <div>
            <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-champagne" />
              <p className="type-label text-champagne-deep">{SCENES_DATA.beat1.label}</p>
            </div>
            <h2 className="type-heading text-ink text-2xl sm:text-3xl md:text-4xl max-w-3xl mx-auto text-balance">
              {SCENES_DATA.beat1.heading}
            </h2>
            <p className="type-body-sm text-muted max-w-2xl mx-auto text-sm sm:text-base leading-relaxed mt-5 sm:mt-6 md:mt-7">
              {SCENES_DATA.beat1.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 text-left">
            {SCENES_DATA.beat1.cards.map((c) => (
              <div
                key={c.id}
                className="p-5 md:p-6 rounded-2xl bg-surface border border-hairline shadow-xs flex flex-col justify-between space-y-3"
              >
                <span className="text-[11px] font-mono font-medium text-champagne-deep">
                  {c.tag}
                </span>
                <h3 className="type-title text-ink font-semibold text-base md:text-lg">
                  {c.title}
                </h3>
                <p className="type-body-sm text-muted text-xs sm:text-sm leading-relaxed">
                  {c.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beat 2: How We Turn Ideas Into Products */}
      <section className="w-full py-16 sm:py-20 md:py-24 border-b border-hairline bg-surface-alt">
        <div className="page-container max-w-5xl space-y-8 md:space-y-12 text-center">
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-champagne" />
              <p className="type-label text-champagne-deep">{SCENES_DATA.beat2.label}</p>
            </div>
            <h2 className="type-heading text-ink text-2xl sm:text-3xl md:text-4xl max-w-3xl mx-auto text-center text-balance">
              {SCENES_DATA.beat2.heading}
            </h2>
            <p className="type-body-sm text-muted max-w-2xl mx-auto text-sm sm:text-base leading-relaxed mt-5 sm:mt-6 md:mt-7 text-center">
              {SCENES_DATA.beat2.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 text-left">
            {SCENES_DATA.beat2.steps.map((s) => (
              <div
                key={s.id}
                className="p-6 md:p-7 rounded-2xl bg-surface border border-hairline shadow-xs space-y-3"
              >
                <span className="text-[11px] font-mono font-semibold text-champagne-deep">
                  {s.step}
                </span>
                <h3 className="type-title text-ink font-semibold text-base md:text-lg">
                  {s.title}
                </h3>
                <p className="type-body-sm text-muted text-xs sm:text-sm leading-relaxed">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beat 3: Who We Work With */}
      <section className="w-full py-16 sm:py-20 md:py-24 border-b border-hairline bg-bone">
        <div className="page-container max-w-5xl space-y-8 md:space-y-12 text-center">
          <div>
            <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-champagne" />
              <p className="type-label text-champagne-deep">{SCENES_DATA.beat3.label}</p>
            </div>
            <h2 className="type-heading text-ink text-2xl sm:text-3xl md:text-4xl max-w-3xl mx-auto text-balance">
              {SCENES_DATA.beat3.heading}
            </h2>
            <p className="type-body-sm text-muted max-w-2xl mx-auto text-sm sm:text-base leading-relaxed mt-5 sm:mt-6 md:mt-7">
              {SCENES_DATA.beat3.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 text-left">
            {SCENES_DATA.beat3.cards.map((c) => (
              <div
                key={c.id}
                className="p-5 md:p-6 rounded-2xl bg-surface border border-hairline shadow-xs flex flex-col justify-between space-y-3 hover:border-champagne-deep/40"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-semibold text-champagne-deep">
                    {c.tag}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-muted" aria-hidden="true" />
                </div>
                <h3 className="type-title text-ink font-semibold text-base md:text-lg">
                  {c.title}
                </h3>
                <p className="type-body-sm text-muted text-xs sm:text-sm leading-relaxed">
                  {c.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
