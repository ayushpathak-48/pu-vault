/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { HomePageTabsType } from "@/lib/constants";
import { materials, specializationMaterials } from "@/lib/constants/materials";
import { useDataStore } from "@/stores/data.store";
import Link from "next/link";
import { useState } from "react";
export const MaterialTabContent = ({
  activeTab,
}: {
  activeTab: HomePageTabsType;
}) => {
  const [tabData] = useState(activeTab == "materials" ? materials : []);
  const [specializationTabData] = useState(
    activeTab == "materials" ? specializationMaterials : []
  );
  const specialization = useDataStore((state) => state.specialization);
  return (
    <Accordion type="single" collapsible className="w-full flex flex-col gap-2">
      {specializationTabData.map((item) => {
        if (item.value == specialization) {
          return <MaterialAccordionCard key={item.id} material={item} />;
        }
      })}
      {tabData.map((material) => (
        <MaterialAccordionCard key={material.id} material={material} />
      ))}
    </Accordion>
  );
};

const MaterialAccordionCard = ({ material }: any) => (
  <AccordionItem
    className="bg-gray-100"
    value={String(material.id + material.subject_name)}
  >
    <AccordionTrigger>{material.subject_name}</AccordionTrigger>
    <AccordionContent>
      <div className="flex items-center flex-col gap-2">
        {material.notes_link.map((note: any) => (
          <div
            key={note.id}
            className="bg-gray-50 p-2 w-full flex items-center justify-between gap-2"
          >
            <div className="text-md font-medium">
              <Link href={note.href}>{note.title}</Link>
            </div>
            <Button className="" asChild size={"sm"}>
              <Link
                href={note.href}
                target="_blank"
                className="bg-sky-500 hover:bg-sky-500/90"
              >
                View
              </Link>
            </Button>
          </div>
        ))}
      </div>
      <div className="flex max-md:justify-center mt-3">
        <Button className="bg-slate-700" size={"sm"} asChild>
          <Link href={material?.syllabus_link} target="_bank">
            View Syllabus
          </Link>
        </Button>
      </div>
    </AccordionContent>
  </AccordionItem>
);
