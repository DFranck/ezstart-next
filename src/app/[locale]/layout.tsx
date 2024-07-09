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
  const appTitle = messages.app["appTitle"] as string;
  const appDescription = messages.app["appDescription"].replace(
    "{appTitle}",
    appTitle
  ) as string;

  console.log(appTitle, appDescription);
  return {
    title: appTitle,
    description: appDescription,
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
