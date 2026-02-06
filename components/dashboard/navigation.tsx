"use client";

import { useState } from "react";

import { usePathname, useRouter } from "next/navigation";

import { Menu } from "lucide-react";
import { useMedia } from "react-use";

import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger
} from "../ui/sheet";
import NavButton from "./nav-button";

const routes = [
  {
    href: "/",
    label: "Overview",
  },
  {
    href: "/transctions",
    label: "Transactions",
  },
  {
    href: "/accounts",
    label: "Accounts",
  },
  {
    href: "/categories",
    label: "Categories",
  },
  {
    href: "/settings",
    label: "Settings",
  },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();
  const isMobile = useMedia("(max-width: 1024px)", false);

  const onClick = (href: string) => {
    router.push(href);
    setIsOpen(false);
  };

  if (isMobile) {
    return (
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="sm">
            <Menu className="size-4" />
          </Button>
        </SheetTrigger>

        <SheetContent side="left" className="px-4">
          <SheetTitle></SheetTitle>
          <SheetDescription></SheetDescription>

          <nav className="flex flex-col gap-y-2 pt-4">
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
