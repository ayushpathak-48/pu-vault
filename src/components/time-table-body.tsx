import { TimetableData, TimeTableCell } from "@/lib/constants/time-table";
import { cn } from "@/lib/utils";
import React from "react";

export const TimeTableBody = ({
  data,
  currentDay,
}: {
  data: TimetableData;
  currentDay: string;
}) => {
  return (
    <tbody>
      {data.map((table, i) => (
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
            }: TimeTableCell) => {
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
                    cellClassName
                      ? "font-medium"
                      : "text-emerald-900 bg-emerald-50",
                    isMetaRow && "text-slate-900 bg-white font-medium",
                    isHeader &&
                      "uppercase bg-zinc-700 text-slate-300 font-semibold",
                    isRecess && "bg-neutral-500 text-white",
                    sameDay && "bg-teal-500 text-black font-bold",
                    cellClassName
                  )}
                >
                  <div className="whitespace-nowrap">{label}</div>
                  {professor && (
                    <div className="whitespace-nowrap my-1.5">
                      {Array.isArray(professor)
                        ? professor.map((prof) => (
                            <div key={prof}>Prof: {prof}</div>
                          ))
                        : "Prof: " + professor}
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
  );
};
