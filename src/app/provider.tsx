import { AbstractIntlMessages } from 'next-intl';
import React from 'react';
import { AuthProvider } from '../features/auth/session-provider';
import LanguageProvider from '../features/internationalization/language-provider';
import { ThemeProvider } from '../features/theme/theme-provider';
const Provider = ({
  children,
  messages,
}: {
  children: React.ReactNode;
  messages: AbstractIntlMessages;
}) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <LanguageProvider messages={messages}>
        <AuthProvider>{children}</AuthProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default Provider;
