/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    images: false,
  },
  basePath: "/youssef-portfolio",
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
