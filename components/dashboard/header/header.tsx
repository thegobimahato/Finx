import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";

import { Spinner } from "../../ui/spinner";
import { ThemeToggle } from "../../ui/theme-toggle";
import WelcomeMsg from "../welcome-msg";
import HeaderLogo from "./header-logo";
import Navigation from "./navigation";

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
          <div className="flex items-center justify-center gap-3">
            <ThemeToggle />

            {/* Show user button when Clerk is ready */}
            <ClerkLoaded>
              <UserButton />
            </ClerkLoaded>

            {/* Fallback spinner while Clerk loads */}
            <ClerkLoading>
              <Spinner />
            </ClerkLoading>
          </div>
        </div>

        {/* Personalized welcome message */}
        <WelcomeMsg />
      </div>
    </header>
  );
};

export default Header;
