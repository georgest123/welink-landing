"use client";

import CookieConsentBanner from "./CookieConsentBanner";
import { IntroGateProvider } from "./IntroGateContext";

export default function SiteChrome({ children }) {
  return (
    <IntroGateProvider>
      {children}
      <CookieConsentBanner />
    </IntroGateProvider>
  );
}
