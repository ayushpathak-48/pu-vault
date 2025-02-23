"use client";

import { time_table, TimeTableRow } from "@/lib/constants/time-table";
import { cn } from "@/lib/utils";
import { useState } from "react";
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const TimeTablePage = () => {
  // const [date] = useState(new Date());
  const [date] = useState(new Date());
  const currentDay = weekdays[date.getDay() + 1]; // Get the current day name

  return (
    <div className="flex flex-col gap-2 p-5 lg:p-10">
      <div className="relative overflow-x-auto mb-20">
        <table
          border={1}
          className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
        >
          <tbody>
            {time_table[0].data.map((table, i) => (
              <tr
                key={i}
                className="bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700"
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
                  }: TimeTableRow) => {
                    const isHeader = i === 0;
                    const isMetaRow = id === 1 || id === 2;
                    const isRecess = label === "Recess" || col_span === 7;
                    const sameDay = label === currentDay;
                    return (
                      <td
                        key={id}
                        rowSpan={row_span}
                        colSpan={col_span}
                        className={cn(
                          "px-6 py-4 text-center border",
                          isMetaRow && "text-slate-900 font-medium",
                          isHeader &&
                            "uppercase bg-zinc-700 text-slate-300 font-semibold",
                          isRecess && "bg-neutral-500 text-white",
                          sameDay && "bg-teal-500 text-black font-bold",
                          cellClassName && "font-medium",
                          cellClassName
                        )}
                      >
                        <div className="whitespace-nowrap">{label}</div>
                        {professor && (
                          <div className="whitespace-nowrap">
                            Prof:{" "}
                            {Array.isArray(professor)
                              ? professor.join("/")
                              : professor}
                          </div>
                        )}
                        <div
                          className={cn(
                            "border-2 w-max mx-auto rounded-md border-gray-200 p-1 mt-1",
                            classroom || lab ? "" : "hidden"
                          )}
                        >
                          {classroom && <span>C: {classroom}</span>}
                          {lab && <span>L: {lab.join(", ")}</span>}
                        </div>
                      </td>
                    );
                  }
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TimeTablePage;
