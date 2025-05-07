import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { courses } from "@/lib/constants";

export const SemSelectBox = () => {
  return (
    <Select>
      <SelectTrigger className="w-full bg-gray-100 dark:bg-[#181818]">
        <SelectValue placeholder="Select Semester" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {Array(courses[0].total_semester)
            .fill(0)
            .map((_, i) => i + 1)
            .map((ele) => (
              <SelectItem key={ele} value={ele.toString()}>
                Semester {ele}
              </SelectItem>
            ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
