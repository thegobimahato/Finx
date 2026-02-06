import type { Metadata } from "next";

import { fontSans } from "./fonts/fonts";
import "./globals.css";

import { ClerkThemeProvider } from "@/components/providers/clerk-theme-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";

export const metadata: Metadata = {
  title: {
    default: "Finx | Personal finance, simplified",
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
      <body className={`${fontSans.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ClerkThemeProvider>{children}</ClerkThemeProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
