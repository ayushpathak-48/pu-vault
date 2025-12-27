import withPWA from "next-pwa";

const nextConfig = withPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
})({
  images: {
    domains: ["i.ytimg.com"],
  },
});

export default nextConfig;
