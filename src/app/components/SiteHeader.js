"use client";

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
            <nav className="site-header-nav hidden items-center gap-7 text-sm md:flex" aria-label="Primary">
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
            {!compact ? (
              <Link href="/#download" className="glass-button-primary hidden h-11 px-5 text-sm md:inline-flex">
                Download
              </Link>
            ) : (
              <Link href="/" className="site-header-link hidden text-sm transition-colors md:inline">
                ← Home
              </Link>
            )}

            <button
              type="button"
              className="mobile-menu-toggle md:hidden"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-site-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {menuOpen ? (
          <nav
            id="mobile-site-menu"
            className="mobile-site-menu md:hidden"
            aria-label={compact ? "Site navigation" : "Primary"}
          >
            {(compact ? siteNavItems : homeNavItems).map((item) => (
              <NavLink
                key={item.href + item.label}
                item={item}
                onNavigate={closeMenu}
                className="mobile-site-menu-link"
              />
            ))}
          </nav>
        ) : null}
      </div>
    </header>
  );
}
