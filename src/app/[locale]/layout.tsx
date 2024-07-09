import Footer from "@/components/layout/footer/footer";
import Header from "@/components/layout/header/header";
import Main from "@/components/layout/main";
import { cn } from "@/lib/utils";
import Providers from "@/providers/providers";
import { getMessages } from "next-intl/server";
import { Inter } from "next/font/google";
import "../globals.css";

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
      <body
        className={cn(inter.className, "min-h-screen flex flex-col h-full")}
      >
        <Providers messages={messages}>
          <Header />
          <Main>{children}</Main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
