import { CustomErrorPage } from "@/components/custom-error-page";
import { SingleWeekTimeTableBody } from "@/components/single-week-time-table-body";
import { TimeTableBody } from "@/components/time-table-body";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useDataGetters } from "@/hooks/use-data-getters";
import { divisions, weekdays } from "@/lib/constants";
import { TimetableData } from "@/lib/constants/sem-2/time-table.constant";
import { useDataStore } from "@/stores/data.store";
import { Loader, LayoutList, SheetIcon } from "lucide-react";
import { useQueryState } from "nuqs";
import { useEffect, useState } from "react";

const TimeTablePage = () => {
  const { getTimeTable } = useDataGetters();
  const TimeTable = getTimeTable();

  const course = useDataStore((state) => state.course);
  const hydrated = useDataStore((state) => state.hydrated);
  const [date] = useState(new Date());
  const currentDay = weekdays[date.getDay() - 1];

  const division = useDataStore((state) => state.division);
  const [activeDivision, setActiveDivision] = useQueryState("div", {
    defaultValue: division,
  });
  const [activeWeekTab, setActivewWeekTab] = useQueryState("week", {
    defaultValue: currentDay || "Monday",
  });
  const [tableData, setTableData] = useState<TimetableData>([]);
  const [timeTableViewType, setTimeTableViewType] = useQueryState("view", {
    defaultValue: "list",
  });

  useEffect(() => {
    if (!divisions.some(({ value }) => value == activeDivision)) {
      setActiveDivision(division);
    }
    const tempData = TimeTable.filter(
      ({ division_key }) => division_key == activeDivision,
    )[0]?.data;
    setTableData(tempData);
  }, [activeDivision, division, TimeTable]);

  if (!hydrated) {
    return (
      <div className="flex items-center justify-center h-96 w-full">
        <Loader className="animate-spin text-lg" />
      </div>
    );
  }

  if (TimeTable.length == 0) {
    return <CustomErrorPage errorText="Time table not available right now" />;
  }

  return (
    <div className="flex w-full flex-col gap-2 px-5 py-2">
      <Tabs
        value={timeTableViewType}
        onValueChange={(data) => setTimeTableViewType(data)}
        className="w-full"
      >
        <TabsList className="flex items-center justify-around p-1 h-max overflow-x-auto border bg-white dark:bg-[#101010]">
          <TabsTrigger
            value={"list"}
            className="py-2 data-[state=active]:bg-transparent data-[state=active]:rounded-none data-[state=active]:shadow-none data-[state=active]:border-slate-700  border-b border-transparent w-full"
          >
            <LayoutList className="mr-2 size-5" /> List
          </TabsTrigger>
          <TabsTrigger
            value={"table"}
            className="py-2 data-[state=active]:bg-transparent data-[state=active]:rounded-none data-[state=active]:shadow-none data-[state=active]:border-slate-700  border-b border-transparent w-full"
          >
            <SheetIcon className="mr-2 size-5" /> Table
          </TabsTrigger>
        </TabsList>
        {/* List View Type */}
        <TabsContent value={"list"}>
          <Tabs
            defaultValue={activeDivision}
            onValueChange={setActiveDivision}
            className="w-full"
          >
            <TabsList className="w-full flex items-center justify-around p-1 h-max overflow-x-auto border gap-6">
              {divisions.map((div) => {
                if (div?.courses && !div?.courses?.includes(course)) return;
                return (
                  <TabsTrigger
                    key={div.id}
                    value={div.value}
                    className="py-2 data-[state=active]:bg-slate-700 data-[state=active]:text-white"
                  >
                    {div.label}
                  </TabsTrigger>
                );
              })}
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
                          <TabsList className="w-full flex items-center justify-around p-1 h-max overflow-x-auto border gap-2">
                            {weekdays.map((week) => (
                              <TabsTrigger
                                key={week}
                                value={week}
                                className="py-2 data-[state=active]:bg-slate-700 data-[state=active]:text-white"
                              >
                                {week.slice(0, 3)}
                              </TabsTrigger>
                            ))}
                          </TabsList>
                          <div className="">
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
              {divisions.map((div) => {
                if (div?.courses && !div?.courses?.includes(course)) return;
                return (
                  <TabsTrigger
                    key={div.id}
                    value={div.value}
                    className="py-2 data-[state=active]:bg-slate-700 data-[state=active]:text-white"
                  >
                    {div.label}
                  </TabsTrigger>
                );
              })}
              {/* {divisions.map((div) => (
                <TabsTrigger
                  key={div.id}
                  value={div.value}
                  className="py-2 data-[state=active]:bg-slate-700 data-[state=active]:text-white"
                >
                  {div.label}
                </TabsTrigger>
              ))} */}
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
