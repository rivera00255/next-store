/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
  images: {
    domains: ["localhost", "fakestoreapi.com"]
  },
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

module.exports = nextConfig
