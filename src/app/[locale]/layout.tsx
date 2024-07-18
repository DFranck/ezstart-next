import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import Main from "@/components/layout/main";
import { cn } from "@/lib/utils";
import { getMessages } from "next-intl/server";
import { Inter } from "next/font/google";
import { Metadata } from "next/types";
import "../globals.css";
import Provider from "../provider";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  applicationName: "EzStart",
  title: {
    default: "EzStart - The Ultimate Boilerplate for Modern Web Development",
    template: "%s - EzStart",
  },
  description: "A comprehensive boilerplate for Next.js projects",
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    siteName: "EzStart",
    title: "EzStart - The Ultimate Boilerplate for Modern Web Development",
    description: "A comprehensive boilerplate for Next.js projects",
  },
  twitter: {
    card: "summary",
    title: "EzStart - The Ultimate Boilerplate for Modern Web Development",
    description: "A comprehensive boilerplate for Next.js projects",
  },
};
export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();
  const socialImage = "https://i.ibb.co/tsk3MLp/opengraph-image-2-1.png";
  return (
    <html lang={locale} suppressHydrationWarning={true} className="h-full">
      <head>
        <meta
          property="og:title"
          content="EzStart - The Ultimate Boilerplate for Modern Web Development"
        />
        <meta
          property="og:description"
          content="Jumpstart your web development projects with EzStart - The Ultimate Boilerplate for Modern Web Development, a comprehensive and flexible boilerplate. Built with modern technologies and best practices, EzStart provides a robust foundation for creating high-performance, scalable web applications."
        />
        <meta property="og:image" content={socialImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="EzStart" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ez-start.vercel.app/en" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="EzStart - The Ultimate Boilerplate for Modern Web Development"
        />
        <meta
          name="twitter:description"
          content="Jumpstart your web development projects with EzStart - The Ultimate Boilerplate for Modern Web Development, a comprehensive and flexible boilerplate. Built with modern technologies and best practices, EzStart provides a robust foundation for creating high-performance, scalable web applications."
        />
        <meta name="twitter:image" content={socialImage} />
        <meta name="twitter:image:width" content="1200" />
        <meta name="twitter:image:height" content="630" />
        <meta name="twitter:image:alt" content="EzStart" />
      </head>
      <body
        className={cn(inter.className, "min-h-screen flex flex-col h-full")}
      >
        <Provider messages={messages}>
          <Header />
          <Main>{children}</Main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
