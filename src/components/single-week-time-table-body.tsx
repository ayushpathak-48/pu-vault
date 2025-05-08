"use client";

import { time_table, TimeTableRow } from "@/lib/constants/time-table.constant";
import { checkIsActiveTime, cn } from "@/lib/utils";
import { useDataStore } from "@/stores/data.store";
import React, { Fragment, useEffect, useLayoutEffect, useState } from "react";

export const SingleWeekTimeTableBody = ({
  weekIndex,
  activeDivision,
}: {
  weekIndex: number;
  activeDivision: string;
}) => {
  const [date] = useState(new Date());
  const currentDayIndex = date.getDay() - 1;

  const [timetableData, setTimetableData] = useState<TimeTableRow[]>([]);
  const [currentLectureIndex, setCurrentLectureIndex] = useState<number | null>(
    null,
  );

  const course = useDataStore((state) => state.course);

  useLayoutEffect(() => {
    const weekData: TimeTableRow[] = [];
    time_table.forEach((table) => {
      if (activeDivision == table.division_key) {
        table.data.forEach((row, rowInd) => {
          if ([0].includes(rowInd)) return;
          const data = row.find((ele) => ele.id == weekIndex + 3);
          if (data) {
            weekData.push([row[0], row[1], data]);
          } else {
            weekData.push([row[0], row[1]]);
          }
          return;
        });
      }
    });
    setTimetableData(weekData);
  }, []);

  useEffect(() => {
    timetableData.forEach((data, i) => {
      if (checkIsActiveTime(data[1]?.label)) {
        if (weekIndex == currentDayIndex) {
          setCurrentLectureIndex(i);
        }
      }
    });
  }, [timetableData, currentDayIndex, weekIndex]);

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col gap-2 w-full">
        {timetableData.map((table, i) => {
          if (timetableData[i - 1]?.[2]?.row_span == 2) return;
          if (table?.[2]?.mca && table?.[2]?.msc_it) {
            table[2] =
              course == "mca"
                ? {
                    id: table[2].id,
                    row_span: table?.[2]?.row_span,
                    ...table[2]?.mca,
                  }
                : {
                    id: table[2]?.id,
                    row_span: table?.[2]?.row_span,
                    ...table[2]?.msc_it,
                  };
          }
          return (
            <Fragment key={i}>
              {table[1]?.col_span == 7 ? (
                // Recess Card
                <div className="py-2 text-sm bg-neutral-200 dark:bg-[#282828] text-black dark:text-gray-300 text-center font-medium rounded-sm">
                  {table[1].label}
                </div>
              ) : (
                // Time Table Card
                <div>
                  {currentLectureIndex == i && (
                    <div className="bg-teal-100 dark:bg-teal-900 w-full p-1 text-xs font-semibold text-center text-teal-800 dark:text-teal-200 rounded-t-lg">
                      Ongoing Lecture
                    </div>
                  )}
                  {
                    // currentLectureIndex ==
                    // ((currentLectureIndex &&
                    // timetableData[currentLectureIndex]?.[2]?.row_span == 2
                    //   ? i - 3
                    //   : timetableData[i - 1]?.[1].col_span == 7
                    //   ? i - 2
                    //   : i - 1)
                    currentLectureIndex ==
                      (timetableData[i - 1]?.[1].col_span == 7
                        ? i - 2
                        : i - 1) && (
                      <div className="bg-orange-100 dark:bg-orange-900 dark:text-orange-200 w-full p-1 text-xs font-semibold text-center text-orange-800 rounded-t-lg">
                        Next Lecture
                      </div>
                    )
                  }
                  <div
                    className={cn(
                      "border w-full rounded-sm flex items-center justify-center gap-2",
                      currentLectureIndex == i &&
                        "rounded-t-none border-teal-200",
                      currentLectureIndex ==
                        (timetableData[i - 1]?.[1].col_span == 7
                          ? i - 2
                          : i - 1) && "rounded-t-none border-orange-200",
                    )}
                    key={table[0]?.id + "_" + i}
                  >
                    <div className="flex flex-col gap-2 items-center w-[100px] border-r-2 p-2 h-full">
                      {!table[2]?.professor && (
                        <div className="bg-emerald-100 text-emerald-800 text-center px-2 w-full rounded-sm text-xs">
                          Free
                        </div>
                      )}
                      {!table[2]?.lab &&
                        !table[2]?.classroom &&
                        table[2]?.professor && (
                          <div className="bg-orange-100 text-orange-800 text-center px-2 w-full rounded-sm text-xs">
                            Online
                          </div>
                        )}
                      {table[2]?.classroom && (
                        <div className="bg-teal-100 text-teal-800 text-center px-2 w-full rounded-sm text-xs">
                          Lecture
                        </div>
                      )}
                      {table[2]?.lab && (
                        <div className="bg-purple-100 text-purple-800 text-center px-2 w-full rounded-sm text-xs">
                          Lab
                        </div>
                      )}
                      <div className="whitespace-wrap flex flex-col text-xs items-center justify-center text-center text-black dark:text-gray-300 font-medium">
                        <span>{table[1].label?.split(" ")[0]}</span>
                        <span>{table[1].label?.split(" ")[1]}</span>
                        <span>{table[1].label?.split(" ")[2]}</span>
                      </div>

                      {table[2]?.row_span == 2 && (
                        <div className=" border-t-2 pt-2 whitespace-wrap flex flex-col text-xs items-center justify-center text-center text-black dark:text-gray-300 font-medium">
                          <span>
                            {timetableData[i + 1][1].label?.split(" ")[0]}
                          </span>
                          <span>
                            {timetableData[i + 1][1].label?.split(" ")[1]}
                          </span>
                          <span>
                            {timetableData[i + 1][1].label?.split(" ")[2]}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="w-full flex flex-col gap-2 p-3">
                      <div
                        className={cn(
                          "text-sm",
                          !table[2]?.professor && "text-center ",
                        )}
                      >
                        {table[2]?.professor && "Subject: "}
                        <span className="font-semibold">{table[2]?.label}</span>
                      </div>
                      {table[2]?.professor && (
                        <div className="text-sm ">
                          Professor:{" "}
                          <span className="font-semibold">
                            {typeof table[2]?.professor == "string"
                              ? table[2]?.professor
                              : table[2]?.professor?.join(", ")}
                          </span>
                        </div>
                      )}
                      {table[2]?.classroom && (
                        <div className="text-sm ">
                          Classroom:{" "}
                          <span className="font-semibold">
                            {table[2]?.classroom}
                          </span>
                        </div>
                      )}
                      {table[2]?.lab && (
                        <div className="text-sm ">
                          Lab:{" "}
                          <span className="font-semibold">
                            {table[2]?.lab?.join(", ")}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};
