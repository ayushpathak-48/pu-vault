"use client";

import { TimeTableBody } from "@/components/time-table-body";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { divisions } from "@/lib/constants";
import { time_table, TimetableData } from "@/lib/constants/time-table";
import { useDataStore } from "@/stores/data.store";
import { Loader } from "lucide-react";
import { useQueryState } from "nuqs";
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
  const [activeDivision, setActiveDivision] = useQueryState("div", {
    defaultValue: division || "div_a",
  });
  // useState(division || "div_a");
  const [tableData, setTableData] = useState<TimetableData>([]);
  const currentDay = weekdays[date.getDay()]; // Get the current day name

  useEffect(() => {
    const tempData = time_table.filter(
      ({ division_key }) => division_key == activeDivision
    )[0]?.data;
    setTableData(tempData);
  }, [activeDivision]);

  return (
    <div className="flex w-full flex-col gap-2 p-5 lg:p-10">
      <Tabs
        defaultValue={activeDivision}
        onValueChange={setActiveDivision}
        className="w-full"
      >
        <TabsList className="w-full flex items-center justify-around p-1 h-max overflow-x-auto border-y gap-6">
          {divisions.map((div) => (
            <TabsTrigger
              key={div.id}
              value={div.value}
              className="py-2 data-[state=active]:bg-slate-700 data-[state=active]:text-white"
            >
              {div.label}
            </TabsTrigger>
          ))}
        </TabsList>
        <div className="p-5">
          {divisions.map((tab) => (
            <TabsContent key={tab.id} value={tab.value}>
              <div className="relative w-full overflow-x-auto mb-20">
                {!tableData ? (
                  <div className="h-40 flex items-center justify-center">
                    No time table found for Division:{" "}
                    {activeDivision.split("_")[1].toUpperCase()}
                  </div>
                ) : tableData?.length > 0 ? (
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
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </div>
  );
};

export default TimeTablePage;
