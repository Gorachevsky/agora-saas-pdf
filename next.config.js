/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirect() {
    return [
      {
        source: "/sign-in",
        destination: "api/auth/login",
        pemanent: true,
      },
      {
        source: "/sign-in",
        destination: "/api/auth/register",
        permanent: true,
      },
    ]
  },
  webpack: (
    config,
    { buildId, dev, isServer, defaulLoaders, webpack }
  ) => {
    config.resolve.alias.canvas = false;
    config.resolve.alias.encoding = false;
    return config;
  },
}

module.exports = nextConfig
