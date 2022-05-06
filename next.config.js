/** @type {import('next').NextConfig} */
const optimizedImages = require('next-optimized-images');
const path = require('path');
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
}

module.exports = nextConfig
