"use client";

import * as React from "react";
import { useTheme } from "next-themes";
// import { Switch } from "./ui/switch";

import { Laptop, Moon, Sun } from "lucide-react";

import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";

export function ToggleMode() {
  const { theme, setTheme } = useTheme();

  return (
    <ToggleGroup
      type="single"
      variant="outline"
      onValueChange={(value) => setTheme(value)}
      value={theme}
    >
      <ToggleGroupItem value="light" aria-label="Toggle bold">
        <Sun className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="dark" aria-label="Toggle italic">
        <Moon className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="system" aria-label="Toggle italic">
        <Laptop className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
