import type { Metadata } from "next";
import "./globals.css";
import AuthProvider from "@/auth/components/AuthProvider";
import { inter } from "../config/fonts";

export const metadata: Metadata = {
  title: "Tracer",
  description: "Tace Track all your notes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className={inter.className}>{children}</body>
      </AuthProvider>
    </html>
  );
}
