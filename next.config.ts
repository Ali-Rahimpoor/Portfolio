/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // فعال کردن خروجی استاتیک
  images: {
    unoptimized: true, // غیرفعال کردن بهینه‌سازی تصاویر (برای GitHub Pages)
  },
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

module.exports = nextConfig;