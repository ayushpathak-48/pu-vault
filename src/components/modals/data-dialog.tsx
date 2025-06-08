"use client";

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useEffect, useState } from "react";
import { useDataStore } from "@/stores/data.store";
import { Button } from "../ui/button";
import { CourseSelectBox } from "../course-select-box";
import { SemSelectBox } from "../sem-select-box";

export const DataDialog = () => {
  const [open, setOpen] = useState(false);
  const hydrated = useDataStore((state) => state.hydrated);
  const course = useDataStore((state) => state.course);
  const sem = useDataStore((state) => state.sem);

  useEffect(() => {
    if (hydrated) {
      if (!course || !sem) {
        setOpen(true);
      } else {
        setOpen(false);
      }
    }
  }, [hydrated]);

  const handleSaveChanges = () => {
    if (course && sem) {
      setOpen(false);
    }
  };

  return (
    <AlertDialog open={open}>
      <AlertDialogContent className="max-md:max-w-[93%] rounded-md">
        <AlertDialogHeader>
          <AlertDialogTitle className="flex items-center gap-1">
            Pu Vault
          </AlertDialogTitle>
        </AlertDialogHeader>
        <CourseSelectBox />
        <SemSelectBox />
        <AlertDialogFooter>
          <Button variant={"outline"} onClick={() => handleSaveChanges()}>
            Save changes
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
