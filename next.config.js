/ @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  output: "standalone",
  experimental: {
    scrollRestoration: true,
  },
  webpack(config) {
    return config;
  },
};