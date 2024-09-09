import type { Metadata } from "next";
import "../styles/global.css";


import { Poppins } from 'next/font/google'


export const poppins = Poppins({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});


export const metadata: Metadata = {
  title: "Findshop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={poppins.className} lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
