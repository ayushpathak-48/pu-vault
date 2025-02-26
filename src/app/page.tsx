"use client";

import { SelectDivision } from "@/components/select-division";
import { SelectSpecialization } from "@/components/select-specialization";
import { HomePageAccordionList } from "@/components/tabs/home-accordion-list";
import {
  materials,
  specializationMaterials,
} from "@/lib/constants/materials.constant";
import { cn } from "@/lib/utils";
import { useDataStore } from "@/stores/data.store";

export default function Home() {
  const specialization = useDataStore((state) => state.specialization);
  const division = useDataStore((state) => state.division);
  return (
    <div className="w-full h-full">
      <div
        className={cn(
          "flex flex-col gap-2 p-5",
          specialization && division && "hidden"
        )}
      >
        {!specialization && <SelectSpecialization />}
        {!division && <SelectDivision />}
      </div>
      <div className="my-4 text-3xl font-semibold mx-auto custom-heading text-center">
        All Materials
      </div>
      <div className="p-5 h-full">
        <HomePageAccordionList
          tabData={materials}
          specializationTabData={specializationMaterials}
        />
      </div>
    </div>
  );
}
