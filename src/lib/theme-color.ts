export type ThemeColorKey = "blue" | "cyan" | "pink" | "amber" | "gray";

export interface ThemeColorItem {
  colorKey: ThemeColorKey;
  colorValue: string;
  bgClass: string;
  name: string;
  primaryForeground?: string;
}

export const COLOR_THEMES: ThemeColorItem[] = [
  {
    colorKey: "blue",
    colorValue: "217.2 91.2% 59.8%",
    bgClass: "bg-blue-500",
    name: "Ocean Blue",
    primaryForeground: "0 0% 100%",
  },
  {
    colorKey: "cyan",
    colorValue: "191.6 91.4% 36.5%",
    bgClass: "bg-cyan-500",
    name: "Cyan Teal",
    primaryForeground: "0 0% 100%",
  },
  {
    colorKey: "pink",
    colorValue: "335.1 77.6% 42%",
    bgClass: "bg-pink-500",
    name: "Rose Pink",
    primaryForeground: "0 0% 100%",
  },
  {
    colorKey: "amber",
    colorValue: "32.1 94.6% 43.7%",
    bgClass: "bg-amber-500",
    name: "Amber Gold",
    primaryForeground: "0 0% 100%",
  },
  {
    colorKey: "gray",
    colorValue: "220 13% 91%",
    bgClass: "bg-zinc-400 dark:bg-zinc-500",
    name: "Neutral Slate",
    primaryForeground: "0 0% 0%",
  },
];

export const THEME_COLOR_STORAGE_KEY = "theme-color";

export function applyThemeColor(colorKey?: string | null) {
  if (typeof window === "undefined") return;

  const resolvedKey =
    colorKey ||
    localStorage.getItem(THEME_COLOR_STORAGE_KEY) ||
    "blue";

  const current =
    COLOR_THEMES.find((t) => t.colorKey === resolvedKey) || COLOR_THEMES[0];
  const root = document.documentElement;

  root.style.setProperty("--primary", current.colorValue);
  root.style.setProperty("--ring", current.colorValue);
  root.style.setProperty("--sidebar-ring", current.colorValue);
  root.style.setProperty("--sidebar-primary", current.colorValue);

  const fg = current.primaryForeground || "0 0% 100%";
  root.style.setProperty("--primary-foreground", fg);
  root.style.setProperty("--sidebar-primary-foreground", fg);

  try {
    localStorage.setItem(THEME_COLOR_STORAGE_KEY, current.colorKey);
  } catch {}
}
