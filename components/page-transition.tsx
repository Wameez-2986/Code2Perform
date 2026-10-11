"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { useLenis } from "lenis/react";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const lenis = useLenis();

  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitionStage, setTransitionStage] = useState<"enter" | "exit" | "idle">("enter");
  const [showProgress, setShowProgress] = useState(false);

  const prevPathname = useRef(pathname);
  const isNavigating = useRef(false);

  // When pathname changes (either via router.push or browser back/forward history):
  useEffect(() => {
    if (pathname !== prevPathname.current) {
      prevPathname.current = pathname;
      isNavigating.current = false;

      // Reset scroll position immediately while opacity is 0
      if (lenis) {
        lenis.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo(0, 0);
      }

      setDisplayChildren(children);
      setTransitionStage("enter");
      setShowProgress(true);

      const timer = setTimeout(() => {
        setTransitionStage("idle");
        setShowProgress(false);
      }, 350);

      return () => clearTimeout(timer);
    } else {
      setDisplayChildren(children);
    }
  }, [pathname, children, lenis]);

  // Initial mount transition
  useEffect(() => {
    const timer = setTimeout(() => {
      setTransitionStage("idle");
    }, 350);
    return () => clearTimeout(timer);
  }, []);

  // Intercept internal link clicks to perform smooth exit before route push
  useEffect(() => {
    const isHomePath = (path: string) => path === "/" || path === "/home";

    const handleLinkClick = (e: MouseEvent) => {
      // Find closest anchor element
      const anchor = (e.target as HTMLElement).closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      // Ignore external links, mailto, tel, target=_blank, and keyboard modifiers
      if (
        anchor.target === "_blank" ||
        href.startsWith("http://") ||
        href.startsWith("https://") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        href.startsWith("#") ||
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey ||
        e.defaultPrevented
      ) {
        return;
      }

      try {
        const currentUrl = new URL(window.location.href);
        const targetUrl = new URL(href, window.location.origin);

        // Same origin only
        if (targetUrl.origin !== currentUrl.origin) return;

        // Check if target is same page
        const isSamePage =
          targetUrl.pathname === currentUrl.pathname ||
          (isHomePath(targetUrl.pathname) && isHomePath(currentUrl.pathname));

        if (isSamePage) {
          // If on same page and target has an anchor, smooth scroll to it
          if (targetUrl.hash) {
            const targetElement = document.querySelector(targetUrl.hash);
            if (targetElement && lenis) {
              e.preventDefault();
              lenis.scrollTo(targetElement as HTMLElement);
            }
          }
          return;
        }

        // Avoid double trigger
        if (isNavigating.current) return;
        isNavigating.current = true;

        e.preventDefault();
        setTransitionStage("exit");
        setShowProgress(true);

        // Allow exit animation to complete before route navigation
        setTimeout(() => {
          router.push(href);
        }, 220);

        // Safety fallback in case navigation hangs
        setTimeout(() => {
          if (isNavigating.current) {
            isNavigating.current = false;
            setTransitionStage("idle");
            setShowProgress(false);
          }
        }, 2500);
      } catch {
        // Fallback to default browser behavior
      }
    };

    document.addEventListener("click", handleLinkClick, { capture: true });
    return () => {
      document.removeEventListener("click", handleLinkClick, { capture: true });
    };
  }, [router, lenis]);

  return (
    <>
      {showProgress && <div className="route-progress-bar" aria-hidden="true" />}
      <div
        className={`page-transition-wrapper flex-1 w-full flex flex-col ${
          transitionStage === "enter"
            ? "page-transition-enter"
            : transitionStage === "exit"
            ? "page-transition-exit"
            : ""
        }`}
      >
        {displayChildren}
      </div>
    </>
  );
}
