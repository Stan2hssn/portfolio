/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ["images.unsplash.com"],
    },
    webpack: (config) => {
      config.module.rules.push({
        test: /\.glsl$/,
        use: "raw-loader",
      });
  
      return config;
    },
  };

module.exports = nextConfig
