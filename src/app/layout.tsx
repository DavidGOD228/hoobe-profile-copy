import './globals.css'
import { Inter } from 'next/font/google'
import { ReactNode } from "react";
import Head from "next/head";

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
  <html lang={"en"}>
    <Head>
      <title>{"hoo.be"}</title>
      <link
          rel="icon"
          type="image/png"
          href="./favicon.png"
      />
    </Head>

    <body className={inter.className}>
      {children}
    </body>
  </html>
  )
}
