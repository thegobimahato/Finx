"use client";

import { useState } from "react";

import { usePathname, useRouter } from "next/navigation";

import { Menu } from "lucide-react";
import { useMedia } from "react-use";

import { Button } from "../../ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "../../ui/sheet";
import NavButton from "./nav-button";

// Main dashboard navigation routes
const routes = [
  { href: "/", label: "Overview" },
  { href: "/transactions", label: "Transactions" },
  { href: "/accounts", label: "Accounts" },
  { href: "/categories", label: "Categories" },
  { href: "/settings", label: "Settings" },
];

const Navigation = () => {
  // Controls mobile navigation drawer state
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  // Detect mobile screen size
  const isMobile = useMedia("(max-width: 1024px)", false);

  // Navigate to route and close mobile drawer
  const onClick = (href: string) => {
    router.push(href);
    setIsOpen(false);
  };

  // Mobile navigation (sheet / drawer)
  if (isMobile) {
    return (
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        {/* Button that opens the mobile menu */}
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className="dark:bg-white dark:hover:bg-white/80"
          >
            <Menu className="size-4 text-black" />
          </Button>
        </SheetTrigger>

        {/* Mobile menu content */}
        <SheetContent side="left" className="px-4">
          {/* Sheet title & description intentionally left empty */}
          <SheetTitle />
          <SheetDescription />

          {/* Mobile navigation links */}
          <nav className="flex flex-col gap-y-2 pt-5">
            {routes.map((route) => (
              <Button
                key={route.href}
                variant={route.href === pathname ? "secondary" : "ghost"}
                onClick={() => onClick(route.href)}
                className="w-full justify-start"
              >
                {route.label}
              </Button>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    );
  }

  // Desktop navigation
  return (
    <nav className="hidden items-center gap-x-2 lg:flex">
      {routes.map((route) => (
        <NavButton
          key={route.label}
          href={route.href}
          label={route.label}
          isActive={pathname === route.href}
        />
      ))}
    </nav>
  );
};

export default Navigation;
