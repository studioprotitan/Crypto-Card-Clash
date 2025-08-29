/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Add any hosts you’ll display images from
    remotePatterns: [
      { protocol: "https", hostname: "storage.googleapis.com", pathname: "/**" },
      { protocol: "https", hostname: "firebasestorage.googleapis.com", pathname: "/**" },
      { protocol: "https", hostname: "ipfs.io", pathname: "/ipfs/**" },
      { protocol: "https", hostname: "cdn.avaturn.me", pathname: "/**" }, // if you use Avaturn CDN
      // { protocol: "https", hostname: "*.yourcdn.com", pathname: "/**" }, // add others as needed
    ],
  },
};

module.exports = nextConfig;