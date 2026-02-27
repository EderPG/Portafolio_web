/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/Portafolio_web",
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig
