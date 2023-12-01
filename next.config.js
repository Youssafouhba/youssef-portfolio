/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {unoptimized: false},experimental: {images: {unoptimized: false}},
    reactStrictMode: true,
  swcMinify: true,

}
module.exports = nextConfig
