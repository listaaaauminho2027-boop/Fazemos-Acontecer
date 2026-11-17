import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Lista A — Fazemos Acontecer | AAUMinho',
  description:
    'Website oficial da candidatura Lista A — Fazemos Acontecer à Associação Académica da Universidade do Minho.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className={manrope.className}>
      <body className="min-h-screen flex flex-col bg-[#06112E] text-white antialiased selection:bg-[#2478FF] selection:text-white">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
