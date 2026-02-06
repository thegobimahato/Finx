"use client";

import { useUser } from "@clerk/nextjs";

const WelcomeMsg = () => {
  const { user, isLoaded } = useUser();

  return (
    <div className="mb-6 space-y-2">
      {/* Heading */}
      <h2 className="flex gap-3 text-2xl font-semibold tracking-tight text-white lg:text-4xl">
        <p className="">Welcome back,</p>
        {isLoaded ? (
          <>
            {user?.firstName && (
              <span className="text-white/90">{user.firstName}</span>
            )}
          </>
        ) : (
          <span className="inline-block h-8 w-32 animate-pulse rounded-full bg-white/20 lg:h-9 lg:w-40" />
        )}
      </h2>

      {/* Subtext */}
      <p className="text-base text-white/70 lg:text-lg">
        Your financial summary overview
      </p>
    </div>
  );
};



export default WelcomeMsg;
