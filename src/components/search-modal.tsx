// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck

"use client";
import {
  FolderCodeIcon,
  Notebook,
  NotebookPen,
  SearchIcon,
} from "lucide-react";
import { Button } from "./ui/button";
import { ReactNode, useEffect, useState } from "react";
import {
  materials,
  specializationMaterials,
} from "@/lib/constants/materials.constant";
import { interviewQuestions } from "@/lib/constants/interviewQuestions.constant";
import { practicalCodes } from "@/lib/constants/codes.constant";
import { assignments } from "@/lib/constants/assignments.constant";
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
import { cn } from "@/lib/utils";

const SearchModal = ({
  hideShortcut,
  triggerContent,
  triggerClass,
}: {
  hideShortcut: boolean;
  triggerContent: ReactNode;
  triggerClass: string;
}) => {
  const router = useRouter();
  const materialsData = [...specializationMaterials, ...materials];

  const [open, setOpen] = useState(false);
  const [searchText, setSearchText] = useState("");

  const filteredData = {
    notes: materialsData.map(({ notes_link }) => notes_link),
    practicals: materialsData.map(({ practicals_link }) => practicals_link),
    syllabus: materialsData.map(({ syllabus_link }) => syllabus_link),
    interviewQuestions,
    practicalCodes,
    assignments,
  };

  useEffect(() => {
    if (hideShortcut) return;
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const handleRedirect = (link, target = null) => {
    if (target) {
      window.open(link, "_blank")?.focus();
    } else {
      router.push(link);
      setOpen(false);
    }
  };

  return (
    <>
      <Button
        className={cn(triggerClass)}
        onClick={() => setOpen(true)}
        variant={"secondary"}
      >
        {triggerContent ? (
          triggerContent
        ) : (
          <>
            <SearchIcon />
            {hideShortcut ? (
              <></>
            ) : (
              <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                <span className="text-xs">⌘</span>K
              </kbd>
            )}
          </>
        )}
      </Button>

      <CommandDialog
        className="max-md:h-full"
        open={open}
        onOpenChange={setOpen}
      >
        <CommandInput
          onValueChange={(e) => {
            setSearchText(e);
          }}
          placeholder="Start typing here to search..."
        />
        <CommandList className="h-full max-md:!max-h-full md:h-[300px]">
          <CommandEmpty>
            <span>No results found for {searchText}</span>
          </CommandEmpty>
          <CommandGroup heading="Notes">
            {filteredData.notes.map((notesArr, i) =>
              notesArr.map((note) => (
                <CommandItem
                  key={note.id}
                  keywords={[
                    "Notes",
                    materialsData[i]?.subject_name,
                    note.title,
                  ]}
                  onSelect={() => handleRedirect(note.href, "_blank")}
                >
                  <Notebook className="!size-4" />
                  <span className="hidden">
                    Notes {materialsData[i]?.subject_name}
                  </span>
                  <span>{note.title}</span>
                  <span className="text-xs text-gray-400 ml-auto whitespace-nowrap">
                    {materialsData[i]?.subject_name}
                  </span>
                </CommandItem>
              ))
            )}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Journals">
            {filteredData.practicals.map((notesArr, i) =>
              notesArr.map((note) => (
                <CommandItem
                  key={note.id}
                  keywords={[
                    "Journals",
                    materialsData[i]?.subject_name,
                    note.title,
                  ]}
                  onSelect={() => handleRedirect(note.journal_link, "_blank")}
                >
                  <NotebookPen className="!size-4" />
                  <span className="hidden">
                    Journals : {materialsData[i]?.subject_name}
                  </span>
                  <span>{note.title}</span>
                  <span className="text-xs text-gray-400 ml-auto whitespace-nowrap">
                    {materialsData[i]?.subject_name}
                  </span>
                </CommandItem>
              ))
            )}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Source Code">
            {filteredData.practicalCodes.map((codes) =>
              codes.practicals.map((practical) => (
                <CommandItem
                  key={practical.key}
                  keywords={["Source Code", practical.name, codes.subject_name]}
                  onSelect={() =>
                    handleRedirect(`/code/${codes.key}/${practical.key}`)
                  }
                >
                  <FolderCodeIcon className="!size-4" />
                  <span className="hidden">Source Code</span>
                  <span>{practical.name}</span>
                  <span className="text-xs text-gray-400 ml-auto whitespace-nowrap">
                    {codes?.subject_name}
                  </span>
                </CommandItem>
              ))
            )}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Assignments">
            {filteredData.assignments.map((assignment) => (
              <CommandItem
                key={assignment.id}
                keywords={["Assignments", assignment.title]}
                onSelect={() => handleRedirect(assignment.href, "_blank")}
              >
                <NotebookPen className="!size-4" />
                <span>{assignment.title} : Assignments</span>
                <span className="text-xs text-gray-400 ml-auto whitespace-nowrap">
                  {assignment.title}
                </span>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup heading="Syllabus">
            {filteredData.syllabus.map((syllabus, i) => (
              <CommandItem
                key={syllabus}
                keywords={["Syllabus", materialsData[i]?.subject_name]}
                onSelect={() => handleRedirect(syllabus, "_blank")}
              >
                <NotebookPen className="!size-4" />
                <span>{materialsData[i]?.subject_name} : Syllabus</span>
                <span className="text-xs text-gray-400 ml-auto whitespace-nowrap">
                  {materialsData[i]?.subject_name}
                </span>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup heading="Interview Questions">
            {filteredData.interviewQuestions.map((question) => (
              <CommandItem
                key={question.id}
                keywords={["Interview Questions", question.title]}
                onSelect={() => handleRedirect(question.href, "_blank")}
              >
                <NotebookPen className="!size-4" />
                <span>{question.title}</span>
                <span className="text-xs text-gray-400 ml-auto whitespace-nowrap">
                  Interview Questions
                </span>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default SearchModal;
