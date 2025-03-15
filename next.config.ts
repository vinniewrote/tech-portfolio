import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    dangerouslyAllowSVG: false,
  },
};

export default nextConfig;
