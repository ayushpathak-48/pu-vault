"use client";

import { useDataStore } from "@/stores/data.store";
import { AlertCircle, ArrowLeft, RefreshCw } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export const CustomErrorPage = ({ errorText }: { errorText: string }) => {
  const sem = useDataStore((state) => state.sem);
  const setSem = useDataStore((state) => state.setSem);

  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] p-6 text-center space-y-4 max-w-md mx-auto">
      <div className="size-16 rounded-3xl bg-amber-500/10 border border-amber-500/20 text-amber-500 flex items-center justify-center shadow-xs">
        <AlertCircle className="size-8" />
      </div>

      <div className="space-y-1">
        <h2 className="text-xl font-bold text-foreground">
          Semester {sem} Content Not Found
        </h2>
        <p className="text-xs text-muted-foreground leading-relaxed">
          {errorText}. The materials or resources for this semester are currently being curated.
        </p>
      </div>

      <div className="flex items-center gap-2 pt-2">
        <Button asChild size="sm" variant="outline" className="rounded-xl text-xs gap-1.5">
          <Link href="/">
            <ArrowLeft className="size-3.5" /> Back to Home
          </Link>
        </Button>
        <Button
          size="sm"
          onClick={() => setSem(3)}
          className="rounded-xl text-xs font-semibold gap-1.5"
        >
          <RefreshCw className="size-3.5" /> Switch to Sem 3
        </Button>
      </div>
    </div>
  );
};
