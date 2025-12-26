/** @type {import('next').NextConfig} */
const nextConfig = {
  // Bu yerda "output: standalone" YO'Q bo'lishi kerak
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
