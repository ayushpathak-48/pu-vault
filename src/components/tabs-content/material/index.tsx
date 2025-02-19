import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { materials } from "@/lib/constants/materials";
import Link from "next/link";
export const MaterialTabContent = () => {
  return (
    <Accordion type="single" collapsible className="w-full">
      {materials.map((material) => (
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
                      className="bg-sky-500"
                    >
                      View
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
