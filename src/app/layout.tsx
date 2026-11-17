import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-manrope',
});

export const metadata: Metadata = {
  title: 'Lista A — Aproximar Futuros | AAUMinho',
  description: 'Candidatura Lista A à Associação Académica da Universidade do Minho — Aproximar Futuros.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt" className={manrope.variable}>
      <body className={`${manrope.className} antialiased flex flex-col min-h-screen bg-white text-[#20232B]`}>
        <Header />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
