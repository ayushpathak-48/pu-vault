"use client";

import { SelectDivision } from "@/components/select-division";
import { TimeTableBody } from "@/components/time-table-body";
import { time_table, TimetableData } from "@/lib/constants/time-table";
import { useDataStore } from "@/stores/data.store";
import { Loader } from "lucide-react";
import { useEffect, useState } from "react";
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
  const [date] = useState(new Date());
  const division = useDataStore((state) => state.division);
  const [activeDivision, setActiveDivision] = useState(division || "div_a");
  const [tableData, setTableData] = useState<TimetableData>([]);
  const currentDay = weekdays[date.getDay()]; // Get the current day name

  const handleDivisionChange = (data: string) => {
    setActiveDivision(data);
  };

  useEffect(() => {
    const tempData = time_table.filter(
      ({ division_key }) => division_key == activeDivision
    )[0]?.data;
    setTableData(tempData);
    console.log({ tempData });
  }, [activeDivision]);

  return (
    <div className="flex w-full flex-col gap-2 p-5 lg:p-10">
      <div className="max-w-full">
        <SelectDivision
          onSelect={handleDivisionChange}
          defaultValue={activeDivision || ""}
        />
      </div>
      <div className="relative w-full overflow-x-auto mb-20">
        {tableData.length ? (
          <table
            border={1}
            className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
          >
            <TimeTableBody data={tableData} currentDay={currentDay} />
          </table>
        ) : (
          <div className="h-40 flex items-center justify-center">
            <Loader className="animate-spin" />
          </div>
        )}
      </div>
    </div>
  );
};

export default TimeTablePage;
