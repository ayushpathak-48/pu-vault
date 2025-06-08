import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { courses } from "@/lib/constants";
import { useDataStore } from "@/stores/data.store";
import { toast } from "sonner";

export const SemSelectBox = ({ showToast }: { showToast?: boolean }) => {
  const [totalSemesters, setTotalSemesters] = useState<number[]>([]);
  const course = useDataStore((state) => state.course);
  const sem = useDataStore((state) => state.sem);
  const setSem = useDataStore((state) => state.setSem);

  useEffect(() => {
    if (course) {
      const tempSem = courses.find(({ value }) => value == course);
      if (tempSem) {
        setTotalSemesters(tempSem.semesters);
      }
    }
  }, [course]);

  return (
    <Select
      disabled={totalSemesters.length == 0}
      value={sem?.toString()}
      onValueChange={(data) => {
        setSem(parseInt(data));
        if (showToast) {
          toast.success("Semester Changed Successfully");
        }
      }}
    >
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select Semester" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {courses[0].semesters.map((ele) => (
            <SelectItem key={ele} value={ele.toString()}>
              Semester {ele}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
