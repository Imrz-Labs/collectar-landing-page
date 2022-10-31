// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
//   typescript: {
//     ignoreBuildErrors: true,
//   },
// };

// module.exports = nextConfig;

/** @type {import('next').NextConfig} */
module.exports = {
 
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },

  eslint: {
    ignoreDuringBuilds: true,
  },

  typescript: {
    ignoreBuildErrors: true,
  },
 
}

