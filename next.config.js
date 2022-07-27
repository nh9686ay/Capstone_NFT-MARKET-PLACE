
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  images: {
    domains: ['ipfs.infura.io', 'foo.bar'], 
  },
  extends: [
    'plugin:@next/next/recommended',
  ],
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
}
