/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "img.freepik.com",
        protocol: "https",
      },
      {
        hostname: "as1.ftcdn.net",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
