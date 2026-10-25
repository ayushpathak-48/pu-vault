"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Code2, BookOpen, Search, Terminal } from "lucide-react";
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

export default function PracticalCodesPage() {
  const specialization = useDataStore((state) => state.specialization);
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
      {/* Header Banner */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-500/10 via-pink-500/5 to-transparent border border-purple-500/20 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-purple-500/15 text-purple-600 dark:text-purple-400 uppercase flex items-center gap-1">
              <Code2 className="size-3" /> Lab Practical Codes
            </span>
            <span className="text-xs text-muted-foreground">
              Semester {sem}
            </span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">
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
            className="pl-10 h-10 rounded-xl bg-background border-border/70 text-xs shadow-xs"
          />
        </div>
      </div>

      {/* Accordion of Practicals by Subject */}
      {filtered.length === 0 ? (
        <div className="p-10 text-center rounded-2xl border border-dashed text-muted-foreground space-y-2">
          <Terminal className="size-8 mx-auto text-muted-foreground" />
          <h3 className="font-semibold text-sm">No practicals found</h3>
          <p className="text-xs">Try searching for a different program or keyword.</p>
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
        <Accordion type="multiple" className="w-full space-y-3">
          {filtered.map((subject) => (
            <AccordionItem
              key={subject.key}
              value={subject.key}
              className="bg-card border border-border/70 rounded-2xl overflow-hidden shadow-xs hover:border-border transition-all data-[state=open]:shadow-md"
            >
              <AccordionTrigger className="px-5 py-4 hover:no-underline group">
                <div className="flex items-center gap-3 text-left w-full pr-4">
                  <div className="size-10 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
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
                    className="flex items-center justify-between p-3 rounded-xl bg-muted/30 border border-border/50 hover:bg-muted/60 hover:border-primary/40 transition-all group"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className="size-6 rounded-lg bg-background border text-[11px] font-bold flex items-center justify-center text-muted-foreground shrink-0">
                        {idx + 1}
                      </span>
                      <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors truncate">
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
