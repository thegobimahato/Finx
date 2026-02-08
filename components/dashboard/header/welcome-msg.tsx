"use client";

import { usePathname } from "next/navigation";

import { useUser } from "@clerk/nextjs";

import DotLoader from "@/components/ui/dot-loader";

const subtitleMap: Record<string, string> = {
  "/": "Your financial summary at a glance",
  "/transactions": "Review and track all your transactions",
  "/accounts": "Manage and organize your financial accounts",
  "/categories": "Organize transactions with categories",
  "/settings": "Manage your account preferences",
};

const WelcomeMsg = () => {
  const { user, isLoaded } = useUser();
  const pathname = usePathname();

  const subtitle = subtitleMap[pathname] ?? "Manage your finances";

  return (
    <div className="mb-6 space-y-2">
      <h2 className="flex gap-3 text-2xl font-semibold tracking-tight text-white lg:text-4xl">
        <span>Welcome back,</span>

        {isLoaded ? (
          user?.firstName && (
            <span className="text-white/90">{user.firstName}</span>
          )
        ) : (
          <DotLoader />
        )}
      </h2>

      <p className="text-base text-white/70 lg:text-lg">{subtitle}</p>
    </div>
  );
};

export default WelcomeMsg;
