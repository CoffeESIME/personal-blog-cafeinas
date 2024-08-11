import type { Metadata } from "next";
import { Inter } from "next/font/google";
import BlogLayout from "@/components/layout/Layout";
import "./globals.css";
import { FloatNav } from "@/components/nav/FloatNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`flex flex-col h-full antialiased bg-top bg-no-repeat bg-neutral-50 bg-lights-sun  dark:bg-neutral-900 ${inter.className}`}>
        <div className="relative mb-16 sm:mb-32">
          <BlogLayout>{children}</BlogLayout>

          <div className="fixed bottom-0 translate bg-gradient-to-t from-black via-black/80 to-transparent text-white w-full h-32 z-10 "><FloatNav /></div>

        </div>
      </body>
    </html>
  );
}
