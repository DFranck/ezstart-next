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
  return (
    <html lang={locale} suppressHydrationWarning={true} className="h-full">
      <head>
        <meta
          name="twitter:image"
          content={"https://i.ibb.co/tsk3MLp/opengraph-image-2-1.png"}
        />
        <meta
          name="og:image"
          content={"https://i.ibb.co/tsk3MLp/opengraph-image-2-1.png"}
        />
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
