import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "tailwindcss.com",
      "w7.pngwing",
      "lh3.googleusercontent.com",
      "github.com",
    ],
  },
};

export default withNextIntl(nextConfig);
