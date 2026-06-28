import JsonLd from "../components/JsonLd";
import { createPageMetadata, businessPageJsonLd } from "@/lib/seo";
import BusinessPageClient from "./BusinessPageClient";

export const metadata = createPageMetadata({
  title: "InLoop for Business",
  description:
    "Host events, sell tickets, run community hubs, and reach people who actually show up. InLoop gives venues, studios, organisers, and local brands privacy-first tools to build real-world communities.",
  path: "/business",
});

export default function BusinessPage() {
  return (
    <>
      <JsonLd data={businessPageJsonLd()} />
      <BusinessPageClient />
    </>
  );
}
