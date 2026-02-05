import { ClerkLoaded, ClerkLoading, SignIn } from "@clerk/nextjs";
import type { Metadata } from "next";

import { Spinner } from "@/components/ui/spinner";

export const metadata: Metadata = {
  title: "Sign In",
  description:
    "Sign in to Finx to access your personal finance dashboard and manage your expenses with ease.",
};

export default function SignInPage() {
  return (
    <>
      <ClerkLoaded>
        <SignIn />
      </ClerkLoaded>

      <ClerkLoading>
        <Spinner />
      </ClerkLoading>
    </>
  );
}
