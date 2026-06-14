import Image from "next/image";
import Link from "next/link";

export function WallpaperBackground() {
  return (
    <>
      <div
        className="wallpaper-layer"
        style={{ backgroundImage: "url('/images/background-images/background2.jpg')" }}
        aria-hidden
      />
      <div className="wallpaper-dim" aria-hidden />
      <div className="status-bar-fade" aria-hidden />
    </>
  );
}

export function SiteHeader({ compact = false }) {
  const items = compact
    ? []
    : [
        { label: "Why InLoop", href: "#why" },
        { label: "Features", href: "#features" },
        { label: "Trust", href: "#trust" },
        { label: "Get access", href: "#access" },
      ];

  return (
    <header className="sticky top-3 z-30 px-4 sm:px-6">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 glass-panel-chrome px-4 py-3 sm:px-5">
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
          <nav className="hidden items-center gap-7 text-sm md:flex">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-white/75 transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
        {!compact ? (
          <a href="#access" className="glass-button-primary hidden h-11 px-5 text-sm sm:inline-flex">
            Get access
          </a>
        ) : (
          <Link href="/" className="text-sm text-white/70 transition-colors hover:text-white">
            ← Home
          </Link>
        )}
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative border-t border-white/15 py-10 md:py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <Image src="/images/simplelogox1.png" alt="InLoop" width={120} height={36} className="h-7 w-auto" />
          <span className="text-sm text-white/50">© {new Date().getFullYear()}</span>
        </div>
        <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:gap-6 sm:text-left">
          <Link href="/privacy" className="text-sm text-white/55 transition-colors hover:text-white/85">
            Privacy Policy
          </Link>
          <Link href="/child-safety" className="text-sm text-white/55 transition-colors hover:text-white/85">
            Child Safety
          </Link>
          <p className="text-sm text-white/55">Your inner circle. Your wallpaper. Your pace.</p>
        </div>
      </div>
    </footer>
  );
}

export function GlassPanel({ className = "", children }) {
  return <div className={`glass-panel ${className}`.trim()}>{children}</div>;
}

export function LegalArticle({ title, updated, children }) {
  return (
    <div className="relative min-h-screen w-full text-white">
      <WallpaperBackground />
      <SiteHeader compact />
      <main className="relative z-10 mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14 lg:py-16">
        <article className="glass-panel px-5 py-8 sm:px-8 sm:py-10">
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h1>
          {updated ? <p className="mt-3 text-sm text-white/60">{updated}</p> : null}
          <div className="mt-8 flex flex-col gap-10 border-t border-white/10 pt-8">{children}</div>
        </article>
      </main>
    </div>
  );
}

export function LegalSection({ title, children }) {
  return (
    <section>
      <h2 className="text-lg font-semibold tracking-tight text-white/95 sm:text-xl">{title}</h2>
      <div className="mt-4 space-y-4 text-sm leading-relaxed text-white/80">{children}</div>
    </section>
  );
}
