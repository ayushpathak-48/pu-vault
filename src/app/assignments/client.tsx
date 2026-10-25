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
  Calendar,
  Layers,
  Sparkles,
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
      {/* Header Banner */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-primary/15 text-primary uppercase flex items-center gap-1">
              <BookOpen className="size-3" /> Semester {sem} Assignments
            </span>
            <span className="text-xs text-muted-foreground">
              {assignments.length} Files
            </span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">
            Academic Assignments & Solutions
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
            className="pl-10 h-10 rounded-xl bg-background border-border/70 text-xs shadow-xs"
          />
        </div>
      </div>

      {/* Assignments List */}
      {filtered.length === 0 ? (
        <div className="p-10 text-center rounded-2xl border border-dashed text-muted-foreground space-y-2">
          <BookOpen className="size-8 mx-auto text-muted-foreground" />
          <h3 className="font-semibold text-sm">No assignments found</h3>
          <p className="text-xs">Try searching for a different subject or keyword.</p>
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
        <div className="space-y-3">
          {filtered.map((assignment: any) => (
            <div
              key={assignment.id}
              className="p-4 rounded-2xl bg-card border border-border/70 hover:border-primary/40 shadow-xs hover:shadow-md transition-all flex items-center justify-between gap-4 group"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="size-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
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
