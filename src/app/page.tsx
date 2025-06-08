"use client";

import { HomePageAccordionList } from "@/components/tabs/home-accordion-list";
import { useDataGetters } from "@/hooks/use-data-getters";
import { sem2specializationMaterials } from "@/lib/constants/sem-2/materials.constant";

export default function Home() {
  const { getMaterials } = useDataGetters();
  const materials = getMaterials();

  return (
    <div className="w-full h-full">
      <div className="my-4 text-3xl font-semibold mx-auto custom-heading text-center">
        All Materials
      </div>
      <div className="p-5 h-full">
        <HomePageAccordionList
          tabData={materials}
          specializationTabData={sem2specializationMaterials}
        />
      </div>
    </div>
  );
}
