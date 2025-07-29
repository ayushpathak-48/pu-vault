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
import { DownloadIcon, Send } from "lucide-react";
import { cn, downloadFile } from "@/lib/utils";
import { useQueryState } from "nuqs";
import { useDataGetters } from "@/hooks/use-data-getters";
export const HomePageAccordionList = ({
  tabData,
  specializationTabData,
}: {
  tabData: any;
  specializationTabData: any;
}) => {
  const specialization = useDataStore((state) => state.specialization);
  const course = useDataStore((state) => state.course);

  const [activeSubject, setActiveSubject] = useQueryState("subject", {
    defaultValue: "",
  });

  const [activeTabSection, setActiveTabSection] = useQueryState("tab", {
    defaultValue: "notes",
  });

  return (
    <Accordion
      type="single"
      collapsible
      className="w-full flex flex-col gap-2"
      value={activeSubject}
      onValueChange={(data) => {
        setActiveTabSection("notes");
        setActiveSubject(data);
      }}
    >
      {specializationTabData.map((item: any) => {
        if (item.value == specialization) {
          return <MaterialAccordionCard key={item.id} material={item} />;
        }
      })}
      {tabData.map((material: any) => {
        if (
          material?.courses?.length > 0 &&
          !material?.courses?.includes(course)
        )
          return;
        return (
          <MaterialAccordionCard
            setActiveTabSection={setActiveTabSection}
            activeTabSection={activeTabSection}
            key={material.id}
            material={material}
          />
        );
      })}
    </Accordion>
  );
};

