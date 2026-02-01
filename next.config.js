/** @type {import('next').NextConfig} */
const nextConfig = {
  // Required for AWS Amplify deployment
  output: 'standalone',

  images: {
    remotePatterns: [],
    // Amplify handles image optimization
    unoptimized: false,
  },

  typescript: {
    ignoreBuildErrors: false,
  },

  // Ensure trailing slashes are consistent
  trailingSlash: false,

  // Disable x-powered-by header
  poweredByHeader: false,
};

module.exports = nextConfig;
