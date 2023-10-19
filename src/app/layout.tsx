import NavBar from "@/components/navbar/NavBar";
import "./globals.css";
import Head from "next/head";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TechVerse Academy",
  description: "Unblocking Potentials",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
