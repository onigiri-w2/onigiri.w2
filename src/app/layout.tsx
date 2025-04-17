import type { Metadata } from "next";
import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme/ThemeProvider"
import { inter } from "../styles/fonts";

export const metadata: Metadata = {
  title: "onigiri.w2",
  description: "onigiri.w2 Website",
  alternates: {
    types: {
      'application/rss+xml': [
        {
          url: '/rss.xml',
          title: 'onigiri.w2 RSS Feed'
        }
      ],
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja" className={inter.variable} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <ThemeProvider>
          <div className="max-w-(--site-max-width) mx-auto px-4 flex-grow w-full my-10">
            <Header />
            <div className="mt-10">
              {children}
            </div>
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
