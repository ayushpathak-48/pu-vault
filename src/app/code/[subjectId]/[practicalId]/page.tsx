"use client";

import { Button } from "@/components/ui/button";
import { Info, LoaderCircle, ArrowLeft, Download } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import CodeBlock from "../code-block";
import { useParams, useRouter } from "next/navigation";
import { useDataGetters } from "@/hooks/use-data-getters";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type CodeElementType = {
  type: string;
  value: string;
  fileName?: string;
  is_output?: boolean;
  language?: string;
  description?: string;
  className?: string;
  title?: string;
};

const CodePage = () => {
  const router = useRouter();
  const { getPracticalCodes } = useDataGetters();
  const practicalCodes = getPracticalCodes();

  const { subjectId, practicalId } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  const practicalSubject = practicalCodes.find(({ key }) => key === subjectId);
  const practical = practicalSubject?.practicals?.find(
    ({ key }) => key === practicalId,
  );

  useEffect(() => {
    setIsLoading(false);
  }, [practical?.key]);

  if (!practical) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center p-6">
        <div className="flex flex-col gap-4 items-center justify-center text-center max-w-md">
          <div className="size-16 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center">
            <Info className="size-8" />
          </div>
          <h2 className="font-bold text-xl text-foreground">Practical Program Not Found</h2>
          <p className="text-xs text-muted-foreground">
            The practical code you requested could not be found or may have been updated.
          </p>
          <Button size="sm" asChild className="rounded-xl">
            <Link href="/code">Back to Practical Library</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-5xl mx-auto px-4 md:px-8 py-6 space-y-6">
      {/* Navigation & Practical Switcher Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 rounded-3xl bg-white/65 dark:bg-zinc-900/40 backdrop-blur-2xl backdrop-saturate-180 border border-white/60 dark:border-white/[0.08] shadow-[0_12px_36px_rgba(0,0,0,0.04),inset_0_1px_1px_rgba(255,255,255,0.85)] dark:shadow-[0_12px_36px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.12)]">
        <div className="flex items-center gap-3">
          <Button
            asChild
            variant="outline"
            size="icon"
            className="size-9 rounded-xl shrink-0 border-white/60 dark:border-white/[0.1] bg-white/50 dark:bg-white/[0.06] backdrop-blur-md"
          >
            <Link href="/code" title="Back to All Practicals">
              <ArrowLeft className="size-4" />
            </Link>
          </Button>
          <div className="min-w-0">
            <span className="text-xs font-bold text-primary uppercase tracking-wide">
              {practicalSubject?.subject_name}
            </span>
            <h1 className="text-lg md:text-xl font-extrabold text-foreground truncate">
              {practical.name}
            </h1>
          </div>
        </div>

        {/* Practical Dropdown Quick Switcher */}
        <div className="w-full md:w-72">
          <Select
            value={practical.key}
            onValueChange={(value) => {
              const href = `/code/${practicalSubject?.key}/${value}`;
              router.push(href);
            }}
          >
            <SelectTrigger className="w-full rounded-xl bg-white/50 dark:bg-white/[0.06] backdrop-blur-md border border-white/60 dark:border-white/[0.1] text-xs font-semibold h-10 shadow-xs">
              <SelectValue placeholder="Select Practical Program" />
            </SelectTrigger>
            <SelectContent className="rounded-2xl bg-white/80 dark:bg-zinc-950/80 backdrop-blur-2xl border border-white/60 dark:border-white/[0.12]">
              {practicalSubject?.practicals?.map((ele, idx) => (
                <SelectItem key={ele.key} value={ele.key} className="text-xs">
                  {idx + 1}. {ele.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {isLoading ? (
        <div className="h-64 w-full flex items-center justify-center">
          <LoaderCircle className="animate-spin size-8 text-primary" />
        </div>
      ) : (
        <div className="space-y-4">
          {practical?.pageBlocks?.map((ele: CodeElementType, i) => (
            <div key={ele.type + "_" + i} className="w-full">
              {ele.type === "btn" && (
                <div className="flex items-center justify-between p-4 rounded-2xl bg-muted/30 border border-border/60">
                  <div className="font-semibold text-sm text-foreground">
                    {ele.title || "Download Practical Asset"}
                  </div>
                  <Button asChild size="sm" className="rounded-xl gap-1.5 shadow-xs">
                    <Link href={ele.value} target="_blank">
                      <Download className="size-3.5" />
                      Download File
                    </Link>
                  </Button>
                </div>
              )}

              {ele.type === "heading" && (
                <h2
                  className={cn(
                    "text-xl md:text-2xl font-bold text-foreground my-3",
                    ele?.className,
                  )}
                >
                  {ele.value}
                </h2>
              )}

              {ele.type === "description" && (
                <p
                  className={cn(
                    "text-sm text-muted-foreground leading-relaxed my-2",
                    ele?.className,
                  )}
                >
                  {ele.value}
                </p>
              )}

              {ele.type === "code" && (
                <CodeBlock
                  fileName={ele?.fileName}
                  description={ele?.description}
                  is_output={ele?.is_output}
                  code={ele.value.trim()}
                  language={
                    ele?.language ||
                    (ele?.is_output ? "text" : practicalSubject?.language) ||
                    "python"
                  }
                />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CodePage;
