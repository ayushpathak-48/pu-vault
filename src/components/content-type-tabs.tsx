"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useQueryState } from "nuqs";

export const ContentTypeTabs = () => {
  const [currentTab, setCurrentTab] = useQueryState("content-type", {
    defaultValue: "materials",
  });
  return (
    <Tabs
      defaultValue={currentTab}
      onValueChange={setCurrentTab}
      className="w-full"
    >
      <TabsList className="w-full flex items-center justify-around py-0 h-max">
        <TabsTrigger
          value="materials"
          className="py-2 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-sky-600 text-md data-[state=active]:border-b w-full data-[state=active]:border-sky-600 data-[state=active]:rounded-none"
        >
          Materials
        </TabsTrigger>
        <TabsTrigger
          value="practicals"
          className="py-2 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-sky-600 text-md data-[state=active]:border-b w-full data-[state=active]:border-sky-600 data-[state=active]:rounded-none"
        >
          Practicals
        </TabsTrigger>
        <TabsTrigger
          value="assignments"
          className="py-2 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-sky-600 text-md data-[state=active]:border-b w-full data-[state=active]:border-sky-600 data-[state=active]:rounded-none"
        >
          Assignments
        </TabsTrigger>
        <TabsTrigger
          value="videos"
          className="py-2 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-sky-600 text-md data-[state=active]:border-b w-full data-[state=active]:border-sky-600 data-[state=active]:rounded-none"
        >
          Videos
        </TabsTrigger>
      </TabsList>
      <TabsContent value="materials">Materials Content</TabsContent>
      <TabsContent value="practicals">Practicals Content</TabsContent>
      <TabsContent value="assignments">Assignments Content</TabsContent>
      <TabsContent value="videos">Videos Content</TabsContent>
    </Tabs>
  );
};
