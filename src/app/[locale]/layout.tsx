import AskPermissionBtn from '@/components/ask-permission-btn';
import DesktopHeader from '@/components/desktop/desktop-header';
import InstallPromptButton from '@/components/mobile/install-prompt-button';
import MobileHeader from '@/components/mobile/mobile-header';
import Footer from '@/components/shared/footer';
import Main from '@/components/shared/main';
import { cn } from '@/lib/utils';
import { Metadata } from 'next';
import { getMessages } from 'next-intl/server';
import { Inter } from 'next/font/google';
import { headers } from 'next/headers';
import '../globals.css';
import Provider from '../provider';

const inter = Inter({ subsets: ['latin'] });

export async function generateMetadata(): Promise<Metadata> {
  return {
    applicationName: 'EzStart',
    title: {
      default: 'EzStart - The Ultimate Boilerplate for Modern Web Development',
      template: '%s - EzStart',
    },
    description: 'A comprehensive boilerplate for Next.js projects',
    manifest: '/manifest.json',
    openGraph: {
      type: 'website',
      siteName: 'EzStart',
      title: 'EzStart - The Ultimate Boilerplate for Modern Web Development',
      description: 'A comprehensive boilerplate for Next.js projects',
    },
    twitter: {
      card: 'summary',
      title: 'EzStart - The Ultimate Boilerplate for Modern Web Development',
      description: 'A comprehensive boilerplate for Next.js projects',
    },
  };
}

interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  const messages = await getMessages();
  const socialImage = 'https://i.ibb.co/tsk3MLp/opengraph-image-2-1.png';
  const headersList = headers();
  const locale = headersList.get('x-locale') || 'en';
  const deviceType = headersList.get('x-device-type') || 'desktop';

  return (
    <html
      lang={locale}
      data-device-type={deviceType}
      suppressHydrationWarning={true}
      className="h-full"
    >
      <head>
        <meta property="og:image" content={socialImage} />
        <meta name="twitter:image" content={socialImage} />
        <script type="module" src="/sw-registration.js" defer></script>
      </head>
      <body
        className={cn(inter.className, 'min-h-screen flex flex-col h-full')}
      >
        <Provider messages={messages}>
          {deviceType === 'desktop' && <DesktopHeader />}
          <Main className={cn('', { 'pb-10': deviceType !== 'desktop' })}>
            {children}
          </Main>
          {deviceType === 'desktop' && <Footer />}
          {deviceType !== 'desktop' && (
            <>
              <MobileHeader />
              <InstallPromptButton />{' '}
            </>
          )}
          <AskPermissionBtn />
        </Provider>
      </body>
    </html>
  );
}
