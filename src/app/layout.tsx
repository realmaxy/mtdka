import type { Metadata } from "next";
import "./globals.css";
import { Footer, Header } from "@/components";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "МТД-КА",
  description: "СТАЦИОНАРНЫЙ АРОЧНЫЙ МЕТАЛЛОДЕТЕКТОР МТД-КА",
};

const gilroy = localFont({
  src: [
    {
      path: "../../public/fonts/Gilroy-Medium.woff",
      weight: "400",
    },
    {
      path: "../../public/fonts/Gilroy-SemiBold.woff",
      weight: "600",
    },
    {
      path: "../../public/fonts/Gilroy-Bold.woff",
      weight: "700",
    },
  ],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={`${gilroy.className}flex flex-col`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
