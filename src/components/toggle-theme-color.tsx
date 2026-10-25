"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { useDataStore } from "@/stores/data.store";
import { CustomTooltip } from "./custom-tooltip";
import { Check } from "lucide-react";

export const ToggleThemeColor = ({ className }: { className?: string }) => {
  const color = useDataStore((state) => state.color);
  const setColor = useDataStore((state) => state.setColor);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const colorThemes = [
    {
      colorKey: "blue",
      colorValue: "217.2 91.2% 59.8%",
      bgClass: "bg-blue-500",
      name: "Ocean Blue",
    },
    {
      colorKey: "cyan",
      colorValue: "191.6 91.4% 36.5%",
      bgClass: "bg-cyan-500",
      name: "Cyan Teal",
    },
    {
      colorKey: "pink",
      colorValue: "335.1 77.6% 42%",
      bgClass: "bg-pink-500",
      name: "Rose Pink",
    },
    {
      colorKey: "amber",
      colorValue: "32.1 94.6% 43.7%",
      bgClass: "bg-amber-500",
      name: "Amber Gold",
    },
    {
      colorKey: "gray",
      colorValue: "220 13% 91%",
      bgClass: "bg-zinc-400 dark:bg-zinc-500",
      name: "Neutral Slate",
    },
  ];

  const applyTheme = (themeColor: string, colorKey: string) => {
    const root = document.documentElement;
    root.style.setProperty("--primary", themeColor);
    root.style.setProperty("--ring", themeColor);
    root.style.setProperty("--sidebar-ring", themeColor);
    setColor(colorKey);
    if (colorKey === "gray") {
      root.style.setProperty("--primary-foreground", "0, 0%, 0%");
    } else {
      root.style.setProperty("--primary-foreground", "0, 0%, 100%");
    }
  };

  useEffect(() => {
    const current = colorThemes.find((t) => t.colorKey === color);
    if (current) {
      applyTheme(current.colorValue, current.colorKey);
    }
  }, []);

  return (
    <div
      className={cn(
        "w-full flex items-center justify-between px-2.5 py-2 rounded-2xl bg-white/50 dark:bg-zinc-900/60 border border-white/60 dark:border-white/[0.08] backdrop-blur-md",
        className,
      )}
    >
      {colorThemes.map(({ colorKey, colorValue, bgClass, name }) => {
        const isSelected = mounted ? color === colorKey : colorKey === "blue";

        return (
          <CustomTooltip content={name} key={colorKey}>
            <button
              type="button"
              onClick={() => applyTheme(colorValue, colorKey)}
              aria-label={`Theme color ${name}`}
              className={cn(
                "size-6 rounded-full transition-all duration-200 flex items-center justify-center shrink-0 cursor-pointer",
                bgClass,
                isSelected
                  ? "ring-2 ring-primary ring-offset-2 ring-offset-white dark:ring-offset-zinc-950 scale-110 shadow-xs"
                  : "hover:scale-105 opacity-80 hover:opacity-100",
              )}
            >
              {isSelected && (
                <Check
                  className={cn(
                    "size-3 text-white",
                    colorKey === "gray" && "text-black",
                  )}
                  strokeWidth={3}
                />
              )}
            </button>
          </CustomTooltip>
        );
      })}
    </div>
  );
};
