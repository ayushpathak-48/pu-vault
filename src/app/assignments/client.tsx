"use client";

import React, { useState } from "react";
import { CustomErrorPage } from "@/components/custom-error-page";
import { DownloadAndViewButton } from "@/components/download-and-view-button";
import { useDataGetters } from "@/hooks/use-data-getters";
import { useDataStore } from "@/stores/data.store";
import {
  BookOpen,
  Search,
  FileText,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const AssignmentsClient = () => {
  const { getAssignments } = useDataGetters();
  const assignments = getAssignments();
  const sem = useDataStore((state) => state.sem);
  const [search, setSearch] = useState("");

  if (!assignments || assignments.length === 0) {
    return (
      <CustomErrorPage errorText="Assignments not available for this semester yet" />
    );
  }

  const filtered = assignments.filter((item: any) =>
    item.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="w-full max-w-5xl mx-auto px-4 md:px-8 py-6 space-y-6">
      {/* Header Glass Banner */}
      <div className="p-6 md:p-7 rounded-3xl bg-white/60 dark:bg-zinc-900/40 backdrop-blur-2xl backdrop-saturate-180 border border-white/60 dark:border-white/[0.08] shadow-[0_12px_36px_rgba(0,0,0,0.04),inset_0_1px_1px_rgba(255,255,255,0.85)] dark:shadow-[0_12px_36px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.12)] flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-primary/15 text-primary border border-primary/20 uppercase flex items-center gap-1 backdrop-blur-md">
              <BookOpen className="size-3" /> Semester {sem} Assignments
            </span>
            <span className="text-xs text-muted-foreground font-medium">
              {assignments.length} Files
            </span>
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-foreground">
            Academic Assignments &amp; Solutions
          </h1>
          <p className="text-xs md:text-sm text-muted-foreground max-w-lg leading-relaxed">
            Download and view official assignment question sheets, front pages, and homework solutions for your current semester.
          </p>
        </div>

        {/* Search */}
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
          <Input
            placeholder="Search assignments..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10 h-10 rounded-xl bg-white/50 dark:bg-zinc-900/40 backdrop-blur-xl border border-white/60 dark:border-white/[0.1] text-xs shadow-xs"
          />
        </div>
      </div>

      {/* Assignments List */}
      {filtered.length === 0 ? (
        <div className="p-10 text-center rounded-3xl border border-dashed border-white/60 dark:border-white/[0.1] bg-white/40 dark:bg-zinc-900/30 backdrop-blur-md text-muted-foreground space-y-2">
          <BookOpen className="size-8 mx-auto text-muted-foreground" />
          <h3 className="font-semibold text-sm">No assignments found</h3>
          <p className="text-xs">Try searching for a different subject or keyword.</p>
          <Button
            size="sm"
            variant="outline"
            onClick={() => setSearch("")}
            className="mt-2 text-xs rounded-xl"
          >
            Clear Search
          </Button>
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((assignment: any) => (
            <div
              key={assignment.id}
              className="p-4 rounded-2xl bg-white/65 dark:bg-zinc-900/40 backdrop-blur-xl backdrop-saturate-150 border border-white/60 dark:border-white/[0.08] shadow-[0_8px_30px_rgb(0,0,0,0.04),inset_0_1px_1px_rgba(255,255,255,0.7)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.1)] hover:border-primary/40 hover:shadow-md transition-all flex items-center justify-between gap-4 group"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="size-11 rounded-xl bg-primary/10 text-primary border border-primary/20 backdrop-blur-md flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <FileText className="size-5" />
                </div>
                <div className="min-w-0 space-y-1">
                  <h2 className="text-sm md:text-base font-bold text-foreground group-hover:text-primary transition-colors truncate">
                    {assignment.title}
                  </h2>
                  <span className="text-[11px] text-muted-foreground flex items-center gap-1.5">
                    <span>PDF Document</span>
                    <span>•</span>
                    <span className="text-primary font-semibold">Semester {sem}</span>
                  </span>
                </div>
              </div>

              <div className="shrink-0">
                <DownloadAndViewButton href={assignment.href} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AssignmentsClient;
