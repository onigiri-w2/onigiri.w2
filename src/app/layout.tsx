import type { Metadata } from "next";
import { inter } from "../styles/fonts";
import "@/styles/globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "onigiri.w2",
  description: "onigiri.w2 Website",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja" className={inter.variable}>
      <body>
        <div className="max-w-2xl mx-auto px-5 my-4">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
