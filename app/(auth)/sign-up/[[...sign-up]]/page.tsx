import type { Metadata } from "next";

import { ClerkLoaded, ClerkLoading, SignUp } from "@clerk/nextjs";

import { Spinner } from "@/components/ui/spinner";

export const metadata: Metadata = {
  title: "Create Account",
  description:
    "Create your Finx account to track expenses, manage bank accounts, and stay in control of your finances.",
};

export default function SignUpPage() {
  return (
    <>
      <ClerkLoaded>
        <SignUp />
      </ClerkLoaded>

      <ClerkLoading>
        <Spinner />
      </ClerkLoading>
    </>
  );
}
