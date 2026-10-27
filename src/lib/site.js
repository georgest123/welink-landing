export const SITE_NAME = "InLoop";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.inloop.uk";
export const SITE_DESCRIPTION =
  "InLoop is a privacy-first social app for your inner circle — community hubs, events, messages, and calls without algorithmic feeds. Available on iOS and Android.";
export const SITE_TAGLINE = "Social for the people who actually matter.";
export const SUPPORT_EMAIL = "support@inloop.uk";

export const APP_STORE_URL = "https://apps.apple.com/gb/app/inloop-app/id6759622200";
export const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=app.inloop";

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content"];

/**
 * Play Store URL carrying UTM params through the Play Install Referrer, e.g.
 * https://play.google.com/store/apps/details?id=app.inloop&referrer=utm_source%3Dx%26utm_medium%3Dy%26utm_campaign%3Dz
 * The Android app reads this once per install into the `acquisition_source` user property.
 */
export function playStoreUrlWithUtm(utm = {}) {
  const ref = new URLSearchParams();
  for (const k of UTM_KEYS) {
    const v = utm[k];
    if (v) ref.set(k, String(v).slice(0, 100));
  }
  const referrer = ref.toString();
  return referrer ? `${PLAY_STORE_URL}&referrer=${encodeURIComponent(referrer)}` : PLAY_STORE_URL;
}

/** Picks utm_* params from a query string (defaults utm_source=website when none present). */
export function utmFromSearch(search) {
  const params = new URLSearchParams(search || "");
  const utm = {};
  for (const k of UTM_KEYS) if (params.get(k)) utm[k] = params.get(k);
  if (!utm.utm_source) {
    utm.utm_source = "website";
    utm.utm_medium = utm.utm_medium || "web";
  }
  return utm;
}

export const SITE_KEYWORDS = [
  "InLoop",
  "inner circle social app",
  "private social network",
  "slow social",
  "privacy-first social media",
  "social app UK",
  "community hubs",
  "invite-only social",
  "no algorithm feed",
  "InLoop for business",
  "event ticketing app",
  "community hub platform",
];
