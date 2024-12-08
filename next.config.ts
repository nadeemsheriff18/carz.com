import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Existing config options */
  images: {
    domains: ['cdn.imagin.studio'],
  },

  async redirects() {
    return [
      {
        source: '/', // Root path
        destination: '/home', // Redirect to the home page
        permanent: true, // Indicates a permanent redirect
      },
    ];
  },
};

export default nextConfig;
