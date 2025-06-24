import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <>
      <Header />
      <main className="container content">
        {children}
      </main>
      <Footer />
    </>
  );
}