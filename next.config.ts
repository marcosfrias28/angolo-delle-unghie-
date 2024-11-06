import type { NextConfig } from 'next';
import { config } from "dotenv";

config();

const nextConfig: NextConfig = {
  experimental: {
    ppr: true,
  },
};

export default nextConfig;
