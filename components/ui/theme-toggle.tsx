"use client";

import * as React from "react";

import { useTheme } from "next-themes";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Keyboard shortcut: D
  React.useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;

      if (
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.isContentEditable
      ) {
        return;
      }

      if (e.key.toLowerCase() === "d") {
        e.preventDefault();
        setTheme(theme === "dark" ? "light" : "dark");
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [theme, setTheme]);

  if (!mounted) {
    return (
      <button
        className="pointer-events-none rounded-md px-2 py-1.5"
        aria-hidden
      >
        <ThemeIcon />
      </button>
    );
  }

  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-md px-2 py-1.5 transition-all hover:bg-black/5 focus-visible:ring-2 focus-visible:ring-[oklch(0.51_0.21_286.5/0.5)] focus-visible:outline-none dark:hover:bg-white/10 dark:hover:text-white"
          >
            <ThemeIcon />
            <span className="sr-only">Toggle theme</span>
          </button>
        </TooltipTrigger>

        <TooltipContent side="bottom" className="flex items-center gap-2">
          <span>Toggle mode</span>
          <kbd className="rounded bg-neutral-800 px-1.5 py-0.5 text-xs font-medium text-white dark:bg-neutral-300 dark:text-black">
            D
          </kbd>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

function ThemeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="size-6 transition-transform! duration-300 dark:rotate-180"
      fill="none"
      stroke="rgba(255,255,255)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
      <path d="M12 3l0 18" />
      <path d="M12 9l4.65 -4.65" />
      <path d="M12 14.3l7.37 -7.37" />
      <path d="M12 19.6l8.85 -8.85" />
    </svg>
  );
}
