"use client";

import { CustomErrorPage } from "@/components/custom-error-page";
import { useDataGetters } from "@/hooks/use-data-getters";
import { ArrowRight } from "lucide-react";
import { useDataStore } from "@/stores/data.store";
import Link from "next/link";
import React from "react";

const McqsPage = () => {
  const { getMCQs } = useDataGetters();
  const mcqs = getMCQs();
  const course = useDataStore((state) => state.course);
  const specialization = useDataStore((state) => state.specialization);

  if (mcqs.length == 0) {
    return <CustomErrorPage errorText="MCQs not available right now" />;
  }

  return (
    <div className="p-5 flex flex-col gap-10 w-full">
      <div className="flex flex-col gap-4">
        {mcqs.map(
          (subject) =>
            (!subject?.specialization ||
              specialization == subject?.specialization) &&
            (!subject?.course || subject?.course == course) && (
              <Link
                key={subject.key}
                href={`/mcqs/${subject.key}/${subject.units[0].key}`}
              >
                <div className="flex group border border-transparent hover:text-primary hover:border-primary/50 cursor-pointer items-center justify-between bg-gray-100 dark:bg-[#181818] p-4 rounded-lg">
                  <h2 className="text-base md:text-lg font-medium hover:text-primary transition-all">
                    {subject.subject_name}
                  </h2>
                  <ArrowRight className="group-hover:-translate-x-1 transition-all" />
                </div>
              </Link>
            )
          // )
        )}
      </div>
    </div>
  );
};

export default McqsPage;
