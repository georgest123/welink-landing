"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const homeNavItems = [
  { label: "Why InLoop", href: "/#why" },
  { label: "Features", href: "/#features" },
  { label: "Business", href: "/business" },
  { label: "Privacy", href: "/#trust" },
  { label: "Download", href: "/#download" },
];

const siteNavItems = [
  { label: "Home", href: "/" },
  { label: "Why InLoop", href: "/#why" },
  { label: "Features", href: "/#features" },
  { label: "Business", href: "/business" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Child Safety", href: "/child-safety" },
  { label: "Download", href: "/#download" },
];

function NavLink({ item, onNavigate, className }) {
  const isInternal = item.href.startsWith("/");

  if (isInternal) {
    return (
      <Link href={item.href} onClick={onNavigate} className={className}>
        {item.label}
      </Link>
    );
  }

  return (
    <a href={item.href} onClick={onNavigate} className={className}>
      {item.label}
    </a>
  );
}

export function SiteHeader({ compact = false }) {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const items = compact ? siteNavItems : homeNavItems;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;

    const closeOnDesktop = () => {
      const isDesktopWidth = window.matchMedia("(min-width: 1024px)").matches;
      const isPhoneLandscape = window.matchMedia(
        "(max-width: 1023px) and (orientation: landscape) and (min-height: 500px)",
      ).matches;
      if (isDesktopWidth || isPhoneLandscape) setMenuOpen(false);
    };

    closeOnDesktop();
    window.addEventListener("resize", closeOnDesktop);
    return () => window.removeEventListener("resize", closeOnDesktop);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-3 z-30 px-4 sm:px-6">
      <div
        className={`site-header-bar relative mx-auto max-w-6xl glass-panel-chrome px-4 py-3 sm:px-5${
          scrolled ? " glass-panel-chrome-scrolled" : ""
        }`}
      >
        <div className="flex items-center justify-between gap-4">
          <Link
            href={compact ? "/" : "/#top"}
            className="flex shrink-0 items-center transition-opacity hover:opacity-90"
            onClick={closeMenu}
          >
            <Image
              src="/images/simplelogox1.png"
              alt="InLoop"
              width={160}
              height={48}
              className="h-8 w-auto sm:h-9"
              priority
            />
          </Link>

          {!compact && (
            <nav
              className="site-header-nav site-header-nav--desktop hidden items-center gap-7 text-sm lg:flex"
              aria-label="Primary"
            >
              {items.map((item) => (
                <NavLink
                  key={item.href + item.label}
                  item={item}
                  className="site-header-link transition-colors"
                />
              ))}
            </nav>
          )}

          <div className="flex items-center gap-2">
            {compact ? (
              <Link href="/" className="site-header-home-link--desktop site-header-link hidden text-sm transition-colors lg:inline">
                ← Home
              </Link>
            ) : null}

            <button
              type="button"
              className="mobile-menu-toggle inline-flex lg:hidden"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-site-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence initial={false}>
          {menuOpen ? (
            <motion.nav
              id="mobile-site-menu"
              key="mobile-site-menu"
              initial={reduce ? false : { opacity: 0, height: 0 }}
              animate={reduce ? {} : { opacity: 1, height: "auto" }}
              exit={reduce ? {} : { opacity: 0, height: 0 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="mobile-site-menu lg:hidden"
              aria-label={compact ? "Site navigation" : "Primary"}
            >
              {(compact ? siteNavItems : homeNavItems).map((item, index) => (
                <motion.div
                  key={item.href + item.label}
                  initial={reduce ? false : { opacity: 0, y: -6 }}
                  animate={reduce ? {} : { opacity: 1, y: 0 }}
                  exit={reduce ? {} : { opacity: 0, y: -4 }}
                  transition={{
                    duration: 0.22,
                    delay: reduce ? 0 : 0.05 + index * 0.035,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <NavLink
                    item={item}
                    onNavigate={closeMenu}
                    className="mobile-site-menu-link"
                  />
                </motion.div>
              ))}
            </motion.nav>
          ) : null}
        </AnimatePresence>
      </div>
    </header>
  );
}
