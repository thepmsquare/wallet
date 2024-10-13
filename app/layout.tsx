import type { Metadata } from "next";
import "@fontsource-variable/outfit";
import "@fontsource-variable/fraunces";
import "./globals.css";

import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "wallet",
  description: "personal finance tracking.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children} <Toaster />
      </body>
    </html>
  );
}
