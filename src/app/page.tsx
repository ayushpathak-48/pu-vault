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
      <div className="flex flex-col gap-2 p-5">
        {!specialization && <SelectSpecialization />}
        {!division && <SelectDivision />}
      </div>
      <ContentTypeTabs />
    </div>
  );
}
