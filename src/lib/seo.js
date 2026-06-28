import {
  APP_STORE_URL,
  PLAY_STORE_URL,
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
  SUPPORT_EMAIL,
} from "./site";

export function createPageMetadata({
  title,
  description = SITE_DESCRIPTION,
  path = "",
  noIndex = false,
}) {
  const url = path ? `${SITE_URL}${path}` : SITE_URL;
  const fullTitle = title ? `${title} — ${SITE_NAME}` : `${SITE_NAME} — ${SITE_TAGLINE}`;

  return {
    title: fullTitle,
    description,
    keywords: SITE_KEYWORDS,
    alternates: { canonical: url },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true } },
    openGraph: {
      type: "website",
      locale: "en_GB",
      url,
      siteName: SITE_NAME,
      title: fullTitle,
      description,
      images: [
        {
          url: "/images/feature-images/hero2.PNG",
          width: 520,
          height: 780,
          alt: "InLoop app preview",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: ["/images/feature-images/hero2.PNG"],
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/images/InLoop.png`,
    email: SUPPORT_EMAIL,
    contactPoint: {
      "@type": "ContactPoint",
      email: SUPPORT_EMAIL,
      contactType: "customer support",
      availableLanguage: "English",
    },
  };
}

export function webSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
  };
}

export function mobileAppJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: SITE_NAME,
    operatingSystem: "iOS, Android",
    applicationCategory: "SocialNetworkingApplication",
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    downloadUrl: [APP_STORE_URL, PLAY_STORE_URL],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "GBP",
    },
    publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
  };
}
