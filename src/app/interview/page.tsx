"use client";

import { useState } from "react";
import { DownloadAndViewButton } from "@/components/download-and-view-button";
import { interviewQuestions } from "@/lib/constants/sem-2/interviewQuestions.constant";
import {
  MessageCircleQuestion,
  Search,
  BookOpen,
  FileText,
  Database,
  Code,
  Cpu,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function InterviewQuestionsPage() {
  const [search, setSearch] = useState("");

  const filtered = interviewQuestions.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()),
  );

  const getDomainIcon = (title: string) => {
    const t = title.toLowerCase();
    if (t.includes("sql") || t.includes("dbms"))
      return <Database className="size-5 text-emerald-500" />;
    if (t.includes("java") || t.includes("python") || t.includes("c++") || t.includes("web"))
      return <Code className="size-5 text-blue-500" />;
    return <Cpu className="size-5 text-purple-500" />;
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8 space-y-6 md:space-y-8">
      {/* Header Glass Banner */}
      <div className="p-6 md:p-7 rounded-3xl bg-white/60 dark:bg-zinc-900/40 backdrop-blur-2xl backdrop-saturate-180 border border-white/60 dark:border-white/[0.08] shadow-[0_12px_36px_rgba(0,0,0,0.04),inset_0_1px_1px_rgba(255,255,255,0.85)] dark:shadow-[0_12px_36px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.12)] flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 uppercase flex items-center gap-1 backdrop-blur-md">
              <MessageCircleQuestion className="size-3" /> Technical Prep
            </span>
            <span className="text-xs text-muted-foreground font-medium">
              {interviewQuestions.length} Modules
            </span>
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-foreground">
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
            className="pl-10 h-10 rounded-xl bg-white/50 dark:bg-zinc-900/40 backdrop-blur-xl border border-white/60 dark:border-white/[0.1] text-xs shadow-xs"
          />
        </div>
      </div>

      {/* Grid of interview question items */}
      {filtered.length === 0 ? (
        <div className="p-10 text-center rounded-3xl border border-dashed border-white/60 dark:border-white/[0.1] bg-white/40 dark:bg-zinc-900/30 backdrop-blur-md text-muted-foreground space-y-2">
          <BookOpen className="size-8 mx-auto text-muted-foreground" />
          <h3 className="font-semibold text-sm">No topics found</h3>
          <p className="text-xs">Try searching for Java, C++, Python, or OS.</p>
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="p-4.5 rounded-3xl bg-white/65 dark:bg-zinc-900/40 backdrop-blur-xl backdrop-saturate-150 border border-white/60 dark:border-white/[0.08] shadow-[0_8px_30px_rgb(0,0,0,0.04),inset_0_1px_1px_rgba(255,255,255,0.7)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.1)] hover:border-primary/40 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-between gap-4 group"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="size-12 rounded-2xl bg-white/60 dark:bg-white/[0.06] border border-white/60 dark:border-white/[0.1] backdrop-blur-md flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-2xs">
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
