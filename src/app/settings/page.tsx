"use client";

import { CourseSelectBox } from "@/components/course-select-box";
import { SelectDivision } from "@/components/select-division";
import { Separator } from "@/components/ui/separator";
import React from "react";

const SettingsPage = () => {
  return (
    <div className="w-full p-5 flex flex-col gap-4">
      <div className="flex  gap-2 rounded-lg items-center p-2">
        <div className="font-medium text-lg">Course:</div>
        <CourseSelectBox showToast />
      </div>
      <Separator />
      <div className="flex  gap-2 rounded-lg items-center p-2">
        <div className="font-medium text-lg">Division:</div>
        <SelectDivision />
      </div>
    </div>
  );
};

export default SettingsPage;
