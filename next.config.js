/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com"],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.mp4$/,
      use: [
        {
          loader: "file-loader",
        },
      ],
    });

    config.module.rules.push({
      test: /\.glsl$/,
      use: {
        loader: "raw-loader",
      },
    });

    return config;
  },
};

module.exports = nextConfig;
