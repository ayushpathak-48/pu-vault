"use client";

import { practicalCodes } from "@/lib/constants/codes.constant";
import { useDataStore } from "@/stores/data.store";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const SoftwareLinksPage = () => {
  const specialization = useDataStore((state) => state.specialization);
  return (
    <div className="p-5 flex flex-col gap-10 w-full">
      <div className="flex flex-col gap-4">
        {practicalCodes.map(
          (subject) =>
            (!subject?.specialization ||
              specialization == subject?.specialization) && (
              <Link
                key={subject.key}
                href={`/code/${subject.key}/${subject.practicals[0].key}`}
              >
                <div className="flex group border border-transparent hover:text-sky-400 hover:dark:text-sky-700 hover:border-primary/50 cursor-pointer items-center justify-between bg-gray-100 dark:bg-[#181818] p-4 rounded-lg">
                  <h2 className="text-base md:text-lg font-medium hover:text-sky-500 hover:dark:text-sky-700 transition-all">
                    {subject.subject_name}
                  </h2>
                  <ArrowRight className="group-hover:-translate-x-1 transition-all" />
                </div>
              </Link>
            ),
        )}
      </div>
    </div>
  );
};

export default SoftwareLinksPage;
