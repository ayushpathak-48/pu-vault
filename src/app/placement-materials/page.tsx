"use client";

import React, { useState } from "react";
import { placementMaterials } from "@/lib/constants/placement-materials.constants";
import {
  Briefcase,
  Search,
  ExternalLink,
  Building2,
  FolderOpen,
  Sparkles,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PlacementMaterialsPage() {
  const [search, setSearch] = useState("");

  const filtered = placementMaterials.filter((item: any) =>
    item.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="w-full max-w-6xl mx-auto px-4 md:px-8 py-6 space-y-6">
      {/* Header Banner */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-amber-500/10 via-orange-500/5 to-transparent border border-amber-500/20 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-amber-500/15 text-amber-600 dark:text-amber-400 uppercase flex items-center gap-1">
              <Briefcase className="size-3" /> Training & Placements
            </span>
            <span className="text-xs text-muted-foreground">
              {placementMaterials.length} Companies
            </span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">
            Company Placement Materials
          </h1>
          <p className="text-xs md:text-sm text-muted-foreground max-w-lg leading-relaxed">
            Company-specific aptitude questions, technical interview rounds, past exam papers, and coding challenges for campus hiring drives.
          </p>
        </div>

        {/* Search */}
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
          <Input
            placeholder="Search company (e.g. TCS, Deloitte)..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10 h-10 rounded-xl bg-background border-border/70 text-xs shadow-xs"
          />
        </div>
      </div>

      {/* Company Grid */}
      {filtered.length === 0 ? (
        <div className="p-10 text-center rounded-2xl border border-dashed text-muted-foreground space-y-2">
          <Building2 className="size-8 mx-auto text-muted-foreground" />
          <h3 className="font-semibold text-sm">No companies found</h3>
          <p className="text-xs">Try searching for Accenture, Cognizant, or Capgemini.</p>
          <Button
            size="sm"
            variant="outline"
            onClick={() => setSearch("")}
            className="mt-2 text-xs rounded-lg"
          >
            Clear Search
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {filtered.map((item: any) => {
            const initial = item.title.slice(0, 2).toUpperCase();
            return (
              <div
                key={item.id}
                className="p-4 rounded-2xl bg-card border border-border/70 hover:border-amber-500/40 shadow-xs hover:shadow-md transition-all flex items-center justify-between gap-3 group"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="size-10 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 font-bold text-xs flex items-center justify-center shrink-0 border border-amber-500/20 group-hover:scale-105 transition-transform">
                    {initial}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-bold text-sm text-foreground group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors truncate">
                      {item.title}
                    </h3>
                    <span className="text-[11px] text-muted-foreground flex items-center gap-1">
                      <FolderOpen className="size-3" /> Drive Folder
                    </span>
                  </div>
                </div>

                <div className="shrink-0">
                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="rounded-xl h-8 text-xs font-semibold gap-1 hover:border-amber-500/50"
                  >
                    <Link href={item.href} target="_blank" rel="noopener noreferrer">
                      Open <ExternalLink className="size-3 text-muted-foreground" />
                    </Link>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
