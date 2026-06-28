"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export function SiteHeader({ compact = false }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const items = compact
    ? []
    : [
        { label: "Why InLoop", href: "#why" },
        { label: "Features", href: "#features" },
        { label: "Business", href: "/business" },
        { label: "Privacy", href: "#trust" },
        { label: "Download", href: "#download" },
      ];

  return (
    <header className="sticky top-3 z-30 px-4 sm:px-6">
      <div
        className={`site-header-bar mx-auto flex max-w-6xl items-center justify-between gap-4 glass-panel-chrome px-4 py-3 sm:px-5${
          scrolled ? " glass-panel-chrome-scrolled" : ""
        }`}
      >
        <Link href={compact ? "/" : "#top"} className="flex shrink-0 items-center hover:opacity-90 transition-opacity">
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
            {items.map((item) =>
              item.href.startsWith("/") ? (
                <Link key={item.href} href={item.href} className="site-header-link transition-colors">
                  {item.label}
                </Link>
              ) : (
                <a key={item.href} href={item.href} className="site-header-link transition-colors">
                  {item.label}
                </a>
              ),
            )}
          </nav>
        )}
        {!compact ? (
          <a href="#download" className="glass-button-primary hidden h-11 px-5 text-sm sm:inline-flex">
            Download
          </a>
        ) : (
          <Link href="/" className="site-header-link text-sm transition-colors">
            ← Home
          </Link>
        )}
      </div>
    </header>
  );
}
