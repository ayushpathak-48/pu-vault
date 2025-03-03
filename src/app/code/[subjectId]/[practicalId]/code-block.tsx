"use client";

import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { toast } from "sonner";

const CodeBlock = ({ code, language }: { code: string; language: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    toast.success("Code copied to clipboard");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative">
      <Button
        variant={"outline"}
        onClick={handleCopy}
        className="absolute top-2 right-2 px-3 rounded-md text-xs transition"
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
