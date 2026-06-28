import CookieConsentBanner from "./CookieConsentBanner";

export default function SiteChrome({ children }) {
  return (
    <>
      {children}
      <CookieConsentBanner />
    </>
  );
}
