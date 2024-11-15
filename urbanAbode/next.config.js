/** @type {import('next').NextConfig} */
const nextConfig = {
  publicRuntimeConfig: {
    houses: "houses.csv",
  },
  images: {
    domains: ["p.rdcpix.com", "ap.rdcpix.com"], 
  },
};

module.exports = nextConfig;
