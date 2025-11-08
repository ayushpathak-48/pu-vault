"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CustomErrorPage } from "@/components/custom-error-page";
import { useDataGetters } from "@/hooks/use-data-getters";
import { useDataStore } from "@/stores/data.store";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const SoftwareLinksPage = () => {
  const specialization = useDataStore((state) => state.specialization);
  const { getPracticalCodes } = useDataGetters();
  const practicalCodes = getPracticalCodes();

  if (practicalCodes.length === 0) {
    return <CustomErrorPage errorText="Source Codes not available right now" />;
  }

  return (
    <div className="p-5 flex flex-col gap-10 w-full">
      <h1 className="text-xl md:text-2xl font-semibold text-center">
        Practical Code Library
      </h1>

      <Accordion type="single" collapsible className="w-full">
        {practicalCodes.map(
          (subject) =>
            (!subject?.specialization ||
              specialization === subject?.specialization) && (
              <AccordionItem key={subject.key} value={subject.key} className="bg-gray-100 dark:bg-[#181818] rounded-sm mb-3">
                <AccordionTrigger className=" text-base md:text-lg font-medium hover:text-primary transition-all">
                  {subject.subject_name}
                </AccordionTrigger>
                <AccordionContent className="space-y-2">
                  {subject.practicals.map((practical) => (
                    <Link
                      key={practical.key}
                      href={`/code/${subject.key}/${practical.key}`}
                      className="flex items-center justify-between border border-transparent hover:border-primary/50 hover:text-primary  bg-background p-3 rounded-lg transition-all"
                    >
                      <span>{practical.name}</span>
                      <ArrowRight className="group-hover:-translate-x-1 transition-all" />
                    </Link>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ),
        )}
      </Accordion>
    </div>
  );
};

export default SoftwareLinksPage;
