

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ponnipatrull.ee",
        port: "",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
