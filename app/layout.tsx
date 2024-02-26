"use client";
// import type { Metadata } from "next";
import Head from 'next/head';
import { Inter } from "next/font/google";
import { ChakraProvider } from "@chakra-ui/react";
import Footer from "./components/landingPage/footer/index";
import Header from "./components/landingPage/header/index";
import { useRef, useState, useEffect } from 'react';

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Digilancer",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const footerRef = useRef<HTMLDivElement>(null);
  const [isFooterInView, setIsFooterInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsFooterInView(entry.isIntersecting),
      { rootMargin: '100px' }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);


  return (
    <html lang="en">
      <Head>
        <title>Digilancer</title>
        <meta name="description" content="Digilancer" />
        <link rel="icon" href="/favicon.ico?v=4" />
      </Head>
      <body>
        <ChakraProvider>
          <Header isFooterInView={isFooterInView} />
        <main>{children}</main>
          <div ref={footerRef}>
            <Footer />
          </div>
        </ChakraProvider>
      </body>
    </html>
  );
}