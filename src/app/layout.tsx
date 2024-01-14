import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";

import "@/firebase/config";
import AuthGoogleProvider from "@/context/AuthGoogle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FastWind",
  description: "A website game fast as wind~",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Header />
        <AuthGoogleProvider>{children}</AuthGoogleProvider>
      </body>
    </html>
  );
}
