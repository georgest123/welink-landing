import { SITE_DESCRIPTION, SITE_NAME } from "@/lib/site";

export default function manifest() {
  return {
    name: SITE_NAME,
    short_name: SITE_NAME,
    description: SITE_DESCRIPTION,
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    icons: [
      { src: "/images/InLoop.png", sizes: "512x512", type: "image/png" },
      { src: "/images/simplelogox1.png", sizes: "180x54", type: "image/png" },
    ],
  };
}
