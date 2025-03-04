/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { useDataStore } from "@/stores/data.store";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Send } from "lucide-react";
import { practicalCodes } from "@/lib/constants/codes.constant";
export const HomePageAccordionList = ({
  tabData,
  specializationTabData,
}: {
  tabData: any;
  specializationTabData: any;
}) => {
  const specialization = useDataStore((state) => state.specialization);
  return (
    <Accordion type="single" collapsible className="w-full flex flex-col gap-2">
      {specializationTabData.map((item: any) => {
        if (item.value == specialization) {
          return <MaterialAccordionCard key={item.id} material={item} />;
        }
      })}
      {tabData.map((material: any) => (
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
      <Tabs defaultValue={"notes"} className="w-full">
        {material?.practicals_link?.length > 0 && (
          <TabsList className="w-full flex items-center justify-around py-0 h-max overflow-x-auto border-y">
            {material.practicals_link?.length > 0 && (
              <TabsTrigger
                value={"notes"}
                className="py-2 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-sky-600 text-md data-[state=active]:border-b w-full data-[state=active]:border-sky-600 data-[state=active]:rounded-none"
              >
                Notes
              </TabsTrigger>
            )}
            <TabsTrigger
              value={"practicals"}
              className="py-2 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-sky-600 text-md data-[state=active]:border-b w-full data-[state=active]:border-sky-600 data-[state=active]:rounded-none"
            >
              Practicals
            </TabsTrigger>
            {practicalCodes?.some(({ key }) => key == material?.key) && (
              <TabsTrigger
                value={"codes"}
                className="py-2 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-sky-600 text-md data-[state=active]:border-b w-full data-[state=active]:border-sky-600 data-[state=active]:rounded-none"
              >
                Source Codes
              </TabsTrigger>
            )}
          </TabsList>
        )}
        <div className="p-2">
          <TabsContent value={"notes"}>
            {material?.notes_link?.length > 0 ? (
              <div className="flex items-center flex-col gap-2">
                {material.notes_link.map((note: any) => (
                  <div
                    key={note.id}
                    className="bg-gray-50 p-2 w-full flex items-center justify-between gap-2"
                  >
                    <div className="text-md font-medium">
                      <Link target="_blank" href={note.href}>
                        {note.title}
                      </Link>
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
            ) : (
              <div className="flex flex-col items-center justify-center h-40 gap-3">
                <div className="flex items-center justify-center gap-1 flex-wrap">
                  No Notes Available for{" "}
                  <div className="font-bold"> {material.subject_name}</div>
                </div>
                <div className="flex items-center justify-center gap-1 flex-wrap">
                  If you have it then you can send it here{" "}
                  <Button size={"sm"} variant={"outline"} asChild>
                    <Link
                      href={`https://wa.me/919157587671?text=Hey I want to provide your notes of ${material.subject_name}`}
                      target="_blank"
                    >
                      <span className="md:hidden mr-1">Whatsapp</span>
                      <Send />
                    </Link>
                  </Button>
                </div>
              </div>
            )}
          </TabsContent>
          <TabsContent value={"practicals"} className="flex flex-col gap-2">
            <div className="flex items-center flex-col gap-2">
              {material?.output_links?.map((practical: any) => (
                <div
                  key={practical.id}
                  className="bg-gray-50 p-2 w-full flex items-center justify-between gap-2"
                >
                  <div className="text-md font-medium">
                    <Link target="_blank" href={practical.journal_link}>
                      <span className="custom-heading">Output:</span>{" "}
                      {practical.title}
                    </Link>
                  </div>
                  <Button className="" asChild size={"sm"}>
                    <Link
                      href={practical.journal_link}
                      target="_blank"
                      className="bg-sky-500 hover:bg-sky-500/90"
                    >
                      View
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
            <div className="flex items-center flex-col gap-2">
              {material.practicals_link.map((practical: any) => (
                <div
                  key={practical.id}
                  className="bg-gray-50 p-2 w-full flex items-center justify-between gap-2"
                >
                  <div className="text-md font-medium">
                    <Link href={practical.journal_link}>
                      <span className="custom-heading">Journal:</span>{" "}
                      {practical.title}
                    </Link>
                  </div>
                  <Button className="" asChild size={"sm"}>
                    <Link
                      href={practical.journal_link}
                      target="_blank"
                      className="bg-sky-500 hover:bg-sky-500/90"
                    >
                      View
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value={"codes"} className="flex flex-col gap-2">
            <div className="flex items-center flex-col gap-2">
              {practicalCodes
                ?.find(({ key }) => key == material?.key)
                ?.practicals.map((practical) => (
                  <div
                    key={practical.key}
                    className="bg-gray-50 p-2 w-full flex items-center justify-between gap-2"
                  >
                    <div className="text-md font-medium">
                      <Link
                        href={`/code/${material.key}?practical=${practical.key}`}
                      >
                        {practical.name}
                      </Link>
                    </div>
                    <Button className="" asChild size={"sm"}>
                      <Link
                        href={`/code/${material.key}?practical=${practical.key}`}
                        className="bg-sky-500 hover:bg-sky-500/90"
                      >
                        View
                      </Link>
                    </Button>
                  </div>
                ))}
            </div>
          </TabsContent>
        </div>
      </Tabs>

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
