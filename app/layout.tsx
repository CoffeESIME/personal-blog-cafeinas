import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { FloatNav } from "@/components/nav/FloatNav";
import InteractiveBackground from "@/components/UI/InteractiveBackground/InteractiveBackground";
import BlogLayout from "@/components/layout/Layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fabian Romero",
  description: "Personal blog and portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body
        className={`flex flex-col min-h-screen antialiased ${inter.className}`}
      >
        <InteractiveBackground />
        <div className="relative flex-1">
          <BlogLayout>{children}</BlogLayout>
        </div>
        <div className="fixed bottom-0 w-full h-32 bg-gradient-to-t from-black via-black/80 to-transparent z-10">
          <FloatNav />
        </div>
      </body>
    </html>
  );
}
