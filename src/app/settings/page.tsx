"use client";

import { SelectDivision } from "@/components/select-division";
import { SelectSpecialization } from "@/components/select-specialization";
import React from "react";

const SettingsPage = () => {
  return (
    <div className="w-full p-5 flex flex-col gap-4">
      <div className="flex flex-col gap-2 rounded-lg border bg-gray-50 p-2">
        <div className="font-medium text-lg">Division:</div>
        <SelectDivision />
      </div>
      <div className="flex flex-col gap-2 rounded-lg border bg-gray-50 p-2">
        <div className="font-medium text-lg">Specialization:</div>
        <SelectSpecialization />
      </div>
    </div>
  );
};

export default SettingsPage;
