"use client";

import { SelectDivision } from "@/components/select-division";
import { SelectSpecialization } from "@/components/select-specialization";
import { ContentTypeTabs } from "@/components/tabs/content-type-tabs";
import { useDataStore } from "@/stores/data.store";

export default function Home() {
  const specialization = useDataStore((state) => state.specialization);
  const division = useDataStore((state) => state.division);
  return (
    <div className="w-full">
      {!specialization && (
        <div className="p-5">
          <SelectSpecialization />
        </div>
      )}
      {!division && (
        <div className="p-5">
          <SelectDivision />
        </div>
      )}
      <ContentTypeTabs />
    </div>
  );
}
