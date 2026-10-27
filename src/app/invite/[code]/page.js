import { createPageMetadata } from "@/lib/seo";
import InvitePageClient from "./InvitePageClient";

export const metadata = {
  ...createPageMetadata({
    title: "You're invited to InLoop",
    description: "A friend invited you to InLoop — private social for the people who actually matter.",
    path: "/invite",
  }),
  robots: { index: false, follow: false },
};

export default async function InvitePage({ params }) {
  const { code } = await params;
  const safe = /^[A-Za-z0-9_-]{6,128}$/.test(code || "") ? code : null;
  return <InvitePageClient code={safe} />;
}
