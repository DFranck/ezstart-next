import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import Main from "@/components/layout/main";
import { cn } from "@/lib/utils";
import { getMessages } from "next-intl/server";
import { Inter } from "next/font/google";
import "../globals.css";
import Provider from "../provider";

const inter = Inter({ subsets: ["latin"] });
export async function generateMetadata({ params: { locale } }: any) {
  const messages = (await getMessages(locale)) as any;
  const metaTitle = messages.app["meta-title"] as string;
  const metaDescription = messages.app["meta-description"].replace(
    /{meta-title}/g,
    metaTitle
  ) as string;

  return {
    title: metaTitle,
    description: metaDescription,
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: `https://ez-start.vercel.app/${locale}`,
      images: [
        {
          url: "https://ez-start.vercel.app/opengraph-image.png",
          alt: metaTitle,
          width: 1200,
          height: 630,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
      images: [
        {
          url: "https://ez-start.vercel.app/opengraph-image.png",
          alt: metaTitle,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}
export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();
  <head>
    <meta property="og:image" content="<generated>" />
    <meta property="og:image:type" content="<generated>" />
    <meta property="og:image:width" content="<generated>" />
    <meta property="og:image:height" content="<generated>" />
  </head>;
  return (
    <html lang={locale} suppressHydrationWarning={true} className="h-full">
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
