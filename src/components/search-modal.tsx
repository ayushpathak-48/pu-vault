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
import { sem2specializationMaterials } from "@/lib/constants/sem-2/materials.constant";
import { interviewQuestions } from "@/lib/constants/sem-2/interviewQuestions.constant";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Input } from "./ui/input";
import { useDataGetters } from "@/hooks/use-data-getters";

const SearchModal = ({
  hideShortcut,
  triggerContent,
  triggerClass,
}: {
  hideShortcut?: boolean;
  triggerContent?: ReactNode;
  triggerClass?: string;
}) => {
  const router = useRouter();
  const { getMaterials, getAssignments, getPracticalCodes } = useDataGetters();

  const materials = getMaterials();
  const assignments = getAssignments();
  const practicalCodes = getPracticalCodes();

  const materialsData = [...sem2specializationMaterials, ...materials];

  const [open, setOpen] = useState(false);
  const [searchText, setSearchText] = useState("");

  const initialData = {
    notes: materialsData.map(({ notes_link }) => notes_link),
    practicals: materialsData.map(({ practicals_link }) => practicals_link),
    syllabus: materialsData.map(({ syllabus_link }) => syllabus_link),
    interviewQuestions,
    practicalCodes,
    assignments,
  };

  const [filteredData, setFilteredData] = useState(initialData);

  useEffect(() => {
    const tempInitialData = JSON.parse(JSON.stringify(initialData));
    if (!searchText) {
      setFilteredData(tempInitialData);
      return;
    }

    const searchTextArr = searchText.split(" ");

    const tempNotes = tempInitialData.notes
      .map((data, ind) => {
        data.forEach((ele) => {
          ele.title = ele.title + " " + materialsData[ind]?.subject_name;
        });
        data = data.filter(({ title }) =>
          searchTextArr.every((keyword) =>
            (title + " Notes Materials ppt pdf")
              .toLowerCase()
              .includes(keyword.toLowerCase()),
          ),
        );
        return data;
      })
      .filter((arr) => arr.length > 0);

    const tempPracticals = tempInitialData.practicals
      .map((data, ind) => {
        data.forEach((ele) => {
          ele.title = ele.title + " " + materialsData[ind]?.subject_name;
        });
        data = data.filter(({ title }) =>
          searchTextArr.every((keyword) =>
            (title + " Journal").toLowerCase().includes(keyword.toLowerCase()),
          ),
        );
        return data;
      })
      .filter((arr) => arr.length > 0);

    const tempPracticalCodes = tempInitialData.practicalCodes
      .map((data) => {
        data.practicals = data.practicals.filter(({ name }) =>
          searchTextArr.every((keyword) =>
            (name + " " + data.subject_name + " Source Code")
              .toLowerCase()
              .includes(keyword.toLowerCase()),
          ),
        );
        return data;
      })
      .filter((arr) => arr.practicals.length > 0);

    const tempSyllabus = tempInitialData.syllabus.filter((data) =>
      searchTextArr.every((keyword) =>
        (data + " Syllabus").toLowerCase().includes(keyword.toLowerCase()),
      ),
    );
    const tempInterviewQuestions = tempInitialData.interviewQuestions.filter(
      ({ title }) =>
        searchTextArr.every((keyword) =>
          (title + " Interview Questions")
            .toLowerCase()
            .includes(keyword.toLowerCase()),
        ),
    );
    const tempAssignments = tempInitialData.assignments.filter(({ title }) =>
      searchTextArr.every((keyword) =>
        (title + " Assignements").toLowerCase().includes(keyword.toLowerCase()),
      ),
    );

    setFilteredData({
      notes: tempNotes,
      practicals: tempPracticals,
      syllabus: tempSyllabus,
      interviewQuestions: tempInterviewQuestions,
      practicalCodes: tempPracticalCodes,
      assignments: tempAssignments,
    });
  }, [searchText]);

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
        variant={hideShortcut ? "link" : "secondary"}
        size={hideShortcut ? "icon" : "default"}
      >
        {triggerContent ? (
          triggerContent
        ) : (
          <>
            <SearchIcon className="size-4" />
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
        <Input
          onChange={(e) => {
            setSearchText(e?.target?.value || "");
          }}
          placeholder="Start typing here to search..."
          className="p-[25px] rounded-none"
        />
        <CommandList className="h-full max-md:!max-h-full md:h-[300px]">
          <CommandEmpty>
            <span>No results found for {searchText}</span>
          </CommandEmpty>
          <CommandGroup
            className={filteredData.notes?.length > 0 ? "" : "hidden"}
            heading="Notes"
          >
            {filteredData.notes.map((notesArr) =>
              notesArr.map((note) => (
                <CommandItem
                  key={note.id}
                  onSelect={() => handleRedirect(note.href, "_blank")}
                >
                  <Notebook className="!size-4" />
                  <span>{note.title}</span>
                  <span className="text-xs text-gray-400 ml-auto whitespace-nowrap">
                    {
                      materialsData.find(({ notes_link }) =>
                        notes_link.some(({ href }) => href == note.href),
                      )?.subject_name
                    }
                  </span>
                </CommandItem>
              )),
            )}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup
            className={filteredData.practicals?.length > 0 ? "" : "hidden"}
            heading="Journals"
          >
            {filteredData.practicals.map((notesArr) =>
              notesArr.map((note) => (
                <CommandItem
                  key={note.id}
                  onSelect={() => handleRedirect(note.journal_link, "_blank")}
                >
                  <NotebookPen className="!size-4" />
                  <span>{note.title}</span>
                  <span className="text-xs text-gray-400 ml-auto whitespace-nowrap">
                    {
                      materialsData.find(({ practicals_link }) =>
                        practicals_link.some(
                          ({ journal_link }) =>
                            journal_link == note.journal_link,
                        ),
                      )?.subject_name
                    }
                  </span>
                </CommandItem>
              )),
            )}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup
            heading="Source Code"
            className={filteredData.practicalCodes?.length > 0 ? "" : "hidden"}
          >
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
                  <span>{practical.name}</span>
                  <span className="text-xs text-gray-400 ml-auto whitespace-nowrap">
                    {codes?.subject_name}
                  </span>
                </CommandItem>
              )),
            )}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup
            heading="Assignments"
            className={filteredData.assignments?.length > 0 ? "" : "hidden"}
          >
            {filteredData.assignments.map((assignment) => (
              <CommandItem
                key={assignment.id}
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
          <CommandGroup
            heading="Syllabus"
            className={filteredData.syllabus?.length > 0 ? "" : "hidden"}
          >
            {filteredData.syllabus.map((syllabus) => (
              <CommandItem
                key={syllabus}
                keywords={[
                  "Syllabus",
                  materialsData.find(
                    ({ syllabus_link }) => syllabus_link == syllabus,
                  )?.subject_name,
                ]}
                onSelect={() => handleRedirect(syllabus, "_blank")}
              >
                <NotebookPen className="!size-4" />
                <span>
                  {
                    materialsData.find(
                      ({ syllabus_link }) => syllabus_link == syllabus,
                    )?.subject_name
                  }{" "}
                  : Syllabus
                </span>
                <span className="text-xs text-gray-400 ml-auto whitespace-nowrap">
                  {
                    materialsData.find(
                      ({ syllabus_link }) => syllabus_link == syllabus,
                    )?.subject_name
                  }
                </span>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup
            heading="Interview Questions"
            className={
              filteredData.interviewQuestions?.length > 0 ? "" : "hidden"
            }
          >
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
