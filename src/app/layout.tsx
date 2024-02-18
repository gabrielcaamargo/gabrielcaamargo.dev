import { Inter } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  description: "Gabriel Camargo is a fullstack developer working in web and mobile development. 3 years of professional experience. Expertise in React, React Native, NestJS and NextJS.",
  title: 'Gabriel Camargo | Home'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
