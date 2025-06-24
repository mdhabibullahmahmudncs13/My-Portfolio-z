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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}