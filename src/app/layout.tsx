import { Inika } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import React from "react";
import "react-toastify/dist/ReactToastify.css";
import Container from "@/components/ToastContainer";
import AuthProvider from "@/context/AuthContext";
import Header from "@/components/Header";
import { authorize } from "@/api/auth";
import SearchProvider from "@/context/SearchContext";

export const metadata = {
  title: {
    template: "%s | SelfShelf",
    default: "SelfShelf",
  },
  description:
    "Explore, borrow, and organize your books effortlessly with SelfShelf.",
};

const inika = Inika({
  subsets: ["latin"],
  weight: ["400", "700"],
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
        className={`${inika.className} flex min-h-screen flex-col justify-between overflow-x-hidden`}
      >
        <AuthProvider user={user}>
          <SearchProvider>
            <Header />
            {children}
          </SearchProvider>
          <Footer />
        </AuthProvider>
        <Container />
      </body>
    </html>
  );
}
