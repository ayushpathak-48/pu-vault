import { time_table, TimeTableRow } from "@/lib/constants/time-table.constant";
import React, { useLayoutEffect, useState } from "react";

export const SingleWeekTimeTableBody = ({
  weekIndex,
  activeDivision,
}: {
  weekIndex: number;
  activeDivision: string;
}) => {
  const [timetableData, setTimetableData] = useState<TimeTableRow>([]);

  useLayoutEffect(() => {
    console.log({ weekIndex });
    const weekData: TimeTableRow = [];
    time_table.forEach((table) => {
      if (activeDivision == table.division_key) {
        table.data.forEach((row) => {
          if (row[weekIndex + 2]) {
            weekData.push(row[weekIndex + 2]);
          } else {
            weekData.push(row[weekIndex]);
          }
          return;
        });
      }
    });
    setTimetableData(weekData);
  }, []);
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col gap-2">
        {timetableData.map((table, i) => (
          <div className="" key={table?.id + "_" + i}>
            {table?.label}
          </div>
        ))}
      </div>
    </div>
  );
};
