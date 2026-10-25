"use client";

import { Button } from "@/components/ui/button";
import { Info, LoaderCircle, ArrowLeft, ChevronLeft, ChevronRight, ListTodo } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AllMcqQuestions from "@/components/mcq/mcq-questions";
import { useDataGetters } from "@/hooks/use-data-getters";

const McqPageClient = () => {
  const router = useRouter();
  const { getMCQs } = useDataGetters();
  const mcqs = getMCQs();
  const tabsContainerRef = useRef<HTMLDivElement>(null);
  const { subjectId, unit } = useParams();
  const activeTabRef = useRef<HTMLAnchorElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  const subject = mcqs.find(({ key }) => key === subjectId);
  const chapter = subject?.units?.find(({ key }) => key === unit);
  const currentUnitIndex =
    subject?.units.findIndex(({ key }) => key === unit) ?? 0;

  const handleClickPreviousUnit = () => {
    if (!subject?.units || currentUnitIndex <= 0) return;
    const prevKey = subject.units[currentUnitIndex - 1]?.key;
    router.push(`/mcqs/${subject.key}/${prevKey}`);
  };

  const handleClickNextUnit = () => {
    if (!subject?.units || currentUnitIndex >= subject.units.length - 1) return;
    const nextKey = subject.units[currentUnitIndex + 1]?.key;
    router.push(`/mcqs/${subject.key}/${nextKey}`);
  };

  useEffect(() => {
    if (activeTabRef.current && tabsContainerRef.current) {
      activeTabRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
    setIsLoading(false);
  }, [chapter?.key]);

  if (!chapter) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center p-6">
        <div className="flex flex-col gap-4 items-center justify-center text-center max-w-md">
          <div className="size-16 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center">
            <Info className="size-8" />
          </div>
          <h2 className="font-bold text-xl text-foreground">MCQ Question Set Not Found</h2>
          <p className="text-xs text-muted-foreground">
            The question unit you requested could not be found.
          </p>
          <Button size="sm" asChild className="rounded-xl">
            <Link href="/mcqs">Back to MCQs Library</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto px-4 md:px-8 py-6 space-y-6">
      {/* Top Header */}
      <div className="flex items-center justify-between gap-4 p-4 rounded-2xl bg-card border border-border/70 shadow-xs">
        <div className="flex items-center gap-3">
          <Button
            asChild
            variant="ghost"
            size="icon"
            className="size-9 rounded-xl shrink-0"
          >
            <Link href="/mcqs" title="Back to All MCQs">
              <ArrowLeft className="size-4" />
            </Link>
          </Button>
          <div>
            <span className="text-xs font-semibold text-primary uppercase">
              {subject?.subject_name}
            </span>
            <h1 className="text-base md:text-lg font-bold text-foreground truncate">
              {chapter.title}
            </h1>
          </div>
        </div>

        <div className="text-xs text-muted-foreground font-semibold flex items-center gap-1.5">
          <ListTodo className="size-4 text-primary" />
          <span>{chapter.all_mcqs?.length || 0} Questions</span>
        </div>
      </div>

      {/* Unit Tabs Bar */}
      <div className="flex items-center justify-between gap-2 p-2 rounded-2xl bg-muted/30 border border-border/60">
        <Button
          disabled={currentUnitIndex <= 0}
          variant="ghost"
          size="sm"
          className="rounded-xl h-8 text-xs font-semibold"
          onClick={handleClickPreviousUnit}
        >
          <ChevronLeft className="size-3.5 mr-1" /> Prev Unit
        </Button>

        <Tabs value={chapter.key} className="flex-1 max-w-lg overflow-hidden">
          <TabsList
            ref={tabsContainerRef}
            className="w-full overflow-x-auto gap-2 h-auto p-1 bg-transparent flex justify-start md:justify-center scrollbar-none"
          >
            {subject?.units?.map((ele) => (
              <TabsTrigger
                className="text-xs font-semibold rounded-xl h-8 px-3 shrink-0 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-xs"
                key={ele.key}
                value={ele.key}
                asChild
              >
                <Link
                  href={`/mcqs/${subject.key}/${ele.key}`}
                  ref={ele.key === chapter.key ? activeTabRef : null}
                >
                  {ele.title}
                </Link>
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <Button
          variant="ghost"
          size="sm"
          className="rounded-xl h-8 text-xs font-semibold"
          disabled={!subject?.units || currentUnitIndex >= subject.units.length - 1}
          onClick={handleClickNextUnit}
        >
          Next Unit <ChevronRight className="size-3.5 ml-1" />
        </Button>
      </div>

      {isLoading ? (
        <div className="h-64 w-full flex items-center justify-center">
          <LoaderCircle className="animate-spin size-8 text-primary" />
        </div>
      ) : (
        <div className="pt-2">
          <AllMcqQuestions allMcqs={chapter.all_mcqs} />
        </div>
      )}
    </div>
  );
};

export default McqPageClient;
