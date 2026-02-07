"use client";

import { useUser } from "@clerk/nextjs";

import DotLoader from "@/components/ui/dot-loader";

const WelcomeMsg = () => {
  const { user, isLoaded } = useUser();

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

      <p className="text-base text-white/70 lg:text-lg">
        Your financial summary overview
      </p>
    </div>
  );
};

export default WelcomeMsg;
