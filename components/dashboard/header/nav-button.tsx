import Link from "next/link";

import { cn } from "@/lib/utils";

import { Button } from "../../ui/button";

type Props = {
  href: string;
  label: string;
  isActive?: boolean;
};

const NavButton = ({ href, label, isActive }: Props) => {
  return (
    <Button
      asChild
      size="sm"
      variant="ghost"
      className={cn(
        "rounded-full px-4 text-sm font-medium transition-all",
        "text-white/80 hover:text-white",
        "hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white/30",

        // active state
        isActive && "bg-white/20 text-white shadow-sm backdrop-blur-md",

        // inactive
        !isActive && "bg-transparent",
      )}
    >
      <Link href={href}>{label}</Link>
    </Button>
  );
};

export default NavButton;
