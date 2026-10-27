/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        // Universal Links file has no extension; iOS requires application/json.
        source: "/.well-known/apple-app-site-association",
        headers: [{ key: "Content-Type", value: "application/json" }],
      },
      {
        source: "/.well-known/assetlinks.json",
        headers: [{ key: "Content-Type", value: "application/json" }],
      },
    ];
  },
};

export default nextConfig;
