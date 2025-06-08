"use client";

import { CustomErrorPage } from "@/components/custom-error-page";
import { HomePageAccordionList } from "@/components/tabs/home-accordion-list";
import { useDataGetters } from "@/hooks/use-data-getters";

export default function Home() {
  const { getMaterials, getSpecializationMaterials } = useDataGetters();
  const materials = getMaterials();
  const specializationMaterials = getSpecializationMaterials();

  return (
    <div className="w-full h-full">
      {materials.length > 0 || specializationMaterials.length > 0 ? (
        <div className="p-5 h-full">
          <HomePageAccordionList
            tabData={materials}
            specializationTabData={specializationMaterials}
          />
        </div>
      ) : (
        <CustomErrorPage errorText="Materials not available right now" />
      )}
    </div>
  );
}
