import JsonLd from "../components/JsonLd";
import { createPageMetadata, myPulsePageJsonLd } from "@/lib/seo";
import MyPulsePageClient from "./MyPulsePageClient";

export const metadata = createPageMetadata({
  title: "MyPulse",
  description:
    "MyPulse helps you track nutrition, workouts, and progress — with Apple Health sync and Pulse Coach. Your fitness, in one pulse. By WeLink App LTD.",
  path: "/mypulse",
});

export default function MyPulsePage() {
  return (
    <>
      <JsonLd data={myPulsePageJsonLd()} />
      <MyPulsePageClient />
    </>
  );
}
