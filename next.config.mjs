/** @type {import('next').NextConfig} */
const nextConfig = {
  env: { API_URL: "http://localhost:3001" },
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
