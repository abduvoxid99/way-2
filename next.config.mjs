/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [{ protocol: "https", hostname: "cdn.u-code.io" }],
  },
  i18n: {
    locales: ["ru", "uz", "en"],
    defaultLocale: "ru",
  },
  async rewrites() {
    return [
      {
        source: "/:path*/submit",
        destination: "/:path*",
      },

      {
        source: "/:path*/form",
        destination: "/:path*",
      },

      {
        source: "/:path*/success",
        destination: "/:path*",
      },
    ];
  },
};

export default nextConfig;
