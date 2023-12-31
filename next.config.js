const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, options) => {
    config.resolve.alias["@"] = path.resolve(__dirname, "./src");
    return config;
  },
};

module.exports = nextConfig;
