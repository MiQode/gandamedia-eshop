import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from 'next';
import '../globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import localFont from 'next/font/local';

export const metadata: Metadata = {
  title: 'Ganda Media Agency Shop',
  description: 'The best collection from Ganda Media Agency',
};

const raleway = localFont({
  src: '../fonts/Raleway.woff2',
  variable: '--font-raleway',
  weight: '100 900',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${raleway.variable} antialiased`}>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
