/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // image: {
  //   domains: ['media.licdn.com'],
  // },
  images: {
    domains: ['media.licdn.com', 'cdn.sanity.io'],
  },
};

module.exports = nextConfig;
