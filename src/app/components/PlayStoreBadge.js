"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { PLAY_STORE_URL, playStoreUrlWithUtm, utmFromSearch } from "@/lib/site";

/** Google Play badge that forwards the page's utm_* params (or an explicit `utm`) as the install referrer. */
export default function PlayStoreBadge({ utm = null }) {
  const [href, setHref] = useState(utm ? playStoreUrlWithUtm(utm) : PLAY_STORE_URL);
  useEffect(() => {
    if (utm) return;
    setHref(playStoreUrlWithUtm(utmFromSearch(window.location.search)));
  }, [utm]);
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="inline-block transition-opacity hover:opacity-90">
      <Image
        src="/images/feature-images/Get_it_on_Google_Play_Badge.png"
        alt="Get it on Google Play"
        width={140}
        height={46}
        className="h-11 w-auto"
      />
    </a>
  );
}
