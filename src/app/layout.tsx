import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
      </body>
    </html>
  );
}
