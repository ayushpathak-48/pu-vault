"use client";

import React, { useState } from "react";
import { interviewQuestions } from "@/lib/constants/sem-2/interviewQuestions.constant";
import { DownloadAndViewButton } from "@/components/download-and-view-button";
import {
  MessageCircleQuestion,
  Search,
  BookOpen,
  Code2,
  Database,
  Cpu,
  Globe,
  FileText,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function InterviewQuestionsPage() {
  const [search, setSearch] = useState("");

  const getDomainIcon = (title: string) => {
    const t = title.toLowerCase();
    if (t.includes("dbms") || t.includes("sql") || t.includes("data")) {
      return <Database className="size-5 text-amber-500" />;
    }
    if (t.includes("web") || t.includes("php") || t.includes("javascript")) {
      return <Globe className="size-5 text-blue-500" />;
    }
    if (t.includes("os") || t.includes("operating") || t.includes("network")) {
      return <Cpu className="size-5 text-emerald-500" />;
    }
    return <Code2 className="size-5 text-purple-500" />;
  };

  const filtered = interviewQuestions.filter((q) =>
    q.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="w-full max-w-5xl mx-auto px-4 md:px-8 py-6 space-y-6">
      {/* Header Banner */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-500/10 via-indigo-500/5 to-transparent border border-blue-500/20 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-blue-500/15 text-blue-600 dark:text-blue-400 uppercase flex items-center gap-1">
              <MessageCircleQuestion className="size-3" /> Campus Placements & Viva
            </span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">
            Interview Question Banks
          </h1>
          <p className="text-xs md:text-sm text-muted-foreground max-w-lg leading-relaxed">
            Curated technical interview question sets, viva guides, and core CS fundamentals to help you crack technical rounds.
          </p>
        </div>

        {/* Search */}
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
          <Input
            placeholder="Search topic (e.g. Java, DBMS)..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10 h-10 rounded-xl bg-background border-border/70 text-xs shadow-xs"
          />
        </div>
      </div>

      {/* Grid of interview question items */}
      {filtered.length === 0 ? (
        <div className="p-10 text-center rounded-2xl border border-dashed text-muted-foreground space-y-2">
          <BookOpen className="size-8 mx-auto text-muted-foreground" />
          <h3 className="font-semibold text-sm">No topics found</h3>
          <p className="text-xs">Try searching for Java, C++, Python, or OS.</p>
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="p-4 rounded-2xl bg-card border border-border/70 hover:border-primary/40 shadow-xs hover:shadow-md transition-all flex items-center justify-between gap-4 group"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="size-11 rounded-xl bg-muted/50 border border-border/60 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  {getDomainIcon(item.title)}
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold text-sm text-foreground group-hover:text-primary transition-colors truncate">
                    {item.title}
                  </h3>
                  <span className="text-[11px] text-muted-foreground flex items-center gap-1 mt-0.5">
                    <FileText className="size-3 text-muted-foreground" />
                    Comprehensive Assessment PDF
                  </span>
                </div>
              </div>

              <div className="shrink-0">
                <DownloadAndViewButton href={item.href} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
