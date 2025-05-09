"use client";

import { cn } from "@/lib/utils";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";
import { useEffect } from "react";
import { CustomTooltip } from "./custom-tooltip";
import { useDataStore } from "@/stores/data.store";

export const ToggleThemeColor = () => {
  const color = useDataStore((state) => state.color);
  const setColor = useDataStore((state) => state.setColor);

  const colorThemes = [
    { colorKey: "blue", colorValue: "217.2 91.2% 59.8%" },
    { colorKey: "violet", colorValue: "258.3 89.5% 66.3%" },
    { colorKey: "cyan", colorValue: "191.6 91.4% 36.5%" },
    { colorKey: "pink", colorValue: "335.1 77.6% 42%" },
    { colorKey: "amber", colorValue: "32.1 94.6% 43.7%" },
  ];

  const applyTheme = (themeColor: string) => {
    console.log({ themeColor });
    const root = document.documentElement;
    console.log({ root });
    root.style.setProperty("--primary", themeColor);
    root.style.setProperty("--ring", themeColor);
    root.style.setProperty("--sidebar-ring", themeColor);
    const colorIndex = colorThemes.findIndex(
      ({ colorValue }) => themeColor == colorValue,
    );
    const colorKey = colorThemes[colorIndex]?.colorKey;
    setColor(colorKey);
  };

  useEffect(() => {
    const colorIndex = colorThemes.findIndex(
      ({ colorKey }) => colorKey == color,
    );
    const colorValue = colorThemes[colorIndex]?.colorValue;
    applyTheme(colorValue);
  }, []);

  return (
    <ToggleGroup
      type="single"
      variant="outline"
      onValueChange={(value) => {
        console.log({ value });
        if (!value) return;
        applyTheme(value);
      }}
      defaultValue={color}
      className="gap-3"
    >
      {colorThemes.map(({ colorKey, colorValue }) => (
        <CustomTooltip
          content={colorKey}
          key={colorKey}
          contentClass={`bg-${colorKey}-500`}
        >
          <ToggleGroupItem
            key={colorKey}
            value={colorValue}
            aria-label="Color Blue"
            className={cn(
              "rounded-lg !transition-all duration-1000 bg-blue-500 bg-purple-500 bg-cyan-500 bg-pink-500 bg-amber-500 bg-violet-500",
              `bg-${colorKey}-500 hover:bg-${colorKey}-500 data-[state=on]:bg-${colorKey}-500`,
              colorKey == color && "rounded-full",
            )}
          />
        </CustomTooltip>
      ))}
    </ToggleGroup>
  );
};
