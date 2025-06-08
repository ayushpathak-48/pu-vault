"use client";

import { HomePageAccordionList } from "@/components/tabs/home-accordion-list";
import { useDataGetters } from "@/hooks/use-data-getters";

export default function Home() {
  const { getMaterials, getSpecializationMaterials } = useDataGetters();
  const materials = getMaterials();
  const specializationMaterials = getSpecializationMaterials();

  return (
    <div className="w-full h-full">
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
