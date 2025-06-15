import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  
};
module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true, // یا false بسته به نیاز شما
      },
    ];
  },
};

export default nextConfig;
