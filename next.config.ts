// next.config.ts
import withPWA from "next-pwa";
// import type { NextConfig } from "next";

// const baseConfig: NextConfig = {
//   // Your other Next.js config options here
// };

const nextConfig = withPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
})({});

export default nextConfig;
