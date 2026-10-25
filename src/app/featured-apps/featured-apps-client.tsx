"use client";

import { useState } from "react";
import Link from "next/link";
import { AppItem, resolveAppIcon } from "@/lib/services/apps.service";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  ChevronLeft,
  Search,
  ExternalLink,
  CheckCircle2,
  Clock,
  Sparkles,
  Smartphone,
} from "lucide-react";

interface FeaturedAppsClientProps {
  initialApps: AppItem[];
}

export default function FeaturedAppsClient({ initialApps }: FeaturedAppsClientProps) {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | "production" | "coming_soon">("all");

  const filteredApps = initialApps.filter((app) => {
    // Status filter
    if (statusFilter === "production") {
      if (app.status !== "production" && app.status !== "published") return false;
    } else if (statusFilter === "coming_soon") {
      if (app.status !== "coming_soon" && app.status !== "in_progress") return false;
    }

    // Search query
    if (!search.trim()) return true;
    const q = search.toLowerCase();
    const matchName = app.appName?.toLowerCase().includes(q);
    const matchTagline = app.tagline?.toLowerCase().includes(q);
    const matchDesc = app.description?.toLowerCase().includes(q);
    const matchCat = app.category?.toLowerCase().includes(q);
    const matchStack = app.stack?.some((s) => s.toLowerCase().includes(q));

    return matchName || matchTagline || matchDesc || matchCat || matchStack;
  });

  const liveCount = initialApps.filter(
    (a) => a.status === "production" || a.status === "published",
  ).length;
  const comingSoonCount = initialApps.filter(
    (a) => a.status === "coming_soon" || a.status === "in_progress",
  ).length;

  return (
    <div className="w-full min-h-[calc(100vh-5rem)] pb-20">
      {/* Header Area */}
      <div className="pt-8 pb-6 px-4 md:px-8 max-w-6xl mx-auto space-y-4">
        <Link
          href="/"
          className="inline-flex items-center text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors group"
        >
          <ChevronLeft className="w-4 h-4 mr-0.5 group-hover:-translate-x-0.5 transition-transform" />
          Back to Dashboard
        </Link>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              <Sparkles className="size-3.5" /> Mobile Apps &amp; Utilities
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
              Featured Applications
            </h1>
            <p className="text-muted-foreground text-sm max-w-2xl leading-relaxed">
              Explore privacy-first Android applications, offline student utilities, audio engines, and productivity tools.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <Input
              placeholder="Search apps, tools, stack..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 h-10 rounded-xl bg-white/50 dark:bg-zinc-900/40 backdrop-blur-xl border border-white/60 dark:border-white/[0.1] text-xs shadow-xs"
            />
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 pt-2 overflow-x-auto pb-1 scrollbar-none">
          <button
            onClick={() => setStatusFilter("all")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border backdrop-blur-md ${
              statusFilter === "all"
                ? "bg-primary text-primary-foreground border-primary/40 shadow-xs"
                : "bg-white/50 dark:bg-white/[0.06] border-white/60 dark:border-white/[0.1] text-muted-foreground hover:text-foreground hover:bg-white/70"
            }`}
          >
            All Apps ({initialApps.length})
          </button>
          <button
            onClick={() => setStatusFilter("production")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border backdrop-blur-md flex items-center gap-1.5 ${
              statusFilter === "production"
                ? "bg-primary text-primary-foreground border-primary/40 shadow-xs"
                : "bg-white/50 dark:bg-white/[0.06] border-white/60 dark:border-white/[0.1] text-muted-foreground hover:text-foreground hover:bg-white/70"
            }`}
          >
            <CheckCircle2 className="size-3.5 text-emerald-500" />
            On Play Store ({liveCount})
          </button>
          <button
            onClick={() => setStatusFilter("coming_soon")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border backdrop-blur-md flex items-center gap-1.5 ${
              statusFilter === "coming_soon"
                ? "bg-primary text-primary-foreground border-primary/40 shadow-xs"
                : "bg-white/50 dark:bg-white/[0.06] border-white/60 dark:border-white/[0.1] text-muted-foreground hover:text-foreground hover:bg-white/70"
            }`}
          >
            <Clock className="size-3.5 text-amber-500" />
            Coming Soon ({comingSoonCount})
          </button>
        </div>
      </div>

      {/* Grid Area */}
      <div className="px-4 md:px-8 max-w-6xl mx-auto">
        {filteredApps.length === 0 ? (
          <div className="p-12 text-center rounded-3xl border border-dashed border-white/60 dark:border-white/[0.1] bg-white/40 dark:bg-zinc-900/30 backdrop-blur-md space-y-3">
            <Smartphone className="size-10 mx-auto text-muted-foreground" />
            <h3 className="font-semibold text-base">No applications found</h3>
            <p className="text-xs text-muted-foreground max-w-sm mx-auto">
              No apps matched your current search criteria. Try searching with a different keyword or reset filters.
            </p>
            <Button
              size="sm"
              variant="outline"
              onClick={() => {
                setSearch("");
                setStatusFilter("all");
              }}
              className="rounded-xl text-xs mt-2"
            >
              Reset Filters
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredApps.map((app) => {
              const iconSrc = resolveAppIcon(app.iconUrl);
              const isLive = app.status === "production" || app.status === "published";

              return (
                <div
                  key={app.id}
                  className="flex flex-col bg-white/65 dark:bg-zinc-900/40 backdrop-blur-xl backdrop-saturate-150 border border-white/60 dark:border-white/[0.08] rounded-3xl p-5 shadow-[0_8px_30px_rgb(0,0,0,0.04),inset_0_1px_1px_rgba(255,255,255,0.7)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.1)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group justify-between"
                >
                  <div className="space-y-4">
                    {/* Top Row: App Icon + Status */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="size-14 rounded-2xl overflow-hidden border border-white/60 dark:border-white/[0.1] bg-white/70 dark:bg-black/30 backdrop-blur-md shadow-xs shrink-0 flex items-center justify-center p-1 group-hover:scale-105 transition-transform">
                        {iconSrc ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={iconSrc}
                            alt={`${app.appName} icon`}
                            className="w-full h-full object-cover rounded-xl"
                            loading="lazy"
                          />
                        ) : (
                          <Smartphone className="size-7 text-primary" />
                        )}
                      </div>

                      <Badge
                        variant="secondary"
                        className={`text-[11px] px-2.5 py-0.5 rounded-lg font-semibold flex items-center gap-1 backdrop-blur-md ${
                          isLive
                            ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/25"
                            : "bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/25"
                        }`}
                      >
                        {isLive ? (
                          <>
                            <CheckCircle2 className="size-3" /> Live
                          </>
                        ) : (
                          <>
                            <Clock className="size-3" /> Coming Soon
                          </>
                        )}
                      </Badge>
                    </div>

                    {/* App Title & Category */}
                    <div className="space-y-1">
                      <h2 className="text-lg font-bold tracking-tight text-foreground group-hover:text-primary transition-colors line-clamp-1">
                        {app.appName}
                      </h2>
                      {app.category && (
                        <p className="text-[11px] font-medium text-muted-foreground line-clamp-1">
                          {app.category}
                        </p>
                      )}
                    </div>

                    {/* Tagline & Description */}
                    <div className="space-y-1.5">
                      {app.tagline && (
                        <p className="text-xs font-semibold text-foreground/90 line-clamp-2">
                          {app.tagline}
                        </p>
                      )}
                      <p className="text-xs text-muted-foreground line-clamp-3 leading-relaxed">
                        {app.description}
                      </p>
                    </div>

                    {/* Highlights / Features (if present) */}
                    {app.highlights && app.highlights.length > 0 && (
                      <div className="pt-2 border-t border-white/40 dark:border-white/[0.06] space-y-1">
                        <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                          Key Highlights
                        </p>
                        <ul className="space-y-1">
                          {app.highlights.slice(0, 2).map((highlight, idx) => (
                            <li
                              key={idx}
                              className="text-[11px] text-muted-foreground flex items-start gap-1.5 leading-tight"
                            >
                              <span className="size-1 rounded-full bg-primary mt-1.5 shrink-0" />
                              <span className="line-clamp-1">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Tech Stack Pills */}
                    {app.stack && app.stack.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {app.stack.slice(0, 4).map((tech, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] px-2 py-0.5 rounded-md bg-white/50 dark:bg-white/[0.05] border border-white/50 dark:border-white/[0.08] backdrop-blur-md text-muted-foreground font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Action Button */}
                  <div className="pt-4 mt-4 border-t border-white/40 dark:border-white/[0.06]">
                    <Button
                      asChild
                      className="w-full rounded-2xl font-bold text-xs h-11 shadow-xs gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      <Link
                        href={app.playStoreUrl || "#"}
                        target={app.playStoreUrl ? "_blank" : undefined}
                        rel="noopener noreferrer"
                      >
                        <span>{isLive ? "Get on Google Play" : "View on Google Play"}</span>
                        <ExternalLink className="size-3.5" />
                      </Link>
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
