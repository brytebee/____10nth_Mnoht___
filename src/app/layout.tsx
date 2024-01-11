import './globals.css';
import Head from 'next/head';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import ConditionalLayout from '@/components/navbar/ConidtionalNavbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TechVerse Academy',
  description: 'Unblocking Potentials',
};

const GTM = () => {
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-JHQPQM03GG"
      />
      <Script id="google-tag-manager">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-JHQPQM03GG');
        `}
      </Script>
    </>
  );
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GTM />
      <Head>
        <link rel="icon" href="./../../public/favicon_io/favicon.ico" />
        <link
          rel="icon"
          href="./../../public/favicon_io/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          href="./../../public/favicon_io/favicon-16x16.png"
          sizes="16x16"
        />
      </Head>
      <body className={inter.className}>
        <ConditionalLayout>
          {children}
        </ConditionalLayout>
        <script
          src="//code.tidio.co/w2uthdxqjop4fwttav2qbe1j1unkdai6.js"
          async
        ></script>
      </body>
    </html>
  );
}
