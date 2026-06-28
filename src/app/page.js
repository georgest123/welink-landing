import JsonLd from "./components/JsonLd";
import HomePageClient from "./HomePageClient";
import {
  createPageMetadata,
  mobileAppJsonLd,
  organizationJsonLd,
  webSiteJsonLd,
} from "@/lib/seo";

export const metadata = createPageMetadata({});

export default function Page() {
  return (
    <>
      <JsonLd data={[organizationJsonLd(), webSiteJsonLd(), mobileAppJsonLd()]} />
      <HomePageClient />
    </>
  );
}
