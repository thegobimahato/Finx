import Link from "next/link";

import { Button } from "../ui/button";

import { cn } from "@/lib/utils";

type Props = {
  href: string;
  label: string;
  isActive?: boolean;
};
const NavButton = ({ href, label, isActive }: Props) => {
  return (
    <Button
      variant={"outline"}
      size={"sm"}
      className={cn(
        "border-0 text-white outline-0 transition focus:bg-white/30",
        isActive ? "bg-white/20" : "bg-transparent",
      )}
      asChild
    >
      <Link href={href}>{label}</Link>
    </Button>
  );
};

export default NavButton;
