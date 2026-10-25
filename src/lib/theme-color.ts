export type ThemeColorKey =
  | "blue"
  | "cyan"
  | "pink"
  | "amber"
  | "emerald"
  | "purple"
  | "gray";

export interface ThemeColorItem {
  colorKey: ThemeColorKey;
  name: string;
  colorLight: string;
  colorDark: string;
  bgClass: string;
  primaryForegroundLight?: string;
  primaryForegroundDark?: string;
}

export const COLOR_THEMES: ThemeColorItem[] = [
  {
    colorKey: "blue",
    name: "Ocean Blue",
    colorLight: "217 91% 54%",
    colorDark: "215 95% 62%",
    bgClass: "bg-blue-500",
    primaryForegroundLight: "0 0% 100%",
    primaryForegroundDark: "220 40% 98%",
  },
  {
    colorKey: "cyan",
    name: "Cyan Teal",
    colorLight: "188 95% 40%",
    colorDark: "186 95% 52%",
    bgClass: "bg-cyan-500",
    primaryForegroundLight: "0 0% 100%",
    primaryForegroundDark: "0 0% 100%",
  },
  {
    colorKey: "pink",
    name: "Rose Pink",
    colorLight: "340 85% 54%",
    colorDark: "340 95% 66%",
    bgClass: "bg-pink-500",
    primaryForegroundLight: "0 0% 100%",
    primaryForegroundDark: "0 0% 100%",
  },
  {
    colorKey: "amber",
    name: "Amber Gold",
    colorLight: "38 96% 48%",
    colorDark: "40 98% 58%",
    bgClass: "bg-amber-500",
    primaryForegroundLight: "0 0% 100%",
    primaryForegroundDark: "0 0% 10%",
  },
  {
    colorKey: "emerald",
    name: "Emerald Green",
    colorLight: "152 76% 42%",
    colorDark: "152 82% 54%",
    bgClass: "bg-emerald-500",
    primaryForegroundLight: "0 0% 100%",
    primaryForegroundDark: "0 0% 100%",
  },
  {
    colorKey: "purple",
    name: "Electric Violet",
    colorLight: "265 85% 58%",
    colorDark: "265 95% 70%",
    bgClass: "bg-purple-500",
    primaryForegroundLight: "0 0% 100%",
    primaryForegroundDark: "0 0% 100%",
  },
  {
    colorKey: "gray",
    name: "Neutral Slate",
    colorLight: "220 14% 45%",
    colorDark: "220 14% 75%",
    bgClass: "bg-zinc-400 dark:bg-zinc-500",
    primaryForegroundLight: "0 0% 100%",
    primaryForegroundDark: "0 0% 0%",
  },
];

export const THEME_COLOR_STORAGE_KEY = "theme-color";

/**
 * Retrieve saved theme color synchronously.
 */
export function getSavedThemeColor(): string {
  if (typeof window === "undefined") return "blue";

  try {
    const match = document.cookie.match(new RegExp("(^| )theme-color=([^;]+)"));
    if (match && match[2]) {
      const decoded = decodeURIComponent(match[2]).trim();
      if (COLOR_THEMES.some((t) => t.colorKey === decoded)) {
        return decoded;
      }
    }

    const local = localStorage.getItem(THEME_COLOR_STORAGE_KEY);
    if (local && COLOR_THEMES.some((t) => t.colorKey === local)) {
      return local;
    }

    const clientData = localStorage.getItem("client-data");
    if (clientData) {
      const parsed = JSON.parse(clientData);
      if (
        parsed?.state?.color &&
        COLOR_THEMES.some((t) => t.colorKey === parsed.state.color)
      ) {
        return parsed.state.color;
      }
    }
  } catch {}

  return "blue";
}

/**
 * Applies the CSS variables to document.documentElement and persists to storage.
 */
export function applyThemeColor(colorKey?: string | null) {
  if (typeof window === "undefined") return;

  const resolvedKey =
    colorKey ||
    getSavedThemeColor() ||
    "blue";

  const current =
    COLOR_THEMES.find((t) => t.colorKey === resolvedKey) || COLOR_THEMES[0];
  const root = document.documentElement;
  const isDark = root.classList.contains("dark");

  const val = isDark ? current.colorDark : current.colorLight;
  const fg = isDark
    ? (current.primaryForegroundDark || "0 0% 100%")
    : (current.primaryForegroundLight || "0 0% 100%");

  root.style.setProperty("--primary", val);
  root.style.setProperty("--ring", val);
  root.style.setProperty("--sidebar-ring", val);
  root.style.setProperty("--sidebar-primary", val);
  root.style.setProperty("--primary-foreground", fg);
  root.style.setProperty("--sidebar-primary-foreground", fg);

  try {
    localStorage.setItem(THEME_COLOR_STORAGE_KEY, current.colorKey);
    document.cookie = `theme-color=${current.colorKey}; path=/; max-age=31536000; SameSite=Lax`;
  } catch {}
}
