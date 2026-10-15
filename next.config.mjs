import createMDX from "@next/mdx";
import { withPayload } from "@payloadcms/next/withPayload";

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below
};

export default withPayload(withMDX(nextConfig), { devBundleServerPackages: false });
