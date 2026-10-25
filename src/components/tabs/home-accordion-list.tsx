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
          className="pl-10 h-10 rounded-xl bg-card border-border/70 focus-visible:ring-primary shadow-xs"
        />
        {searchFilter && (
          <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">
            {filteredItems.length} found
          </span>
        )}
      </div>

      {filteredItems.length === 0 ? (
        <div className="p-8 text-center rounded-2xl border border-dashed border-border/80 bg-muted/20">
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
            className="mt-3 rounded-lg text-xs"
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
      className="bg-card border border-border/70 rounded-2xl overflow-hidden shadow-xs hover:border-border transition-all data-[state=open]:shadow-md"
      value={material.key}
    >
      <AccordionTrigger className="px-5 py-4 hover:no-underline group">
        <div className="flex items-center gap-3 text-left w-full pr-4">
          <div className="size-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
            <BookOpen className="size-5" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="font-bold text-base text-foreground group-hover:text-primary transition-colors">
                {material.subject_name}
              </h3>
              {material.specialization && (
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20 uppercase">
                  Specialization
                </span>
              )}
            </div>
            <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground flex-wrap">
              <span>{notesCount} Notes</span>
              {journalCount > 0 && <span>• {journalCount} Journals</span>}
              {hasPracticalCodes && <span>• Codes Available</span>}
              {quePapersCount > 0 && <span>• {quePapersCount} Papers</span>}
            </div>
          </div>
        </div>
      </AccordionTrigger>

      <AccordionContent className="px-4 md:px-6 pb-5 pt-1">
        <Tabs
          defaultValue="notes"
          value={activeTabSection}
          onValueChange={setActiveTabSection}
          className="w-full"
        >
          <TabsList className="w-full grid grid-cols-2 md:grid-cols-4 h-auto p-1 bg-muted/40 rounded-xl gap-1 mb-4">
            <TabsTrigger
              value="notes"
              className="rounded-lg py-2 text-xs font-semibold data-[state=active]:bg-background data-[state=active]:shadow-xs data-[state=active]:text-primary"
            >
              Notes ({notesCount})
            </TabsTrigger>
            {journalCount > 0 && (
              <TabsTrigger
                value="practicals"
                className="rounded-lg py-2 text-xs font-semibold data-[state=active]:bg-background data-[state=active]:shadow-xs data-[state=active]:text-primary"
              >
                Journals ({journalCount})
              </TabsTrigger>
            )}
            {hasPracticalCodes && (
              <TabsTrigger
                value="codes"
                className="rounded-lg py-2 text-xs font-semibold data-[state=active]:bg-background data-[state=active]:shadow-xs data-[state=active]:text-primary"
              >
                Practical Codes
              </TabsTrigger>
            )}
            {quePapersCount > 0 && (
              <TabsTrigger
                value="que_papers"
                className="rounded-lg py-2 text-xs font-semibold data-[state=active]:bg-background data-[state=active]:shadow-xs data-[state=active]:text-primary"
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
                    className="p-3 rounded-xl bg-muted/30 border border-border/50 hover:bg-muted/50 transition-colors flex items-center justify-between gap-3"
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
              <div className="flex flex-col items-center justify-center p-6 rounded-xl bg-muted/20 border border-dashed text-center gap-2">
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

          {/* Practical Journals Tab Content */}
          <TabsContent value="practicals" className="space-y-2 mt-0">
            <div className="flex flex-col gap-2">
              {material?.output_links?.map((practical: any) => (
                <div
                  key={`out_${practical.id}`}
                  className="p-3 rounded-xl bg-muted/30 border border-border/50 hover:bg-muted/50 transition-colors flex items-center justify-between gap-3"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <CheckCircle2 className="size-4 text-emerald-500 shrink-0" />
                    <span className="text-xs font-bold uppercase text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">
                      Output
                    </span>
                    <Link
                      target="_blank"
                      href={practical.journal_link}
                      className="text-sm font-medium hover:text-primary transition-colors truncate"
                    >
                      {practical.title}
                    </Link>
                  </div>
                  <DownloadAndViewButton href={practical.journal_link} />
                </div>
              ))}

              {material?.practicals_link?.map((practical: any) => (
                <div
                  key={`prac_${practical.id}`}
                  className="p-3 rounded-xl bg-muted/30 border border-border/50 hover:bg-muted/50 transition-colors flex items-center justify-between gap-3"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <FileCode className="size-4 text-primary shrink-0" />
                    <span className="text-xs font-bold uppercase text-primary bg-primary/10 px-1.5 py-0.5 rounded">
                      Journal
                    </span>
                    <Link
                      target="_blank"
                      href={practical.journal_link}
                      className="text-sm font-medium hover:text-primary transition-colors truncate"
                    >
                      {practical.title}
                    </Link>
                  </div>
                  <DownloadAndViewButton href={practical.journal_link} />
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Practical Codes Tab Content */}
          <TabsContent value="codes" className="space-y-2 mt-0">
            <div className="flex flex-col gap-2">
              {practicalCodes
                ?.find(({ key }) => key === material?.key)
                ?.practicals.map((practical) => (
                  <div
                    key={practical.key}
                    className="p-3 rounded-xl bg-muted/30 border border-border/50 hover:bg-muted/50 transition-colors flex items-center justify-between gap-3"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <Code className="size-4 text-purple-500 shrink-0" />
                      <Link
                        href={`/code/${material.key}/${practical.key}`}
                        className="text-sm font-medium hover:text-primary transition-colors truncate"
                      >
                        {practical.name}
                      </Link>
                    </div>
                    <Button asChild size="sm" variant="secondary" className="rounded-lg h-8 text-xs font-semibold">
                      <Link href={`/code/${material.key}/${practical.key}`}>
                        View Code
                      </Link>
                    </Button>
                  </div>
                ))}
            </div>
          </TabsContent>

          {/* Question Papers Tab Content */}
          <TabsContent value="que_papers" className="space-y-2 mt-0">
            <div className="flex flex-col gap-2">
              {material?.que_papers?.map((paper: any) => (
                <div
                  key={paper.id}
                  className="p-3 rounded-xl bg-muted/30 border border-border/50 hover:bg-muted/50 transition-colors flex items-center justify-between gap-3"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <GraduationCap className="size-4 text-amber-500 shrink-0" />
                    <Link
                      target="_blank"
                      href={paper?.href}
                      className="text-sm font-medium hover:text-primary transition-colors truncate"
                    >
                      {paper.label}
                    </Link>
                  </div>
                  <DownloadAndViewButton href={paper?.href} />
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Syllabus Footer Link with corrected target="_blank" */}
        <div className="mt-4 pt-3 border-t border-border/40 flex items-center justify-between">
          <span className="text-xs text-muted-foreground">Course Syllabus:</span>
          {material?.syllabus_link ? (
            <Button size="sm" variant="ghost" className="rounded-lg h-7 text-xs font-semibold gap-1 text-primary hover:text-primary/80" asChild>
              <Link href={material.syllabus_link} target="_blank">
                View Official Syllabus <ExternalLink className="size-3" />
              </Link>
            </Button>
          ) : (
            <span className="text-xs text-muted-foreground/70 italic">
              Syllabus not available
            </span>
          )}
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};
