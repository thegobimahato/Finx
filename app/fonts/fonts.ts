import localFont from "next/font/local";

//  Body font – Satoshi
export const fontSans = localFont({
  src: [
    {
      path: "./satoshi/Satoshi-Variable.woff2",
      style: "normal",
      weight: "100 900",
    },
    {
      path: "./satoshi/Satoshi-VariableItalic.woff2",
      style: "italic",
      weight: "100 900",
    },
  ],
  variable: "--font-sans",
  display: "swap",
});