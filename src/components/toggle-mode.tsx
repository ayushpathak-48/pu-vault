"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Laptop, Moon, Sun } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";
import { cn } from "@/lib/utils";

export function ToggleMode({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const activeTheme = mounted ? theme : "system";

  return (
    <ToggleGroup
      type="single"
      variant="outline"
      onValueChange={(value) => {
        if (value) setTheme(value);
      }}
      value={activeTheme}
      className={cn(
        "w-full grid grid-cols-3 gap-1 p-1 rounded-2xl bg-white/50 dark:bg-zinc-900/60 border border-white/60 dark:border-white/[0.08] backdrop-blur-md",
        className,
      )}
    >
      <ToggleGroupItem
        value="light"
        aria-label="Light Mode"
        className={cn(
          "h-8 rounded-xl text-xs font-semibold gap-1.5 transition-all flex items-center justify-center border-0",
          activeTheme === "light"
            ? "bg-white dark:bg-zinc-800 text-foreground shadow-xs border border-white/80 dark:border-white/10 font-bold"
            : "text-muted-foreground hover:text-foreground",
        )}
      >
        <Sun className="size-3.5" />
        <span className="text-[11px]">Light</span>
      </ToggleGroupItem>

      <ToggleGroupItem
        value="dark"
        aria-label="Dark Mode"
        className={cn(
          "h-8 rounded-xl text-xs font-semibold gap-1.5 transition-all flex items-center justify-center border-0",
          activeTheme === "dark"
            ? "bg-white dark:bg-zinc-800 text-foreground shadow-xs border border-white/80 dark:border-white/10 font-bold"
            : "text-muted-foreground hover:text-foreground",
        )}
      >
        <Moon className="size-3.5" />
        <span className="text-[11px]">Dark</span>
      </ToggleGroupItem>

      <ToggleGroupItem
        value="system"
        aria-label="System Mode"
        className={cn(
          "h-8 rounded-xl text-xs font-semibold gap-1.5 transition-all flex items-center justify-center border-0",
          activeTheme === "system"
            ? "bg-white dark:bg-zinc-800 text-foreground shadow-xs border border-white/80 dark:border-white/10 font-bold"
            : "text-muted-foreground hover:text-foreground",
        )}
      >
        <Laptop className="size-3.5" />
        <span className="text-[11px]">Auto</span>
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
