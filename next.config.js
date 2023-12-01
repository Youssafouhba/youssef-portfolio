/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  basePath: "/youssef-portfolio",
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
