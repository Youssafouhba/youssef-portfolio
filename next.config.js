/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: false,
  },
  basePath: "/youssef-portfolio",
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
