"use client";

import {
  TimetableData,
  TimeTableCell,
} from "@/lib/constants/time-table.constant";
import { cn } from "@/lib/utils";
import { useDataStore } from "@/stores/data.store";
import React from "react";

export const TimeTableBody = ({
  data,
  currentDay,
}: {
  data: TimetableData;
  currentDay: string;
}) => {
  const course = useDataStore((state) => state.course);
  return (
    <tbody>
      {data.map((table, i) => (
        <tr
          key={i}
          className={cn(
            "bg-white border-b border-gray-200 dark:bg-[#181818] dark:border-[#282828]",
          )}
        >
          {table.map(
            ({
              id,
              label,
              professor,
              classroom,
              lab,
              row_span,
              col_span,
              cellClassName,
              msc_it,
              mca,
            }: TimeTableCell) => {
              const isHeader = i === 0;
              const isMetaRow = id === 1 || id === 2;
              const isRecess = label === "Recess" || col_span === 7;
              const sameDay = label && label === currentDay;
              const isMscItOrMCA = msc_it || mca;
              return (
                <td
                  key={id}
                  rowSpan={row_span}
                  colSpan={col_span}
                  className={cn(
                    "px-6 py-4 text-center border ",
                    cellClassName || isMscItOrMCA
                      ? "font-medium"
                      : "text-emerald-900 bg-emerald-50",
                    isMetaRow &&
                      "text-slate-900 dark:text-gray-300 bg-white dark:bg-[#101010] font-medium",
                    isHeader &&
                      "uppercase bg-zinc-700 text-slate-300 font-semibold",
                    isRecess && "bg-neutral-500 text-white",
                    sameDay &&
                      "bg-teal-500 text-black dark:text-gray-300 font-bold",
                    cellClassName,
                  )}
                >
                  {isMscItOrMCA ? (
                    <>
                      {mca && course == "mca" ? (
                        <div className="flex flex-col">
                          <div className="flex flex-col text-purple-400">
                            {/* <div className="font-bold">MCA</div> */}
                            <SingleCell
                              label={mca?.label}
                              classroom={mca?.classroom}
                              lab={mca?.lab}
                              professor={mca?.professor}
                            />
                          </div>
                        </div>
                      ) : (
                        <div className="flex flex-col text-purple-400">
                          <div className="text-blue-400">
                            {/* <div className="font-bold">MScIt</div> */}
                            <SingleCell
                              label={msc_it?.label}
                              classroom={msc_it?.classroom}
                              lab={msc_it?.lab}
                              professor={msc_it?.professor}
                            />
                          </div>
                        </div>
                      )}
                    </>
                  ) : (
                    <SingleCell
                      label={label}
                      classroom={classroom}
                      lab={lab}
                      professor={professor}
                    />
                  )}
                </td>
              );
            },
          )}
        </tr>
      ))}
    </tbody>
  );
};

const SingleCell = ({
  label,
  professor,
  classroom,
  lab,
}: {
  label?: string;
  professor?: string | string[];
  classroom?: string;
  lab?: string[];
}) => (
  <>
    {" "}
    <div className="whitespace-nowrap">{label}</div>
    {professor && (
      <div className="whitespace-nowrap my-1.5">
        {Array.isArray(professor)
          ? professor.map((prof) => <div key={prof}>Prof: {prof}</div>)
          : "Prof: " + professor}
      </div>
    )}
    <div
      className={cn(
        "border-2 w-max mx-auto rounded-md border-gray-200 p-1 mt-1 dark:text-gray-300",
        classroom || lab ? "" : "hidden",
        "dark:!text-gray-300",
      )}
    >
      {classroom && <span>Class: {classroom}</span>}
      {lab && lab?.length > 0 && <span>Lab: {lab.join(", ")}</span>}
    </div>
  </>
);
