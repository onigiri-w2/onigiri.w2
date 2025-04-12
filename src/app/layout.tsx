import type { Metadata } from "next";
import { inter } from "../styles/fonts";
import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "onigiri.w2",
  description: "onigiri.w2 Website",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja" className={inter.variable}>
      <body className="flex flex-col min-h-screen">
        <div className="max-w-(--site-max-width) mx-auto px-4 flex-grow w-full">
          <Header />
          <div className="py-8">
            {children}
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
