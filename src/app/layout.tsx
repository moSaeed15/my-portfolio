import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Partytown } from '@builder.io/partytown/react';
import Head from 'next/head';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "MoSaeed's Portfolio",
  description: 'A portfoilio showcasing my various experiences,projects...',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {' '}
      <Head>
        <title>My App</title>
        <Partytown debug={true} forward={['dataLayer.push']} />
      </Head>
      <Script
        src="https://third-party-script.js"
        type="text/partytown"
      ></Script>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          // change it later to system for both dark and light mode
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
