import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["tailwindcss.com", "w7.pngwing"],
  },
};

export default withNextIntl(nextConfig);
