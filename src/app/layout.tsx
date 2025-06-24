import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Inter } from 'next/font/google';
import '@/styles/globals.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Elias — front-end developer and web designer',
  description: 'I craft responsive websites where technologies meet creativity',
  themeColor: '#C778DD',
  openGraph: {
    title: 'Elias — front-end developer and web designer',
    description: 'I craft responsive websites where technologies meet creativity',
    type: 'website',
    locale: 'en',
    siteName: 'Elias',
  },
};

export default async function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}