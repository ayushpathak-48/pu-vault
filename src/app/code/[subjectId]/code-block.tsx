"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  oneDark,
  oneLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { toast } from "sonner";
import { Check, Copy } from "lucide-react";

const CodeBlock = ({
  is_output,
  code,
  language,
}: {
  is_output?: boolean;
  code: string;
  language: string;
}) => {
  const [copied, setCopied] = useState(false);
  const { resolvedTheme } = useTheme();

  const handleCopy = () => {
    try {
      navigator.clipboard.writeText(code);
      setCopied(true);
      toast.success("Code copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Failed to copy code. Please copy manually.");
    }
  };

  return (
    <div className="relative group">
      {!is_output && (
        <Button
          variant="outline"
          size="sm"
          onClick={handleCopy}
          className={cn(
            "absolute top-3 right-3 rounded-xl text-xs gap-1.5 h-8 bg-background/80 backdrop-blur-xs border-border/80 hover:bg-background shadow-xs transition-all z-10",
          )}
        >
          {copied ? (
            <>
              <Check className="size-3.5 text-emerald-500" />
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                Copied!
              </span>
            </>
          ) : (
            <>
              <Copy className="size-3.5 text-muted-foreground" />
              <span>Copy Code</span>
            </>
          )}
        </Button>
      )}

      {/* Code Viewer Container */}
      <div
        className="max-h-[700px] overflow-auto text-xs md:text-sm font-mono scrollbar-thin"
        style={{ maxWidth: "100%" }}
      >
        <SyntaxHighlighter
          showLineNumbers
          wrapLines
          language={language.toLowerCase()}
          style={resolvedTheme === "dark" ? oneDark : oneLight}
          customStyle={{
            margin: 0,
            padding: "16px 8px",
            fontSize: "13px",
            lineHeight: "1.6",
            background: "transparent",
          }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeBlock;
