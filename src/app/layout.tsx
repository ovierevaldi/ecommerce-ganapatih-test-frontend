import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "E Commerce Test",
  description: "Test for Fullstack Developer at PT Ganapatih",
};

export const robotoFont = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"]
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${robotoFont.className}`}
      >
        {children}
      </body>
    </html>
  );
}
