"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { useDataStore } from "@/stores/data.store";
import { CustomTooltip } from "./custom-tooltip";
import { Check } from "lucide-react";
import {
  COLOR_THEMES,
  applyThemeColor,
  getSavedThemeColor,
} from "@/lib/theme-color";

export const ToggleThemeColor = ({ className }: { className?: string }) => {
  const color = useDataStore((state) => state.color);
  const setColor = useDataStore((state) => state.setColor);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Determine current active color
  const activeColor = mounted
    ? (color || getSavedThemeColor())
    : getSavedThemeColor();

  const handleSelectColor = (selectedKey: string) => {
    applyThemeColor(selectedKey);
    setColor(selectedKey);
  };

  return (
    <div
      className={cn(
        "w-full grid grid-cols-7 place-items-center py-2 px-1 rounded-2xl bg-white/50 dark:bg-zinc-900/60 border border-white/60 dark:border-white/[0.08] backdrop-blur-md",
        className,
      )}
    >
      {COLOR_THEMES.map(({ colorKey, bgClass, name }) => {
        const isSelected = activeColor === colorKey;

        return (
          <CustomTooltip content={name} key={colorKey}>
            <button
              type="button"
              onClick={() => handleSelectColor(colorKey)}
              aria-label={`Theme color ${name}`}
              className={cn(
                "size-6 rounded-full transition-all duration-200 flex items-center justify-center shrink-0 cursor-pointer",
                bgClass,
                isSelected
                  ? "ring-2 ring-primary ring-offset-2 ring-offset-white dark:ring-offset-zinc-950 scale-105 shadow-sm"
                  : "hover:scale-105 opacity-80 hover:opacity-100",
              )}
            >
              {isSelected && (
                <Check
                  className={cn(
                    "size-3 text-white drop-shadow-xs",
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
