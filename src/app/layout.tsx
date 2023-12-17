import { Inika } from "next/font/google";
import "../styles/globals.css";
import Footer from "@/components/footer";
import React from "react";
import "react-toastify/dist/ReactToastify.css";
import Container from "@/components/toast-container";
import AuthProvider from "@/context/auth-context";
import Header from "@/components/header";
import { authorize } from "@/lib/auth";
import SearchProvider from "@/context/search-context";
import { cn } from "@/lib/utils";
import { Viewport } from "next";

export const metadata = {
  title: {
    template: "%s | SelfShelf",
    default: "SelfShelf",
  },
  description:
    "Explore, borrow, and organize your books effortlessly with Self Shelf.",
  metadataBase: new URL("https://ss.yunusemre.dev"),
  keywords: ["Book", "Library", "Bookshelf", "Online Library"],
  authors: [
    {
      name: "Yunus Emre Kepenek",
      url: "https://www.yunusemre.dev",
    },
    {
      name: "Furkan Adıktı",
      url: "https://www.0xy.dev",
    },
  ],
  creator: "Yunus Emre Kepenek",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ss.yunusemre.dev",
    title: "Self Shelf",
    description:
      "Explore, borrow, and organize your books effortlessly with Self Shelf.",
    siteName: "Self Shelf",
  },
  twitter: {
    card: "summary_large_image",
    title: "Self Shelf",
    description:
      "Explore, borrow, and organize your books effortlessly with Self Shelf.",
    images: ["https://ss.yunusemre.dev/og.jpg"],
    creator: "Yunus Emre Kepenek",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "https://ss.yunusemre.dev/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#955223",
};

const inika = Inika({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-inika",
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await authorize();

  return (
    <html lang="en">
      <body
        className={cn(
          inika.className,
          "flex min-h-screen flex-col justify-between overflow-x-hidden",
        )}
      >
        <AuthProvider user={user}>
          <SearchProvider>
            <Header />
            {children}
          </SearchProvider>
          <Footer />
        </AuthProvider>
        <Container style={inika.variable} />
      </body>
    </html>
  );
}
