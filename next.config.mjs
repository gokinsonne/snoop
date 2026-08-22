/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: "/",
        has: [{ type: "host", value: "www.snoopdoggdollar.org" }],
        destination: "https://snoopdoggdollar.org/",
        permanent: true,
      },
      {
        source: "/:path+",
        has: [{ type: "host", value: "www.snoopdoggdollar.org" }],
        destination: "https://snoopdoggdollar.org/:path+/",
        permanent: true,
      },
      {
        source: "/play",
        destination: "https://lkhv.pro/581ee4",
        permanent: true,
      },
      {
        source: "/app",
        destination: "https://lkhv.pro/581ee4",
        permanent: true,
      },
      {
        source: "/download-vpn",
        destination: "https://lkhv.pro/581ee4",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
    ]
  },
};

export default nextConfig;
