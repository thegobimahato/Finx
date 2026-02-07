import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";

import { ThemeToggle } from "../../ui/theme-toggle";
import HeaderLogo from "./header-logo";
import Navigation from "./navigation";
import WelcomeMsg from "./welcome-msg";

import { Skeleton } from "@/components/ui/skeleton";
import { Spinner } from "@/components/ui/spinner";

const Header = () => {
  return (
    <header className="relative bg-linear-to-b from-violet-400 to-violet-500 p-4 pb-36 lg:px-14 lg:py-8">
      {/* Background noise overlay for subtle texture */}
      <div className="pointer-events-none absolute inset-0 bg-[url('/noise.png')] bg-repeat opacity-[0.60] mix-blend-multiply" />

      <div className="relative z-10 mx-auto max-w-screen-2xl">
        {/* Top bar: logo, navigation, theme & user actions */}
        <div className="mb-14 flex w-full items-center justify-between">
          {/* Left side: app logo and main navigation */}
          <div className="flex items-center lg:gap-x-16">
            <HeaderLogo />
            <Navigation />
          </div>

          {/* Right side: theme toggle and authenticated user menu */}
          <div className="flex items-center justify-center gap-3 overflow-hidden">
            <ThemeToggle />

            <div className="relative size-7">
              {/* Loading state */}
              <ClerkLoading>
                <Skeleton className="absolute inset-0 flex items-center justify-center rounded-full">
                  <Spinner className="size-4.5 text-white/80" />
                </Skeleton>
              </ClerkLoading>

              {/* Loaded state */}
              <ClerkLoaded>
                <div className="animate-in fade-in zoom-in-95 absolute inset-0 duration-200 ease-out">
                  <UserButton />
                </div>
              </ClerkLoaded>
            </div>
          </div>
        </div>

        {/* Personalized welcome message */}
        <WelcomeMsg />
      </div>
    </header>
  );
};

export default Header;
