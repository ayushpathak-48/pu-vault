import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { courses, CourseType } from "@/lib/constants";
import { useDataStore } from "@/stores/data.store";
import { toast } from "sonner";

export const CourseSelectBox = ({ showToast }: { showToast?: boolean }) => {
  const course = useDataStore((state) => state.course);
  const setCourse = useDataStore((state) => state.setCourse);

  const handleSelect = (data: CourseType) => {
    setCourse(data);
    if (showToast) {
      toast.success("Course Changed Successfully");
    }
  };

  return (
    <Select value={course} onValueChange={handleSelect}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select Course" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {courses.map((course) => (
            <SelectItem key={course.id} value={course.value}>
              {course.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
