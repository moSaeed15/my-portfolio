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
      <head>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-35WRVK3WZJ"></Script>
        <Script id="google-analytics">
          {`  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-35WRVK3WZJ');`}
        </Script>
      </head>
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
