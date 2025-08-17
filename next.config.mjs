/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { serverActions: { allowedOrigins: ['*'] } },
  ...(process.env.ANALYZE === 'true' && {
    webpack: config => {
      config.plugins.push(
        new (require('@next/bundle-analyzer'))({
          enabled: true,
        })
      );
      return config;
    },
  }),
};
export default nextConfig;
