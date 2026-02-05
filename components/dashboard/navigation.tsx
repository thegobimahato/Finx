"use client";

import { usePathname } from "next/navigation";

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
  const pathname = usePathname();

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
