import { AbstractIntlMessages, NextIntlClientProvider } from "next-intl";
const LanguageProvider = ({
  children,
  messages,
}: {
  children: React.ReactNode;
  messages: AbstractIntlMessages;
}) => {
  return (
    <NextIntlClientProvider messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
};

export default LanguageProvider;
