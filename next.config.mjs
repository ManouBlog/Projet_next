/** @type {import('next').NextConfig} */
const nextConfig = {
     output: 'standalone',
  images: {
    unoptimized: true, // Désactive l'optimisation si vous utilisez `next export`
  },
};

export default nextConfig;
