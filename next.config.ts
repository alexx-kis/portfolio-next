import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')], // Include the styles directory
    output: 'export',
  },
};

export default nextConfig;
