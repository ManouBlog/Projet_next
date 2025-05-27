/** @type {import('next').NextConfig} */
const nextConfig = {
     reactStrictMode: true,
  images: {
    unoptimized: true, // Désactive l'optimisation si vous utilisez `next export`
  },
};

export default nextConfig;
