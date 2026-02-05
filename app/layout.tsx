import type { Metadata } from "next";

import { fontSans } from "./fonts/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Finx | Personal finance app",
    template: "%s | Finx",
  },
  description:
    "Finx is a modern personal finance app to track expenses, manage bank accounts, and understand your cash flow.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fontSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
