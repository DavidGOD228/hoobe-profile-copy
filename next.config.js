/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
  ...nextConfig,
  images: {
    domains: ['hoo.be', 'devapp.hoo.be'], // Add any other allowed domains here
  },
}
