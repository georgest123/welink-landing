import Image from "next/image";
import Link from "next/link";

export { SiteHeader } from "./SiteHeader";

const APP_STORE_URL = "https://apps.apple.com/gb/app/inloop-app/id6759622200";
const PLAY_STORE_URL =
  process.env.NEXT_PUBLIC_PLAY_STORE_URL || "https://play.google.com/store/apps/details?id=app.inloop";

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

export function DownloadBadges({ className = "" }) {
  return (
    <div className={`flex flex-wrap items-center justify-center gap-4 ${className}`.trim()}>
      <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="inline-block transition-opacity hover:opacity-90">
        <Image
          src="/images/feature-images/Download_on_the_App_Store_Badge_US-UK_RGB_wht_092917.svg"
          alt="Download on the App Store"
          width={140}
          height={44}
          className="h-11 w-auto"
        />
      </a>
      <a
        href={PLAY_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block transition-opacity hover:opacity-90"
      >
        <Image
          src="/images/feature-images/Get_it_on_Google_Play_Badge.png"
          alt="Get it on Google Play"
          width={140}
          height={46}
          className="h-11 w-auto"
        />
      </a>
    </div>
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
          <a
            href="mailto:support@inloop.uk"
            className="text-sm text-white/55 transition-colors hover:text-white/85"
          >
            support@inloop.uk
          </a>
        </div>
      </div>
    </footer>
  );
}

export function GlassPanel({ className = "", children }) {
  return <div className={`glass-panel ${className}`.trim()}>{children}</div>;
}
