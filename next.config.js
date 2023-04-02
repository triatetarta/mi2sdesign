/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.ctfassets.net', 'cloudinary.com'],
  },
};

module.exports = nextConfig;
