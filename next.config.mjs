/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  async redirects() {
    return [
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
};

export default nextConfig;
