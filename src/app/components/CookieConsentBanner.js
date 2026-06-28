"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const CONSENT_KEY = "inloop_cookie_consent";

export default function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(CONSENT_KEY)) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    try {
      localStorage.setItem(CONSENT_KEY, JSON.stringify({ accepted: true, at: Date.now() }));
    } catch {}
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="cookie-consent-banner"
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
    >
      <div className="cookie-consent-inner glass-panel-chrome">
        <p className="cookie-consent-text">
          We use essential cookies to remember your preferences and keep the site working. See our{" "}
          <Link href="/privacy" className="cookie-consent-link">
            Privacy Policy
          </Link>{" "}
          for how we handle data.
        </p>
        <button type="button" onClick={accept} className="cookie-consent-button">
          Accept
        </button>
      </div>
    </div>
  );
}
