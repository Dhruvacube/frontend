/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.jsdelivr.net", "i.ytimg.com", "yt3.ggpht.com"],
    unoptimized: true,
  },
  swcMinify: true,
  distDir: "build",
  output: "export",
};

export default nextConfig;
