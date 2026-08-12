/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Serve modern formats to browsers that accept them. The editorial JPGs are
    // the heaviest thing on the page; AVIF typically lands 30–50% under JPEG at
    // the same visual quality, WebP is the fallback for older browsers.
    formats: ["image/avif", "image/webp"],
    // The portfolio masonry renders at fixed column widths — trimming the
    // default ladder avoids generating derivatives nothing ever requests.
    deviceSizes: [390, 640, 750, 828, 1080, 1200, 1440, 1920],
    imageSizes: [64, 128, 256, 384, 480],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
};

export default nextConfig;
