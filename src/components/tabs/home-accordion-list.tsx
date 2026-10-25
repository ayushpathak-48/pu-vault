/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { useDataStore } from "@/stores/data.store";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import {
  Send,
  BookOpen,
  FileCode,
  GraduationCap,
  FileText,
  Search,
  ExternalLink,
  Code,
  CheckCircle2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useQueryState } from "nuqs";
import { useDataGetters } from "@/hooks/use-data-getters";
import { DownloadAndViewButton } from "../download-and-view-button";
import { useState } from "react";
import { Input } from "../ui/input";

export const HomePageAccordionList = ({
  tabData,
  specializationTabData,
}: {
  tabData: any;
  specializationTabData: any;
}) => {
  const specialization = useDataStore((state) => state.specialization);
  const course = useDataStore((state) => state.course);

  const [activeSubject, setActiveSubject] = useQueryState("subject", {
    defaultValue: "",
  });

  const [activeTabSection, setActiveTabSection] = useQueryState("tab", {
    defaultValue: "notes",
  });

  const [searchFilter, setSearchFilter] = useState("");

  const activeSpecializationItems = specializationTabData.filter(
    (item: any) => item.value === specialization,
  );

  const activeGeneralItems = tabData.filter((material: any) => {
    if (material?.courses?.length > 0 && !material?.courses?.includes(course)) {
      return false;
    }
    return true;
  });

  const allItems = [...activeSpecializationItems, ...activeGeneralItems];

  const filteredItems = allItems.filter((item: any) => {
    if (!searchFilter.trim()) return true;
    const term = searchFilter.toLowerCase();
    const nameMatches = item?.subject_name?.toLowerCase().includes(term);
    const notesMatch = item?.notes_link?.some((n: any) =>
      n?.title?.toLowerCase().includes(term),
    );
    return nameMatches || notesMatch;
  });

  return (
    <div className="space-y-4">
      {/* Search & Filter Bar */}
      <div className="relative">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
        <Input
          placeholder="Filter subjects, topics, or notes..."
          value={searchFilter}
          onChange={(e) => setSearchFilter(e.target.value)}
          className="pl-10 h-10 rounded-xl bg-white/50 dark:bg-zinc-900/40 backdrop-blur-xl border border-white/60 dark:border-white/[0.1] shadow-xs"
        />
        {searchFilter && (
          <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">
            {filteredItems.length} found
          </span>
        )}
      </div>

      {filteredItems.length === 0 ? (
        <div className="p-8 text-center rounded-2xl border border-dashed border-white/60 dark:border-white/[0.1] bg-white/40 dark:bg-zinc-900/30 backdrop-blur-md">
          <BookOpen className="size-8 mx-auto text-muted-foreground mb-2" />
          <h3 className="text-sm font-semibold text-foreground">
            No matching subjects or materials found
          </h3>
          <p className="text-xs text-muted-foreground mt-1">
            Try a different search term or clear the filter.
          </p>
          <Button
            size="sm"
            variant="outline"
            onClick={() => setSearchFilter("")}
            className="mt-3 rounded-xl text-xs"
          >
            Clear Filter
          </Button>
        </div>
      ) : (
        <Accordion
          type="single"
          collapsible
          className="w-full flex flex-col gap-3"
          value={activeSubject}
          onValueChange={(data) => {
            setActiveTabSection("notes");
            setActiveSubject(data);
          }}
        >
          {filteredItems.map((item: any) => (
            <MaterialAccordionCard
              setActiveTabSection={setActiveTabSection}
              activeTabSection={activeTabSection}
              key={item.id || item.key}
              material={item}
            />
          ))}
        </Accordion>
      )}
    </div>
  );
};

