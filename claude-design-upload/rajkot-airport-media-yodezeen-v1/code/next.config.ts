// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   output: "export",
// };

// export default nextConfig;



/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;