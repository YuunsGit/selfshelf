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
        <Container />
      </body>
    </html>
  );
}
