"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  vscDarkPlus,
  vs,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { toast } from "sonner";
import {
  Check,
  Copy,
  Terminal,
  FileCode,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  code: string;
  language?: string;
  fileName?: string;
  description?: string;
  is_output?: boolean;
}

const normalizeLanguage = (lang?: string, isOutput?: boolean): string => {
  if (isOutput) return "text";
  const raw = (lang || "").toLowerCase().trim();
  const map: Record<string, string> = {
    python: "python",
    py: "python",
    java: "java",
    c: "c",
    cpp: "cpp",
    "c++": "cpp",
    cs: "csharp",
    csharp: "csharp",
    javascript: "javascript",
    js: "javascript",
    jsx: "jsx",
    typescript: "typescript",
    ts: "typescript",
    tsx: "tsx",
    html: "markup",
    xml: "markup",
    svg: "markup",
    css: "css",
    php: "php",
    sql: "sql",
    mysql: "sql",
    cmd: "bash",
    sh: "bash",
    shell: "bash",
    bash: "bash",
    terminal: "bash",
    json: "json",
    text: "text",
  };
  return map[raw] || raw || "python";
};

const formatLanguageLabel = (lang?: string): string => {
  const l = (lang || "").toLowerCase().trim();
  switch (l) {
    case "py":
    case "python":
      return "Python 3";
    case "java":
      return "Java";
    case "c":
      return "C";
    case "cpp":
    case "c++":
      return "C++";
    case "html":
      return "HTML / Markup";
    case "sql":
      return "SQL Database";
    case "php":
      return "PHP";
    case "javascript":
    case "js":
      return "JavaScript";
    case "jsx":
      return "React JSX";
    case "cmd":
    case "bash":
    case "sh":
      return "Terminal / Shell";
    default:
      return l ? l.toUpperCase() : "Code";
  }
};

const CodeBlock = ({
  code,
  language = "python",
  fileName,
  description,
  is_output = false,
}: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? resolvedTheme === "dark" : true;
  const normLang = normalizeLanguage(language, is_output);

  const handleCopy = () => {
    try {
      navigator.clipboard.writeText(code);
      setCopied(true);
      toast.success(
        is_output
          ? "Output copied to clipboard!"
          : "Code copied to clipboard!",
      );
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Failed to copy. Please copy manually.");
    }
  };

  // Dedicated Terminal Window for Expected Output
  if (is_output) {
    return (
      <div className="rounded-2xl overflow-hidden border border-emerald-500/30 dark:border-emerald-500/20 bg-zinc-950 shadow-[0_8px_30px_rgba(0,0,0,0.25)] my-4">
        {/* Terminal Title Bar */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-900/90 border-b border-zinc-800/80 backdrop-blur-md">
          <div className="flex items-center gap-3">
            {/* macOS window controls */}
            <div className="flex items-center gap-1.5">
              <span className="size-2.5 rounded-full bg-red-500/80 inline-block" />
              <span className="size-2.5 rounded-full bg-amber-500/80 inline-block" />
              <span className="size-2.5 rounded-full bg-emerald-500/80 inline-block" />
            </div>
            <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-400">
              <Terminal className="size-3.5" />
              <span>Program Output</span>
            </div>
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={handleCopy}
            className="h-8 sm:h-9 px-2.5 sm:px-3 text-xs text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 rounded-lg sm:rounded-xl gap-1.5 transition-all"
          >
            {copied ? (
              <>
                <Check className="size-3 text-emerald-400" />
                <span className="text-emerald-400 font-semibold">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="size-3" />
                <span>Copy Output</span>
              </>
            )}
          </Button>
        </div>

        {description && (
          <div className="px-4 py-2 bg-zinc-900/40 border-b border-zinc-800/50 text-xs text-zinc-400">
            {description}
          </div>
        )}

        {/* Console Content */}
        <div className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-zinc-200 whitespace-pre leading-relaxed scrollbar-thin select-text">
          {code}
        </div>
      </div>
    );
  }

  // Polished Apple Glass IDE Editor Frame for Source Code
  return (
    <div className="rounded-xl sm:rounded-2xl overflow-hidden border border-white/60 dark:border-white/[0.08] bg-white/70 dark:bg-zinc-900/70 backdrop-blur-2xl backdrop-saturate-180 shadow-[0_12px_36px_rgba(0,0,0,0.06),inset_0_1px_1px_rgba(255,255,255,0.85)] dark:shadow-[0_12px_36px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.1)] my-3 sm:my-4">
      {/* Editor Header Bar */}
      <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-2.5 bg-white/60 dark:bg-zinc-900/60 border-b border-white/50 dark:border-white/[0.08] backdrop-blur-md">
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          {/* macOS window controls */}
          <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
            <span className="size-2 sm:size-2.5 rounded-full bg-[#ff5f56] inline-block shadow-2xs" />
            <span className="size-2 sm:size-2.5 rounded-full bg-[#ffbd2e] inline-block shadow-2xs" />
            <span className="size-2 sm:size-2.5 rounded-full bg-[#27c93f] inline-block shadow-2xs" />
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 truncate">
            <FileCode className="size-3.5 text-primary shrink-0" />
            <span className="text-xs font-mono font-semibold text-foreground truncate">
              {fileName || "Solution Code"}
            </span>
          </div>

          <span className="hidden sm:inline-flex items-center text-[10px] font-bold px-2 py-0.5 rounded-md bg-primary/10 text-primary border border-primary/20 tracking-wider">
            {formatLanguageLabel(language)}
          </span>
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={handleCopy}
          className="h-8 sm:h-9 px-2.5 sm:px-3.5 text-xs rounded-lg sm:rounded-xl gap-1 sm:gap-1.5 bg-white/50 dark:bg-zinc-800/60 backdrop-blur-md border border-white/60 dark:border-white/[0.1] shadow-2xs hover:bg-white/80 dark:hover:bg-zinc-700/60 transition-all shrink-0 font-medium"
        >
          {copied ? (
            <>
              <Check className="size-3 text-emerald-500" />
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                Copied!
              </span>
            </>
          ) : (
            <>
              <Copy className="size-3 text-muted-foreground" />
              <span className="hidden xs:inline">Copy Code</span>
              <span className="xs:hidden">Copy</span>
            </>
          )}
        </Button>
      </div>

      {description && (
        <div className="px-4 py-2 bg-muted/20 border-b border-white/40 dark:border-white/[0.06] text-xs text-muted-foreground leading-relaxed">
          {description}
        </div>
      )}

      {/* Code Viewer Container */}
      <div
        className="max-h-[750px] overflow-auto text-xs md:text-sm font-mono scrollbar-thin"
        style={{ maxWidth: "100%" }}
      >
        <SyntaxHighlighter
          showLineNumbers
          wrapLongLines={false}
          language={normLang}
          style={isDark ? vscDarkPlus : vs}
          customStyle={{
            margin: 0,
            padding: "16px 12px",
            fontSize: "13px",
            lineHeight: "1.6",
            background: isDark ? "#18181b" : "#fbfbfb",
            border: 0,
          }}
          lineNumberStyle={{
            minWidth: "3.25em",
            paddingRight: "1.25em",
            color: isDark ? "#71717a" : "#94a3b8",
            textAlign: "right",
            userSelect: "none",
          }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeBlock;
