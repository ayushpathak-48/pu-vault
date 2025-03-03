"use client";

import { SingleWeekTimeTableBody } from "@/components/single-week-time-table-body";
import { TimeTableBody } from "@/components/time-table-body";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { divisions, weekdays } from "@/lib/constants";
import { time_table, TimetableData } from "@/lib/constants/time-table.constant";
import { useDataStore } from "@/stores/data.store";
import { Loader } from "lucide-react";
import { useQueryState } from "nuqs";
import { useEffect, useState } from "react";

const TimeTablePage = () => {
  const [date] = useState(new Date());
  const currentDay = weekdays[date.getDay() - 1];

  const division = useDataStore((state) => state.division);
  const [activeDivision, setActiveDivision] = useQueryState("div", {
    defaultValue: division || "div_a",
  });
  const [activeWeekTab, setActivewWeekTab] = useQueryState("week", {
    defaultValue: currentDay,
  });
  const [tableData, setTableData] = useState<TimetableData>([]);
  const [timeTableViewType, setTimeTableViewType] = useQueryState("view", {
    defaultValue: "table",
  });

  useEffect(() => {
    if (!divisions.some(({ value }) => value == activeDivision)) {
      setActiveDivision(division);
    }
    const tempData = time_table.filter(
      ({ division_key }) => division_key == activeDivision
    )[0]?.data;
    setTableData(tempData);
  }, [activeDivision, division]);

  return (
    <div className="flex w-full flex-col gap-2 p-5 lg:p-10">
      <Tabs
        defaultValue={timeTableViewType}
        onValueChange={(data) => setTimeTableViewType(data)}
        className="w-full"
      >
        {/* <TabsList className="flex items-center justify-around p-1 h-max overflow-x-auto border w-max">
          <TabsTrigger
            value={"list"}
            className="py-2 data-[state=active]:bg-slate-700 data-[state=active]:text-white w-full"
          >
            List
          </TabsTrigger>
          <TabsTrigger
            value={"table"}
            className="py-2 data-[state=active]:bg-slate-700 data-[state=active]:text-white w-full"
          >
            Table
          </TabsTrigger>
        </TabsList> */}
        {/* <div className="md:p-5 border-2 rounded-lg md:border-slate-100 border-t-0 "> */}
        {/* List View Type */}
        <TabsContent value={"list"}>
          <Tabs
            defaultValue={activeDivision}
            onValueChange={setActiveDivision}
            className="w-full"
          >
            <TabsList className="w-full flex items-center justify-around p-1 h-max overflow-x-auto border gap-6">
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
            <div className="">
              {divisions.map((tab) => (
                <TabsContent key={tab.id} value={tab.value}>
                  <div className="relative w-full overflow-x-auto">
                    {!tableData ? (
                      <div className="h-40 flex items-center justify-center">
                        No time table found for Division:{" "}
                        {activeDivision.split("_")[1].toUpperCase()}
                      </div>
                    ) : tableData?.length > 0 ? (
                      <>
                        <Tabs
                          defaultValue={activeWeekTab}
                          onValueChange={setActivewWeekTab}
                          className="w-full"
                        >
                          <TabsList className="w-full flex items-center justify-around p-1 h-max overflow-x-auto border gap-6">
                            {weekdays.map((week) => (
                              <TabsTrigger
                                key={week}
                                value={week}
                                className="py-2 data-[state=active]:bg-slate-700 data-[state=active]:text-white"
                              >
                                {week}
                              </TabsTrigger>
                            ))}
                          </TabsList>
                          <div className="md:p-5 border-2 rounded-lg md:border-slate-100 border-t-0">
                            {weekdays.map((week, i) => (
                              <TabsContent key={week} value={week}>
                                <SingleWeekTimeTableBody
                                  weekIndex={i}
                                  activeDivision={activeDivision}
                                />
                              </TabsContent>
                            ))}
                          </div>
                        </Tabs>
                      </>
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
        </TabsContent>

        {/* Table View Type */}
        <TabsContent value={"table"}>
          <Tabs
            defaultValue={activeDivision}
            onValueChange={setActiveDivision}
            value={activeDivision}
            className="w-full"
          >
            <TabsList className="w-full flex items-center justify-around p-1 h-max overflow-x-auto border gap-6">
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
            <div className="md:p-5 border-2 rounded-lg md:border-slate-100 border-t-0">
              {divisions.map((tab) => (
                <TabsContent key={tab.id} value={tab.value}>
                  <div className="relative w-full overflow-x-auto">
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
                        <TimeTableBody
                          data={tableData}
                          currentDay={currentDay}
                        />
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
        </TabsContent>
        {/* </div> */}
      </Tabs>
    </div>
  );
};

export default TimeTablePage;
