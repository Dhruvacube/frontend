/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.jsdelivr.net", "dummyimage.com", "i.ytimg.com", "yt3.ggpht.com"],
    unoptimized: false,
  },
  swcMinify: true,
  distDir: "build",
  output: "export",
};

export default nextConfig;
