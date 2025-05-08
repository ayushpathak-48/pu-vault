"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useQueryState } from "nuqs";
import { HomePageAccordionList } from "./home-accordion-list";
import { homePageTabs } from "@/lib/constants";
import {
  materials,
  specializationMaterials,
} from "@/lib/constants/materials.constant";

export const HomePageTabs = () => {
  const [currentTab, setCurrentTab] = useQueryState("view", {
    defaultValue: "materials",
  });
  return (
    <Tabs
      defaultValue={currentTab}
      onValueChange={setCurrentTab}
      className="w-full"
    >
      <TabsList className="w-full flex items-center justify-around py-0 h-max overflow-x-auto border-y">
        {homePageTabs.map((tab) => (
          <TabsTrigger
            key={tab.id}
            value={tab.key}
            className="py-2 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-teal-600 text-md data-[state=active]:border-b w-full data-[state=active]:border-teal-600 data-[state=active]:rounded-none"
          >
            {tab.title}
          </TabsTrigger>
        ))}
      </TabsList>
      <div className="p-5">
        {homePageTabs.map((tab) => (
          <TabsContent key={tab.id} value={tab.key}>
            <HomePageAccordionList
              tabData={materials}
              specializationTabData={specializationMaterials}
            />
          </TabsContent>
        ))}
      </div>
    </Tabs>
  );
};
