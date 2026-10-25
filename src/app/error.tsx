"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application Error:", error);
  }, [error]);

  return (
    <div className="w-full max-w-lg mx-auto px-4 py-16 flex flex-col items-center justify-center text-center space-y-5">
      <div className="size-16 rounded-2xl bg-amber-500/10 text-amber-500 border border-amber-500/20 backdrop-blur-md flex items-center justify-center shadow-lg">
        <AlertTriangle className="size-8" />
      </div>

      <div className="space-y-2">
        <h2 className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
          Something went wrong
        </h2>
        <p className="text-xs sm:text-sm text-muted-foreground max-w-sm mx-auto leading-relaxed">
          An unexpected error occurred while loading this page. You can try refreshing the section or return to the dashboard.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2.5 pt-2">
        <Button
          onClick={() => reset()}
          size="sm"
          className="rounded-xl h-10 px-4 text-xs font-semibold gap-2 shadow-xs bg-primary text-primary-foreground hover:bg-primary/90"
        >
          <RefreshCw className="size-3.5" /> Try Again
        </Button>

        <Button
          asChild
          variant="outline"
          size="sm"
          className="rounded-xl h-10 px-4 text-xs font-semibold gap-2 border-white/60 dark:border-white/[0.1] bg-white/50 dark:bg-white/[0.04]"
        >
          <Link href="/">
            <Home className="size-3.5" /> Back to Dashboard
          </Link>
        </Button>
      </div>
    </div>
  );
}
