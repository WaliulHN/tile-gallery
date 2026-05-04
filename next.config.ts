/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add this to prevent Next.js from failing on missing env vars during build
  env: {
    MONGODB_URI: process.env.MONGODB_URI,
    DATABASE_URL: process.env.DATABASE_URL,
    BETTER_AUTH_SECRET: process.env.BETTER_AUTH_SECRET,
    BETTER_AUTH_URL: process.env.BETTER_AUTH_URL,
  },
};

export default nextConfig;