"use client";

// import { SelectDivision } from "@/components/select-division";
// import { SelectSpecialization } from "@/components/select-specialization";
import { HomePageAccordionList } from "@/components/tabs/home-accordion-list";
import { Button } from "@/components/ui/button";
import { MATERIAL_LINK_BASE_URL } from "@/lib/constants";
import {
  materials,
  specializationMaterials,
} from "@/lib/constants/materials.constant";
// import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-full">
      <div className="p-2 lg:p-5 flex flex-col gap-1">
        <div className="bg-gray-50 rounded-md p-2 px-4 flex items-center justify-between gap-4">
          <div className="text-sm">End Sem Theory Time Table</div>
          <Button asChild size={"sm"}>
            <Link
              href={`${MATERIAL_LINK_BASE_URL}/time-table/sem-2-end-sem-theory-time-table.pdf`}
              target="_blank"
            >
              View
            </Link>
          </Button>
        </div>
        <div className="bg-gray-50 rounded-md p-2 px-4  flex items-center justify-between gap-4">
          <div className="text-sm">End Sem Practical Time Table</div>
          <Button asChild size={"sm"}>
            <Link
              href={`${MATERIAL_LINK_BASE_URL}/time-table/sem-2-end-sem-practical-time-table.pdf`}
              target="_blank"
            >
              View
            </Link>
          </Button>
        </div>
      </div>
      {/* <div
        className={cn(
          "flex flex-col gap-2 p-5",
          specialization && division && "hidden",
        )}
      >
        {!specialization && <SelectSpecialization />}
        {!division && <SelectDivision />}
      </div> */}
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
