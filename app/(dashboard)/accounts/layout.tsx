import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accounts overview",
  description: "Create and manage multiple financial accounts in one place.",
};

export default function AccountsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
