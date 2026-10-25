import { Metadata } from "next";
import { fetchApps } from "@/lib/services/apps.service";
import FeaturedAppsClient from "./featured-apps-client";

export const metadata: Metadata = {
  title: "Featured Apps | PU Vault",
  description:
    "Explore privacy-first Android applications, student utilities, and productivity tools.",
};

export default async function FeaturedAppsPage() {
  const apps = await fetchApps();

  return <FeaturedAppsClient initialApps={apps} />;
}