const MaterialAccordionCard = ({
  material,
  activeTabSection,
  setActiveTabSection,
}: any) => {
  const { getPracticalCodes } = useDataGetters();
  const practicalCodes = getPracticalCodes();
  return (
    <AccordionItem
      className="bg-gray-100 dark:bg-[#181818]"
      value={material.key}
    >
      <AccordionTrigger>{material.subject_name}</AccordionTrigger>
      <AccordionContent>
        <Tabs
          defaultValue="notes"
          value={activeTabSection}
          onValueChange={setActiveTabSection}
          className="w-full"
        >
          <TabsList className="w-full flex items-center justify-around py-0 h-max overflow-x-auto border-y">
            <TabsTrigger
              value={"notes"}
              className="py-2 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-primary text-md data-[state=active]:border-b w-full data-[state=active]:border-primary data-[state=active]:rounded-none"
            >
              Notes
            </TabsTrigger>
            {material.practicals_link?.length > 0 && (
              <TabsTrigger
                value={"practicals"}
                className="py-2 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-primary text-md data-[state=active]:border-b w-full data-[state=active]:border-primary data-[state=active]:rounded-none"
              >
                Journal
              </TabsTrigger>
            )}
            {practicalCodes?.some(({ key }) => key == material?.key) && (
              <TabsTrigger
                value={"codes"}
                className="py-2 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-primary text-md data-[state=active]:border-b w-full data-[state=active]:border-primary data-[state=active]:rounded-none"
              >
                Practical Codes
              </TabsTrigger>
            )}
            {material?.que_papers?.length > 0 && (
              <TabsTrigger
                value={"que_papers"}
                className="py-2 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-primary text-md data-[state=active]:border-b w-full data-[state=active]:border-primary data-[state=active]:rounded-none"
              >
                Question Papers
              </TabsTrigger>
            )}
          </TabsList>
          <div className="md:px-3">
            <TabsContent value={"notes"}>
              {material?.notes_link?.length > 0 ? (
                <div className={cn("flex items-center flex-col gap-2")}>
                  {material.notes_link.map((note: any) => (
                    <div
                      key={note.id}
                      className="bg-gray-50 dark:bg-[#212121] p-2 w-full flex items-center justify-between gap-2"
                    >
                      <div className="text-md font-medium">
                        <Link target="_blank" href={note.href}>
                          {note.title}
                        </Link>
                      </div>
                      <div className="flex items-center gap-1">
                        <Button
                          onClick={() => downloadFile(note.href)}
                          size={"sm"}
                        >
                          <DownloadIcon />
                        </Button>
                        <Button className="" asChild size={"sm"}>
                          <Link
                            href={note.href}
                            target="_blank"
                            className="bg-primary hover:bg-primary/90"
                          >
                            View
                          </Link>
                        </Button>
                      </div>
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
                    className="bg-gray-50 dark:bg-[#212121] p-2 w-full flex items-center justify-between gap-2"
                  >
                    <div className="text-md font-medium">
                      <Link target="_blank" href={practical.journal_link}>
                        <span className="custom-heading">Output:</span>{" "}
                        {practical.title}
                      </Link>
                    </div>

                    <div className="flex items-center gap-1">
                      <Button
                        onClick={() => downloadFile(practical.journal_link)}
                        size={"sm"}
                      >
                        <DownloadIcon />
                      </Button>
                      <Button className="" asChild size={"sm"}>
                        <Link
                          href={practical.journal_link}
                          target="_blank"
                          className="bg-primary hover:bg-primary/90"
                        >
                          View
                        </Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-center flex-col gap-2">
                {material.practicals_link.map((practical: any) => (
                  <div
                    key={practical.id}
                    className="bg-gray-50 dark:bg-[#212121] p-2 w-full flex items-center justify-between gap-2"
                  >
                    <div className="text-md font-medium">
                      <Link href={practical.journal_link}>
                        <span className="custom-heading">Journal:</span>{" "}
                        {practical.title}
                      </Link>
                    </div>

                    <div className="flex items-center gap-1">
                      <Button
                        onClick={() => downloadFile(practical.journal_link)}
                        size={"sm"}
                      >
                        <DownloadIcon />
                      </Button>
                      <Button className="" asChild size={"sm"}>
                        <Link
                          href={practical.journal_link}
                          target="_blank"
                          className="bg-primary hover:bg-primary/90"
                        >
                          View
                        </Link>
                      </Button>
                    </div>
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
                      className="bg-gray-50 dark:bg-[#212121] p-2 w-full flex items-center justify-between gap-2"
                    >
                      <div className="text-md font-medium">
                        <Link href={`/code/${material.key}/${practical.key}`}>
                          {practical.name}
                        </Link>
                      </div>
                      <div className="flex items-center gap-1">
                        <Button
                          onClick={() =>
                            downloadFile(
                              `/code/${material.key}/${practical.key}`,
                            )
                          }
                          size={"sm"}
                        >
                          <DownloadIcon />
                        </Button>
                        <Button className="" asChild size={"sm"}>
                          <Link
                            href={`/code/${material.key}/${practical.key}`}
                            className="bg-primary hover:bg-primary/90"
                          >
                            View
                          </Link>
                        </Button>
                      </div>
                    </div>
                  ))}
              </div>
            </TabsContent>
            <TabsContent value={"que_papers"} className="flex flex-col gap-2">
              <div className="flex items-center flex-col gap-2">
                {material?.que_papers?.map((paper: any) => (
                  <div
                    key={paper.id}
                    className="bg-gray-50 dark:bg-[#212121] p-2 w-full flex items-center justify-between gap-2"
                  >
                    <div className="text-md font-medium">
                      <Link target="_blank" href={paper?.href}>
                        {paper.label}
                      </Link>
                    </div>

                    <div className="flex items-center gap-1">
                      <Button
                        onClick={() => downloadFile(paper?.href)}
                        size={"sm"}
                      >
                        <DownloadIcon />
                      </Button>
                      <Button className="" asChild size={"sm"}>
                        <Link
                          target="_blank"
                          href={paper?.href}
                          className="bg-primary hover:bg-primary/90"
                        >
                          View
                        </Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </div>
        </Tabs>

        <div
          className={cn(
            "flex max-md:justify-center mt-3",
            material?.syllabus_link == "" && "hidden",
          )}
        >
          <Button size={"sm"} asChild>
            <Link href={material?.syllabus_link} target="_bank">
              View Syllabus
            </Link>
          </Button>
        </div>
        {material?.syllabus_link == "" && (
          <Button size={"sm"} disabled>
            Syllabus Not Updated
          </Button>
        )}
      </AccordionContent>
    </AccordionItem>
  );
};
