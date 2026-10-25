"use client";

import React, { useState } from "react";
import { softwareLinks } from "@/lib/constants";
import {
  Download,
  Search,
  HardDriveDownload,
  ExternalLink,
  Laptop,
  Database,
  Cpu,
  Server,
  Code2,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function SoftwareLinksPage() {
  const [search, setSearch] = useState("");

  const getSoftwareCategory = (title: string) => {
    const t = title.toLowerCase();
    if (t.includes("intellij") || t.includes("visual studio") || t.includes("android") || t.includes("netbeans")) {
      return { category: "IDE & Editor", icon: Code2, color: "text-purple-500 bg-purple-500/10" };
    }
    if (t.includes("jar") || t.includes("connector") || t.includes("mysql") || t.includes("json")) {
      return { category: "Libraries & DB", icon: Database, color: "text-amber-500 bg-amber-500/10" };
    }
    if (t.includes("virtualbox") || t.includes("linux") || t.includes("kali")) {
      return { category: "Virtualization & OS", icon: Cpu, color: "text-emerald-500 bg-emerald-500/10" };
    }
    return { category: "Runtime & Server", icon: Server, color: "text-blue-500 bg-blue-500/10" };
  };

  const filtered = softwareLinks.filter((s) =>
    s.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="w-full max-w-5xl mx-auto px-4 md:px-8 py-6 space-y-6">
      {/* Header Banner */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-teal-500/5 to-transparent border border-emerald-500/20 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 uppercase flex items-center gap-1">
              <HardDriveDownload className="size-3" /> Lab Tools & Software
            </span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">
            Essential Software Downloads
          </h1>
          <p className="text-xs md:text-sm text-muted-foreground max-w-lg leading-relaxed">
            Verified download links for lab practicals, development environments, database connectors, and virtualization tools required for PU courses.
          </p>
        </div>

        {/* Search */}
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
          <Input
            placeholder="Search software (e.g. Node, MySQL)..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10 h-10 rounded-xl bg-background border-border/70 text-xs shadow-xs"
          />
        </div>
      </div>

      {/* Software Cards Grid */}
      {filtered.length === 0 ? (
        <div className="p-10 text-center rounded-2xl border border-dashed text-muted-foreground space-y-2">
          <Laptop className="size-8 mx-auto text-muted-foreground" />
          <h3 className="font-semibold text-sm">No software found</h3>
          <p className="text-xs">Try searching for Node, Visual Studio, or Linux.</p>
          <Button
            size="sm"
            variant="outline"
            onClick={() => setSearch("")}
            className="mt-2 text-xs rounded-lg"
          >
            Clear Search
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filtered.map((item) => {
            const { category, icon: Icon, color } = getSoftwareCategory(item.title);
            return (
              <div
                key={item.id}
                className="p-4 rounded-2xl bg-card border border-border/70 hover:border-primary/40 shadow-xs hover:shadow-md transition-all flex items-center justify-between gap-4 group"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className={`size-11 rounded-xl flex items-center justify-center shrink-0 border border-border/50 ${color}`}>
                    <Icon className="size-5" />
                  </div>
                  <div className="min-w-0 space-y-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-sm text-foreground group-hover:text-primary transition-colors truncate">
                        {item.title}
                      </h3>
                    </div>
                    <Badge variant="secondary" className="text-[10px] font-medium">
                      {category}
                    </Badge>
                  </div>
                </div>

                <div className="shrink-0">
                  <Button
                    asChild
                    size="sm"
                    className="rounded-xl font-semibold gap-1.5 shadow-xs"
                  >
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Download className="size-3.5" />
                      Download
                    </a>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
