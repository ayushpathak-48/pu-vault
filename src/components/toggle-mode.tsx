"use client";

import * as React from "react";
import { useTheme } from "next-themes";
// import { Switch } from "./ui/switch";

import { Laptop, Moon, Sun } from "lucide-react";

import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";
import { CustomTooltip } from "./custom-tooltip";
import { cn } from "@/lib/utils";

export function ToggleMode() {
  const { theme, setTheme } = useTheme();

  return (
    <ToggleGroup
      type="single"
      variant="outline"
      onValueChange={(value) => setTheme(value)}
      value={theme}
    >
      <CustomTooltip content="Light Mode">
        <ToggleGroupItem
          value="light"
          aria-label="Toggle bold"
          className={cn(
            theme == "light" && "bg-primary/100 text-primary-foreground",
          )}
        >
          <Sun className="h-4 w-4" />
        </ToggleGroupItem>
      </CustomTooltip>

      <CustomTooltip content="Dark Mode">
        <ToggleGroupItem
          value="dark"
          aria-label="Toggle italic"
          className={cn(
            theme == "dark" && "bg-primary/100 text-primary-foreground",
          )}
        >
          <Moon className="h-4 w-4" />
        </ToggleGroupItem>
      </CustomTooltip>
      <CustomTooltip content="System Theme">
        <ToggleGroupItem
          value="system"
          aria-label="Toggle italic"
          className={cn(
            theme == "system" && "bg-primary/100 text-primary-foreground",
          )}
        >
          <Laptop className="h-4 w-4" />
        </ToggleGroupItem>
      </CustomTooltip>
    </ToggleGroup>
  );
}
