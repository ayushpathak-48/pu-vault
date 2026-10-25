"use client";

import React, { ReactNode, useEffect, useState } from "react";
import {
  BookOpen,
  Code2,
  FileText,
  Search,
  Users,
  HardDriveDownload,
  BookCheck,
  Calculator,
  ListTodo,
  SquareAsterisk,
  Video,
  Briefcase,
  Settings,
} from "lucide-react";
import { Button } from "./ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { useRouter } from "next/navigation";
import { useDataGetters } from "@/hooks/use-data-getters";
import { softwareLinks } from "@/lib/constants";
import { professorDetails } from "@/lib/constants/professor-details.constant";
import { interviewQuestions } from "@/lib/constants/sem-2/interviewQuestions.constant";

export default function SearchModal({
  hideShortcut,
  triggerContent,
  triggerClass,
}: {
  hideShortcut?: boolean;
  triggerContent?: ReactNode;
  triggerClass?: string;
}) {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const {
    getMaterials,
    getAssignments,
    getPracticalCodes,
    getSpecializationMaterials,
  } = useDataGetters();

  const materials = getMaterials();
  const specializationMaterials = getSpecializationMaterials();
  const assignments = getAssignments();
  const practicalCodes = getPracticalCodes();

  const allMaterials = [...specializationMaterials, ...materials];

  // Cmd+K keyboard shortcut
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" || e.key === "K") && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const handleNavigate = (url: string, external = false) => {
    setOpen(false);
    if (external) {
      window.open(url, "_blank");
    } else {
      router.push(url);
    }
  };

  const quickPages = [
    { title: "Study Materials & Notes", href: "/", icon: BookOpen },
    { title: "Assignments & Practical Tasks", href: "/assignments", icon: BookCheck },
    { title: "Attendance Calculator", href: "/attendance-calculator", icon: Calculator },
    { title: "Practical Source Codes", href: "/code", icon: Code2 },
    { title: "MCQs Practice Quiz", href: "/mcqs", icon: ListTodo },
    { title: "Subject Flashcards", href: "/flash-cards", icon: SquareAsterisk },
    { title: "YouTube Video Tutorials", href: "/youtube-tutorials", icon: Video },
    { title: "Faculty & Professors Directory", href: "/professors", icon: Users },
    { title: "Software Downloads", href: "/software-links", icon: HardDriveDownload },
    { title: "Placement Materials", href: "/placement-materials", icon: Briefcase },
    { title: "Settings & Preferences", href: "/settings", icon: Settings },
  ];

  return (
    <>
      {triggerContent ? (
        <div onClick={() => setOpen(true)} className={triggerClass}>
          {triggerContent}
        </div>
      ) : (
        <Button
          variant="outline"
          size="sm"
          onClick={() => setOpen(true)}
          className="rounded-xl h-10 px-3 bg-muted/30 border-border/70 hover:bg-muted/50 text-muted-foreground hover:text-foreground text-xs gap-3 w-56 lg:w-64 justify-between"
        >
          <span className="flex items-center gap-2">
            <Search className="size-4" />
            <span>Search PU Vault...</span>
          </span>
          {!hideShortcut && (
            <kbd className="pointer-events-none hidden sm:inline-flex h-5 select-none items-center gap-1 rounded bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground border">
              <span className="text-xs">⌘</span>K
            </kbd>
          )}
        </Button>
      )}

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a subject, faculty, program, or tool..." />
        <CommandList className="max-h-[380px] p-2">
          <CommandEmpty>No results found.</CommandEmpty>

          {/* Quick Pages Navigation */}
          <CommandGroup heading="Pages & Features">
            {quickPages.map((page) => {
              const Icon = page.icon;
              return (
                <CommandItem
                  key={page.href}
                  onSelect={() => handleNavigate(page.href)}
                  className="rounded-xl flex items-center gap-2.5 py-2 cursor-pointer"
                >
                  <Icon className="size-4 text-primary" />
                  <span>{page.title}</span>
                </CommandItem>
              );
            })}
          </CommandGroup>

          <CommandSeparator />

          {/* Practical Codes */}
          {practicalCodes.length > 0 && (
            <CommandGroup heading="Source Codes">
              {practicalCodes.flatMap((subject) =>
                subject.practicals.map((prac) => (
                  <CommandItem
                    key={`code_${subject.key}_${prac.key}`}
                    onSelect={() =>
                      handleNavigate(`/code/${subject.key}/${prac.key}`)
                    }
                    className="rounded-xl flex items-center justify-between py-2 cursor-pointer"
                  >
                    <div className="flex items-center gap-2.5 truncate">
                      <Code2 className="size-4 text-purple-500 shrink-0" />
                      <span className="truncate">{prac.name}</span>
                    </div>
                    <span className="text-[11px] text-muted-foreground shrink-0 ml-2">
                      {subject.subject_name}
                    </span>
                  </CommandItem>
                )),
              )}
            </CommandGroup>
          )}

          <CommandSeparator />

          {/* Study Notes */}
          {allMaterials.length > 0 && (
            <CommandGroup heading="Lecture Notes">
              {allMaterials.flatMap((subject: any) =>
                (subject.notes_link || []).map((note: any) => (
                  <CommandItem
                    key={`note_${note.id}`}
                    onSelect={() => handleNavigate(note.href, true)}
                    className="rounded-xl flex items-center justify-between py-2 cursor-pointer"
                  >
                    <div className="flex items-center gap-2.5 truncate">
                      <FileText className="size-4 text-blue-500 shrink-0" />
                      <span className="truncate">{note.title}</span>
                    </div>
                    <span className="text-[11px] text-muted-foreground shrink-0 ml-2">
                      {subject.subject_name}
                    </span>
                  </CommandItem>
                )),
              )}
            </CommandGroup>
          )}

          <CommandSeparator />

          {/* Softwares */}
          <CommandGroup heading="Software Tools">
            {softwareLinks.map((soft) => (
              <CommandItem
                key={`soft_${soft.id}`}
                onSelect={() => handleNavigate(soft.link, true)}
                className="rounded-xl flex items-center justify-between py-2 cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <HardDriveDownload className="size-4 text-emerald-500 shrink-0" />
                  <span>{soft.title}</span>
                </div>
                <span className="text-[10px] text-muted-foreground">Download</span>
              </CommandItem>
            ))}
          </CommandGroup>

          <CommandSeparator />

          {/* Professors */}
          <CommandGroup heading="Faculty Contacts">
            {professorDetails.slice(0, 15).map((prof) => (
              <CommandItem
                key={`prof_${prof.id}`}
                onSelect={() => handleNavigate("/professors")}
                className="rounded-xl flex items-center justify-between py-2 cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <Users className="size-4 text-amber-500 shrink-0" />
                  <span>{prof.name}</span>
                </div>
                <span className="text-[11px] text-muted-foreground">{prof.contact}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
