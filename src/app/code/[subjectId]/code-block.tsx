"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { toast } from "sonner";

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

  const handleCopy = () => {
    try {
      navigator.clipboard.writeText(code);
      setCopied(true);
      toast.success("Code copied to clipboard");
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.log({ error });
      toast.success("Failed to copy! Try manually copying code");
    }
  };

  return (
    <div className="relative">
      <Button
        variant={"outline"}
        onClick={handleCopy}
        className={cn(
          "absolute top-2 right-2 px-3 rounded-md text-xs transition",
          is_output && "hidden"
        )}
        size={"sm"}
      >
        {copied ? "Copied!" : "Copy"}
      </Button>

      {/* Code Block */}
      <div
        className="max-h-[400px] overflow-auto rounded-lg"
        style={{ maxWidth: "100%" }}
      >
        <SyntaxHighlighter
          showLineNumbers
          wrapLines
          language={language}
          style={oneLight}
          customStyle={{ margin: 0 }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeBlock;
