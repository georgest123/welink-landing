"use client";

import { DownloadBadges, GlassPanel, SiteFooter, SiteHeader, WallpaperBackground } from "../../components/AppShell";

/**
 * Personal invite landing page (https://www.inloop.uk/invite/<inviterUid>).
 * - "Open InLoop" tries the app via the inloop://invite/<code> scheme (app stores the inviter for sign-up).
 * - Play badge passes utm_source=invite&utm_content=<code> through the install referrer so the
 *   Android app can attribute the sign-up after a fresh install.
 * Attribution only: no auto-connect, rewards or notifications.
 */
export default function InvitePageClient({ code }) {
  const utm = code
    ? { utm_source: "invite", utm_medium: "link", utm_campaign: "personal_invite", utm_content: code }
    : null;
  return (
    <>
      <WallpaperBackground />
      <SiteHeader />
      <main className="relative mx-auto flex min-h-[70vh] max-w-xl flex-col items-center justify-center px-4 py-16 text-center">
        <GlassPanel className="w-full p-8">
          <h1 className="text-3xl font-bold text-white">You&apos;re invited to InLoop</h1>
          <p className="mt-3 text-white/70">
            A friend wants you in their loop. Get the app and create your account to join.
          </p>
          {code && (
            <a
              href={`inloop://invite/${code}`}
              className="mt-6 inline-block rounded-full bg-white px-6 py-3 font-semibold text-black transition-opacity hover:opacity-90"
            >
              Already have InLoop? Open the app
            </a>
          )}
          <DownloadBadges className="mt-6" utm={utm} />
        </GlassPanel>
      </main>
      <SiteFooter />
    </>
  );
}
