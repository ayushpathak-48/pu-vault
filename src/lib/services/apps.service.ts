export interface AppItem {
  id: string;
  appName: string;
  packageName: string;
  playStoreUrl: string;
  iconUrl: string;
  status: "production" | "published" | "in_progress" | "closed_testing" | "coming_soon" | "draft" | string;
  category: string;
  tagline: string;
  description: string;
  featured?: boolean;
  year?: string;
  client?: string;
  stack?: string[];
  services?: string[];
  highlights?: string[];
}

export const APPS_JSON_URL =
  "https://raw.githubusercontent.com/kachakaran6/Application-json/main/app.json";

export const APPS_ASSETS_BASE_URL =
  "https://raw.githubusercontent.com/kachakaran6/Application-json/main";

/**
 * Normalizes relative icon paths (e.g. /images/vaultx.png) to full GitHub raw assets URLs.
 */
export function resolveAppIcon(iconUrl?: string): string {
  if (!iconUrl) return "";
  if (iconUrl.startsWith("http://") || iconUrl.startsWith("https://")) {
    return iconUrl;
  }
  const cleanPath = iconUrl.startsWith("/") ? iconUrl : `/${iconUrl}`;
  return `${APPS_ASSETS_BASE_URL}${cleanPath}`;
}

/**
 * Fallback apps in case of network failure during build/SSR.
 */
export const fallbackApps: AppItem[] = [
  {
    id: "com.vaultx.vault_x",
    appName: "Vault X",
    packageName: "com.vaultx.vault_x",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.vaultx.vault_x",
    iconUrl: "/images/vaultx.png",
    status: "production",
    category: "Android utility & Privacy",
    tagline: "Secure on-device digital bookmark vault",
    description: "The ultimate link vault. Save, organize, and secure your digital bookmarks effortlessly.",
    featured: true,
    year: "2025",
    stack: ["Flutter", "Dart", "SQLite", "AES-256 Encryption"],
    services: ["Mobile app", "Cybersecurity"],
    highlights: [
      "100% offline local database with hardware-backed encryption",
      "Fast biometric authentication (Fingerprint / Face ID)",
      "Instant categorisation, tagging, and encrypted export backups",
    ],
  },
  {
    id: "com.trusttracker.trust_tracker_flutter",
    appName: "Trust Tracker",
    packageName: "com.trusttracker.trust_tracker_flutter",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.trusttracker.trust_tracker_flutter",
    iconUrl: "/images/trust-tracker.png",
    status: "production",
    category: "Android utility & Personal finance",
    tagline: "Offline subscription and expense ledger",
    description: "A secure personal finance app to effortlessly track your subscriptions and manage daily expenses",
    featured: true,
    year: "2025",
    stack: ["Flutter", "Dart", "Local SQLite", "Riverpod"],
    services: ["Mobile app", "Software development"],
    highlights: [
      "Automated subscription renewal reminders and cost projections",
      "Zero-cloud sync guaranteeing total financial privacy",
      "Interactive analytics and budget breakdown visualisations",
    ],
  },
  {
    id: "com.snapdocs.app",
    appName: "SnapDocs",
    packageName: "com.snapdocs.app",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.snapdocs.app",
    iconUrl: "/images/snapdocs.png",
    status: "production",
    category: "Android utility & Document security",
    tagline: "Offline document scanner and vault",
    description: "Offline secure document storage application.",
    featured: false,
    year: "2025",
    stack: ["Kotlin", "Android SDK", "Room DB", "Biometrics"],
    services: ["Mobile app", "AI and automation"],
    highlights: [
      "On-device OCR and document text extraction",
      "Biometrically secured isolated document vaults",
      "Compliance-friendly local PDF generation",
    ],
  },
  {
    id: "com.noctune.music",
    appName: "Noctune",
    packageName: "com.noctune.music",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.noctune.music",
    iconUrl: "/images/noctune.png",
    status: "production",
    category: "Android utility & Audio engine",
    tagline: "Modern offline music player",
    description: "Modern music player for music lovers who want to listen offline.",
    featured: false,
    year: "2025",
    stack: ["Flutter", "Dart", "ExoPlayer", "Audio Service"],
    services: ["Mobile app", "Software development"],
    highlights: [
      "Hardware-accelerated audio codec pipeline",
      "Zero background battery drain and lightweight memory footprint",
      "Curated tag management and offline playlist synchronization",
    ],
  },
  {
    id: "com.divinegeeta.app",
    appName: "Divine Geeta: Daily Wisdom",
    packageName: "com.divinegeeta.app",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.divinegeeta.app",
    iconUrl: "/images/divine-geeta.png",
    status: "production",
    category: "Android utility & Spiritual wisdom",
    tagline: "Daily spiritual wisdom and insights for a peaceful life",
    description: "Daily spiritual wisdom and insights for a peaceful life.",
    featured: false,
    year: "2025",
    stack: ["Flutter", "Dart", "Clean Architecture", "Local Storage"],
    services: ["Mobile app", "Software development"],
    highlights: [
      "Daily curated Bhagavad Gita shlokas with clear English & Hindi translations",
      "Clean, peaceful typography and distraction-free reader mode",
      "100% private, on-device bookmarks and reading progress",
    ],
  },
];

/**
 * Fetches applications from the specified GitHub JSON URL.
 * Strictly extracts ONLY `data.apps` and nothing else.
 */
export async function fetchApps(): Promise<AppItem[]> {
  try {
    const res = await fetch(APPS_JSON_URL, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      console.warn(`Failed to fetch apps (status: ${res.status}), using fallback.`);
      return fallbackApps;
    }

    const data = await res.json();

    // STRICT: Only return apps array, ignore websites or other fields
    if (data && Array.isArray(data.apps) && data.apps.length > 0) {
      return data.apps as AppItem[];
    }

    return fallbackApps;
  } catch (err) {
    console.error("Error fetching apps from URL:", err);
    return fallbackApps;
  }
}
