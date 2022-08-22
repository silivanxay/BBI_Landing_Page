/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");
const headers = async () => {
  return [
    {
      source: "/(.*)",
      headers: [
        {
          key: "X-Content-Type-Options",
          value: "nosniff",
        },
        {
          key: "X-Frame-Options",
          value: "SAMEORIGIN",
        },
        {
          key: "X-XSS-Protection",
          value: "1; mode=block",
        },
      ],
    },
  ];
};
const nextConfig = withPWA({
  reactStrictMode: false,
  env: {
    APP_USERNAME: process.env.APP_USERNAME,
    APP_PASSWORD: process.env.APP_PASSWORD,
    APP_GOOGLE_API_KEY: process.env.APP_GOOGLE_API_KEY,
  },
  images: {
    loader: "akamai",
    path: "",
  },
  pwa: {
    dest: "public",
    runtimeCaching,
    buildExcludes: [/middleware-manifest.json$/],
  },
  headers
});
module.exports = nextConfig;
