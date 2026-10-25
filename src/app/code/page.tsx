"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Code2, Terminal, Search } from "lucide-react";
import { CustomErrorPage } from "@/components/custom-error-page";
import { useDataGetters } from "@/hooks/use-data-getters";
import { useDataStore } from "@/stores/data.store";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { specializations } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function PracticalCodesPage() {
  const specialization = useDataStore((state) => state.specialization);
  const setSpecialization = useDataStore((state) => state.setSpecialization);
  const sem = useDataStore((state) => state.sem);
  const { getPracticalCodes } = useDataGetters();
  const practicalCodes = getPracticalCodes();
  const [search, setSearch] = useState("");

  if (!practicalCodes || practicalCodes.length === 0) {
    return <CustomErrorPage errorText="Source Codes not available for this semester yet" />;
  }

  const activeSubjects = practicalCodes.filter(
    (subject) =>
      !subject?.specialization || specialization === subject?.specialization,
  );

  const filtered = activeSubjects.filter((subject) => {
    if (!search.trim()) return true;
    const term = search.toLowerCase();
    const subMatch = subject.subject_name.toLowerCase().includes(term);
    const pracMatch = subject.practicals?.some((p) =>
      p.name.toLowerCase().includes(term),
    );
    return subMatch || pracMatch;
  });

  return (
    <div className="w-full max-w-5xl mx-auto px-4 md:px-8 py-6 space-y-6">
      {/* Header Glass Banner */}
      <div className="p-6 md:p-7 rounded-3xl bg-white/60 dark:bg-zinc-900/40 backdrop-blur-2xl backdrop-saturate-180 border border-white/60 dark:border-white/[0.08] shadow-[0_12px_36px_rgba(0,0,0,0.04),inset_0_1px_1px_rgba(255,255,255,0.85)] dark:shadow-[0_12px_36px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.12)] flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-purple-500/15 text-purple-600 dark:text-purple-400 border border-purple-500/20 uppercase flex items-center gap-1 backdrop-blur-md">
              <Code2 className="size-3" /> Lab Practical Codes
            </span>
            <span className="text-xs text-muted-foreground font-medium">
              Semester {sem}
            </span>
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-foreground">
            Practical Code Library
          </h1>
          <p className="text-xs md:text-sm text-muted-foreground max-w-lg leading-relaxed">
            Tested lab programs, code implementations, expected outputs, and syntax-highlighted solutions for university practical exams.
          </p>
        </div>

        {/* Search */}
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
          <Input
            placeholder="Search practical or program..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10 h-10 rounded-xl bg-white/50 dark:bg-zinc-900/40 backdrop-blur-xl border border-white/60 dark:border-white/[0.1] text-xs shadow-xs"
          />
        </div>
      </div>

      {/* Specialization Track Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        {specializations.map((spec) => (
          <button
            key={spec.value}
            onClick={() => setSpecialization(spec.value)}
            className={cn(
              "px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border backdrop-blur-md",
              specialization === spec.value
                ? "bg-primary text-primary-foreground border-primary/40 shadow-xs"
                : "bg-white/50 dark:bg-white/[0.06] border-white/60 dark:border-white/[0.1] text-muted-foreground hover:text-foreground hover:bg-white/70",
            )}
          >
            {spec.label}
          </button>
        ))}
      </div>

      {/* Accordion of Practicals by Subject */}
      {filtered.length === 0 ? (
        <div className="p-10 text-center rounded-3xl border border-dashed border-white/60 dark:border-white/[0.1] bg-white/40 dark:bg-zinc-900/30 backdrop-blur-md text-muted-foreground space-y-2">
          <Terminal className="size-8 mx-auto text-muted-foreground" />
          <h3 className="font-semibold text-sm">No practicals found</h3>
          <p className="text-xs">Try searching for a different program or keyword.</p>
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
        <Accordion type="multiple" className="w-full space-y-3.5">
          {filtered.map((subject) => (
            <AccordionItem
              key={subject.key}
              value={subject.key}
              className="bg-white/65 dark:bg-zinc-900/40 backdrop-blur-xl backdrop-saturate-150 border border-white/60 dark:border-white/[0.08] rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04),inset_0_1px_1px_rgba(255,255,255,0.7)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.1)] hover:border-white/80 dark:hover:border-white/20 transition-all data-[state=open]:shadow-lg"
            >
              <AccordionTrigger className="px-5 py-4 hover:no-underline group">
                <div className="flex items-center gap-3.5 text-left w-full pr-4">
                  <div className="size-10 rounded-2xl bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20 backdrop-blur-md flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Terminal className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-foreground group-hover:text-primary transition-colors">
                      {subject.subject_name}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {subject.practicals.length} Practical Programs
                    </p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4 md:px-6 pb-4 pt-1 space-y-2">
                {subject.practicals.map((practical, idx) => (
                  <Link
                    key={practical.key}
                    href={`/code/${subject.key}/${practical.key}`}
                    className="flex items-center justify-between p-3.5 rounded-2xl bg-white/40 dark:bg-white/[0.03] backdrop-blur-md border border-white/50 dark:border-white/[0.06] hover:bg-white/70 dark:hover:bg-white/[0.08] hover:border-primary/40 transition-all group shadow-2xs"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="size-6 rounded-lg bg-white/70 dark:bg-white/[0.08] border border-white/60 dark:border-white/[0.1] text-[11px] font-bold flex items-center justify-center text-muted-foreground shrink-0 backdrop-blur-md">
                        {idx + 1}
                      </span>
                      <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                        {practical.name}
                      </span>
                    </div>
                    <ArrowRight className="size-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0 ml-2" />
                  </Link>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      )}
    </div>
  );
}
