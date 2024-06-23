/** @type {import('next').NextConfig} */
const nextConfig = {
  env: { NEXT_PUBLIC_API_URL: "http://localhost:3000" },
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
