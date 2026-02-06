import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";

import { Spinner } from "../ui/spinner";
import HeaderLogo from "./header-logo";
import Navigation from "./navigation";
import WelcomeMsg from "./welcome-msg";

const Header = () => {
  return (
    <header className="relative bg-linear-to-b from-violet-400 to-violet-500 px-4 py-8 pb-36 lg:px-14">
      {/* Noise layer */}
      <div className="pointer-events-none absolute inset-0 bg-[url('/noise.png')] bg-repeat opacity-[0.60] mix-blend-multiply" />

      <div className="relative z-10 mx-auto max-w-screen-2xl">
        <div className="mb-14 flex w-full items-center justify-between">
          <div className="flex items-center lg:gap-x-16">
            <HeaderLogo />

            <Navigation />
          </div>

          <ClerkLoaded>
            <UserButton />
          </ClerkLoaded>

          <ClerkLoading>
            <Spinner />
          </ClerkLoading>
        </div>

        <WelcomeMsg />
      </div>
    </header>
  );
};

export default Header;
