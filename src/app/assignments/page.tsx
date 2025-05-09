import { assignments } from "@/lib/constants/assignments.constant";
import Link from "next/link";
import React from "react";

const AsssignmentsPage = () => {
  return (
    <div className="p-5 flex flex-col gap-10 w-full">
      <div className="flex flex-col gap-4">
        {assignments.map((software) => (
          <div
            key={software.id}
            className="flex items-center justify-between bg-gray-100 dark:bg-[#181818] p-4 rounded-lg"
          >
            <Link target="_blank" href={software.href}>
              <h2 className="text-base md:text-lg font-medium hover:text-primary transition-all">
                {software.title}
              </h2>
            </Link>
            <Link
              href={software.href}
              target="_blank"
              className="font-medium text-primary"
            >
              View
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AsssignmentsPage;
