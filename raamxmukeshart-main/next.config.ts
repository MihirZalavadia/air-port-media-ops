// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   output: "export",
// };

// export default nextConfig;



// GITHUB_PAGES=true is set by .github/workflows/deploy-pages.yml —
// project pages serve from /<repo>/, so assets need the prefix there
const isGitHubPages = process.env.GITHUB_PAGES === "true";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isGitHubPages ? "/air-port-media-ops" : "",
  images: {
    unoptimized: true,
    qualities: [75, 100],
  },
};

module.exports = nextConfig;