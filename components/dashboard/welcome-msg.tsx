"use client";

import { useUser } from "@clerk/nextjs";

const WelcomeMsg = () => {
  const { user, isLoaded } = useUser();

  return (
    <div className="mb-6 space-y-2">
      {/* Heading */}
      <h2 className="text-2xl font-semibold tracking-tight text-white lg:text-4xl">
        {isLoaded ? (
          <>
            Welcome back
            {user?.firstName && (
              <span className="text-white/90">, {user.firstName}</span>
            )}
          </>
        ) : (
          <span className="inline-block h-8 w-48 animate-pulse rounded-md bg-white/20 lg:h-9" />
        )}
      </h2>

      {/* Subtext */}
      <p className="text-sm text-white/70 lg:text-lg">
        Here&apos;s a quick overview of your finances report.
      </p>
    </div>
  );
};

export default WelcomeMsg;
