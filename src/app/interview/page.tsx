import { interviewQuestions } from "@/lib/constants/interviewQuestions.constant";
import Link from "next/link";
import React from "react";

const SoftwareLinksPage = () => {
  return (
    <div className="p-5 flex flex-col gap-10 w-full">
      {/* <h2 className="text-2xl font-semibold custom-heading text-center">
        All Assignments Link
      </h2> */}
      <div className="flex flex-col gap-4">
        {interviewQuestions.map((software) => (
          <div
            key={software.id}
            className="flex items-center justify-between bg-gray-100 dark:bg-[#181818] p-4 rounded-lg"
          >
            <Link href={software.href}>
              <h2 className="text-lg font-medium hover:text-teal-500 hover:dark:text-teal-700 transition-all">
                {software.title}
              </h2>
            </Link>
            <Link
              href={software.href}
              target="_blank"
              className="font-medium text-teal-600 dark:text-teal-700"
            >
              View
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SoftwareLinksPage;