const MaterialAccordionCard = ({
  material,
  activeTabSection,
  setActiveTabSection,
}: any) => {
  const { getPracticalCodes } = useDataGetters();
  const practicalCodes = getPracticalCodes();

  const notesCount = material?.notes_link?.length || 0;
  const journalCount =
    (material?.practicals_link?.length || 0) +
    (material?.output_links?.length || 0);
  const quePapersCount = material?.que_papers?.length || 0;
  const hasPracticalCodes = practicalCodes?.some(
    ({ key }) => key === material?.key,
  );

  return (
    <AccordionItem
      className="bg-white/65 dark:bg-zinc-900/40 backdrop-blur-xl backdrop-saturate-150 border border-white/60 dark:border-white/[0.08] rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04),inset_0_1px_1px_rgba(255,255,255,0.7)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.1)] hover:border-white/80 dark:hover:border-white/20 transition-all data-[state=open]:border-primary/40 data-[state=open]:shadow-lg"
      value={material.key}
    >
      <AccordionTrigger className="px-3.5 py-3 sm:px-5 sm:py-4 hover:no-underline group">
        <div className="flex items-center gap-2.5 sm:gap-3.5 text-left w-full pr-2 sm:pr-4">
          <div className="size-8 sm:size-10 rounded-lg sm:rounded-xl bg-primary/10 text-primary border border-primary/20 backdrop-blur-md flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
            <BookOpen className="size-4 sm:size-5" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
              <h3 className="font-bold text-sm sm:text-base text-foreground group-hover:text-primary transition-colors truncate">
                {material.subject_name}
              </h3>
              {material.specialization && (
                <span className="text-[10px] font-bold px-1.5 py-0.2 sm:px-2 sm:py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20 uppercase backdrop-blur-md">
                  Specialization
                </span>
              )}
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 mt-0.5 sm:mt-1 text-[11px] sm:text-xs text-muted-foreground flex-wrap">
              <span>{notesCount} Notes</span>
              {journalCount > 0 && <span>• {journalCount} Journals</span>}
              {hasPracticalCodes && <span>• Codes Available</span>}
              {quePapersCount > 0 && <span>• {quePapersCount} Papers</span>}
            </div>
          </div>
        </div>
      </AccordionTrigger>

      <AccordionContent className="px-3 sm:px-5 pb-3.5 sm:pb-5 pt-1">
        <Tabs
          defaultValue="notes"
          value={activeTabSection}
          onValueChange={setActiveTabSection}
          className="w-full"
        >
          <TabsList className="w-full grid grid-cols-2 md:grid-cols-4 h-auto p-1 bg-white/40 dark:bg-black/30 backdrop-blur-md border border-white/50 dark:border-white/[0.08] rounded-xl gap-1 mb-3 sm:mb-4">
            <TabsTrigger
              value="notes"
              className="rounded-lg py-1.5 sm:py-2 text-[11px] sm:text-xs font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-xs transition-all"
            >
              Notes ({notesCount})
            </TabsTrigger>
            {journalCount > 0 && (
              <TabsTrigger
                value="practicals"
                className="rounded-lg py-1.5 sm:py-2 text-[11px] sm:text-xs font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-xs transition-all"
              >
                Journals ({journalCount})
              </TabsTrigger>
            )}
            {hasPracticalCodes && (
              <TabsTrigger
                value="codes"
                className="rounded-lg py-1.5 sm:py-2 text-[11px] sm:text-xs font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-xs transition-all"
              >
                Practical Codes
              </TabsTrigger>
            )}
            {quePapersCount > 0 && (
              <TabsTrigger
                value="que_papers"
                className="rounded-lg py-1.5 sm:py-2 text-[11px] sm:text-xs font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-xs transition-all"
              >
                Exam Papers ({quePapersCount})
              </TabsTrigger>
            )}
          </TabsList>

          {/* Notes Tab Content */}
          <TabsContent value="notes" className="space-y-2 mt-0">
            {material?.notes_link?.length > 0 ? (
              <div className="flex flex-col gap-2">
                {material.notes_link.map((note: any) => (
                  <div
                    key={note.id}
                    className="p-3 rounded-xl bg-white/40 dark:bg-white/[0.03] backdrop-blur-md border border-white/50 dark:border-white/[0.06] hover:bg-white/60 dark:hover:bg-white/[0.08] transition-all flex items-center justify-between gap-3 shadow-2xs"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <FileText className="size-4 text-primary shrink-0" />
                      <Link
                        target="_blank"
                        href={note.href}
                        className="text-sm font-medium hover:text-primary transition-colors truncate"
                      >
                        {note.title}
                      </Link>
                    </div>
                    <DownloadAndViewButton href={note.href} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center p-6 rounded-xl bg-white/30 dark:bg-white/[0.02] border border-dashed border-white/50 dark:border-white/[0.08] text-center gap-2">
                <p className="text-xs text-muted-foreground">
                  No notes uploaded yet for {material.subject_name}.
                </p>
                <Button size="sm" variant="outline" className="rounded-xl text-xs gap-1.5" asChild>
                  <Link
                    href={`https://wa.me/919157587671?text=Hey! I have notes for ${material.subject_name} to contribute to PU Vault.`}
                    target="_blank"
                  >
                    <Send className="size-3 text-emerald-500" />
                    Contribute Notes via WhatsApp
                  </Link>
                </Button>
              </div>
            )}
          </TabsContent>

          {/* Practicals / Journals Tab Content */}
          <TabsContent value="practicals" className="space-y-3 mt-0">
            {material?.practicals_link?.length > 0 && (
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Practical Questions &amp; Assignments
                </h4>
                <div className="flex flex-col gap-2">
                  {material.practicals_link.map((practical: any) => (
                    <div
                      key={practical.id}
                      className="p-3 rounded-xl bg-white/40 dark:bg-white/[0.03] backdrop-blur-md border border-white/50 dark:border-white/[0.06] hover:bg-white/60 dark:hover:bg-white/[0.08] transition-all flex items-center justify-between gap-3 shadow-2xs"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <FileCode className="size-4 text-purple-500 shrink-0" />
                        <Link
                          target="_blank"
                          href={practical.href}
                          className="text-sm font-medium hover:text-primary transition-colors truncate"
                        >
                          {practical.title}
                        </Link>
                      </div>
                      <DownloadAndViewButton href={practical.href} />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {material?.output_links?.length > 0 && (
              <div className="space-y-2 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Solved Practical Output &amp; Manuals
                </h4>
                <div className="flex flex-col gap-2">
                  {material.output_links.map((output: any) => (
                    <div
                      key={output.id}
                      className="p-3 rounded-xl bg-white/40 dark:bg-white/[0.03] backdrop-blur-md border border-white/50 dark:border-white/[0.06] hover:bg-white/60 dark:hover:bg-white/[0.08] transition-all flex items-center justify-between gap-3 shadow-2xs"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <CheckCircle2 className="size-4 text-emerald-500 shrink-0" />
                        <Link
                          target="_blank"
                          href={output.href}
                          className="text-sm font-medium hover:text-primary transition-colors truncate"
                        >
                          {output.title}
                        </Link>
                      </div>
                      <DownloadAndViewButton href={output.href} />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </TabsContent>

          {/* Practical Codes Tab Content */}
          <TabsContent value="codes" className="mt-0">
            {hasPracticalCodes ? (
              <div className="p-4 rounded-xl bg-purple-500/10 backdrop-blur-md border border-purple-500/20 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="space-y-1 text-center sm:text-left">
                  <h4 className="font-bold text-sm text-foreground flex items-center gap-2 justify-center sm:justify-start">
                    <Code className="size-4 text-purple-500" />
                    Interactive Code Viewer &amp; Solutions
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    Browse verified code solutions, copy scripts, and view line-by-line syntax for {material.subject_name}.
                  </p>
                </div>
                <Button asChild size="sm" className="rounded-xl shrink-0 gap-1.5">
                  <Link href={`/code/${material.key}`}>
                    <span>Open Code Editor</span>
                    <ExternalLink className="size-3.5" />
                  </Link>
                </Button>
              </div>
            ) : (
              <div className="p-6 text-center text-xs text-muted-foreground">
                No code repository linked for this subject.
              </div>
            )}
          </TabsContent>

          {/* Question Papers Tab Content */}
          <TabsContent value="que_papers" className="space-y-2 mt-0">
            {material?.que_papers?.length > 0 ? (
              <div className="flex flex-col gap-2">
                {material.que_papers.map((paper: any) => (
                  <div
                    key={paper.id}
                    className="p-3 rounded-xl bg-white/40 dark:bg-white/[0.03] backdrop-blur-md border border-white/50 dark:border-white/[0.06] hover:bg-white/60 dark:hover:bg-white/[0.08] transition-all flex items-center justify-between gap-3 shadow-2xs"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <GraduationCap className="size-4 text-amber-500 shrink-0" />
                      <Link
                        target="_blank"
                        href={paper.href}
                        className="text-sm font-medium hover:text-primary transition-colors truncate"
                      >
                        {paper.title}
                      </Link>
                    </div>
                    <DownloadAndViewButton href={paper.href} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-6 text-center text-xs text-muted-foreground">
                No past question papers uploaded yet.
              </div>
            )}
          </TabsContent>
        </Tabs>
      </AccordionContent>
    </AccordionItem>
  );
};
