/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/arivora-global-',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
}

module.exports = nextConfig