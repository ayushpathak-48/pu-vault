"use client";

import { downloadFile } from "@/lib/utils";
import { ArrowDownToLine, Eye, Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

export const DownloadAndViewButton = ({
  href,
  variant = "default",
}: {
  href: string;
  variant?: "default" | "ghost" | "outline";
}) => {
  const [loading, setLoading] = useState(false);

  const handleDownload = () => {
    setLoading(true);
    downloadFile(href)
      .then(() => setLoading(false))
      .catch(() => setLoading(false));
  };

  return (
    <TooltipProvider>
      <div className="flex items-center gap-1.5 shrink-0">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant={variant === "ghost" ? "ghost" : "outline"}
              onClick={handleDownload}
              size="icon"
              className="size-8 rounded-xl border-border/70 hover:border-primary/50 text-muted-foreground hover:text-foreground shadow-2xs"
              disabled={loading}
            >
              {loading ? (
                <Loader2 className="size-3.5 animate-spin" />
              ) : (
                <ArrowDownToLine className="size-3.5" />
              )}
            </Button>
          </TooltipTrigger>
          <TooltipContent className="text-xs">
            <span>Download PDF</span>
          </TooltipContent>
        </Tooltip>

        <Button
          variant={variant === "ghost" ? "secondary" : "default"}
          size="sm"
          className="rounded-xl h-8 px-3 text-xs font-semibold gap-1 shadow-2xs"
          asChild
        >
          <Link href={href} target="_blank" rel="noopener noreferrer">
            <Eye className="size-3 mr-0.5" />
            View
          </Link>
        </Button>
      </div>
    </TooltipProvider>
  );
};
