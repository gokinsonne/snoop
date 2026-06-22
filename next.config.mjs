/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreDuringBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: "/play",
        destination: "https://lkvn.cc/a03dba",
        permanent: true,
      },
      {
        source: "/demo",
        destination: "https://lkvn.cc/a03dba",
        permanent: true,
      },
      {
        source: "/bonus",
        destination: "https://lkvn.cc/a03dba",
        permanent: true,
      },
      {
        source: "/app",
        destination: "https://lkvn.cc/a03dba",
        permanent: true,
      },
      {
        source: "/download-vpn",
        destination: "https://lkvn.cc/a03dba",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
