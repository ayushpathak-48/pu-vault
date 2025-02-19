import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { HomePageTabsType } from "@/lib/constants";
import { materials } from "@/lib/constants/materials";
import Link from "next/link";
import { useState } from "react";
export const MaterialTabContent = ({
  activeTab,
}: {
  activeTab: HomePageTabsType;
}) => {
  const [tabData] = useState(activeTab == "materials" ? materials : []);
  return (
    <Accordion type="single" collapsible className="w-full flex flex-col gap-2">
      {tabData.map((material) => (
        <AccordionItem
          className="bg-gray-100"
          key={material.id}
          value={String(material.id)}
        >
          <AccordionTrigger>{material.subject_name}</AccordionTrigger>
          <AccordionContent>
            <div className="flex items-center flex-col gap-2">
              {material.notes_link.map((note) => (
                <div
                  key={note.id}
                  className="bg-gray-50 p-2 w-full flex items-center justify-between"
                >
                  <div className="text-md font-medium">{note.title}</div>
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
              <Button className="bg-slate-700" size={"sm"}>
                View Syllabus
              </Button>
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
