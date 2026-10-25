/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useMemo } from "react";
import { useDataGetters } from "@/hooks/use-data-getters";
import { useDataStore } from "@/stores/data.store";
import { divisions, weekdays } from "@/lib/constants";
import {
  CalendarDays,
  Clock,
  MapPin,
  User,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function TimeTablePage() {
  const { getTimeTable } = useDataGetters();
  const rawTimetable = getTimeTable();

  const currentStoreDivision = useDataStore((state) => state.division);
  const setStoreDivision = useDataStore((state) => state.setDivision);
  const sem = useDataStore((state) => state.sem);
  const course = useDataStore((state) => state.course);

  // Selected Division state
  const [selectedDivKey, setSelectedDivKey] = useState<string>(
    currentStoreDivision || "div_a",
  );

  // Determine current day of week (Monday=0 to Saturday=5, Sunday=none)
  const currentDayIndex = useMemo(() => {
    const day = new Date().getDay(); // 0 is Sunday, 1 is Monday...
    return day === 0 ? 0 : day - 1; // 0 for Monday, 5 for Saturday
  }, []);

  const [selectedDayIndex, setSelectedDayIndex] = useState<number>(
    currentDayIndex >= 0 && currentDayIndex <= 5 ? currentDayIndex : 0,
  );

  const [viewMode, setViewMode] = useState<"day" | "week">("day");

  // Find timetable data for the selected division
  const currentDivisionData = useMemo(() => {
    if (!rawTimetable || rawTimetable.length === 0) return null;
    return (
      rawTimetable.find(
        (div: any) =>
          div.division_key === selectedDivKey ||
          div.division_key === selectedDivKey.toLowerCase(),
      ) || rawTimetable[0]
    );
  }, [rawTimetable, selectedDivKey]);

  // Extract lectures for the selected day
  const dailyLectures = useMemo(() => {
    if (!currentDivisionData?.data || currentDivisionData.data.length < 2) {
      return [];
    }

    const colIndex = selectedDayIndex + 2; // Monday is index 2
    const rows = currentDivisionData.data.slice(1); // skip header row

    return rows.map((row: any[], rIndex: number) => {
      const slotNum = row[0]?.label || (rIndex + 1).toString();
      const slotTime = row[1]?.label || "";
      const cell = row[colIndex];

      // Handle course-specific overrides (mca vs msc_it)
      let subject = cell?.label || "";
      let professor = cell?.professor || "";
      let classroom = cell?.classroom || "";
      let lab = cell?.lab || null;

      if (course === "mscit" && cell?.msc_it) {
        subject = cell.msc_it.label || subject;
        professor = cell.msc_it.professor || professor;
        classroom = cell.msc_it.classroom || classroom;
        lab = cell.msc_it.lab || lab;
      } else if (course === "mca" && cell?.mca) {
        subject = cell.mca.label || subject;
        professor = cell.mca.professor || professor;
        classroom = cell.mca.classroom || classroom;
        lab = cell.mca.lab || lab;
      }

      return {
        slot: slotNum,
        time: slotTime,
        subject: subject.trim(),
        professor: Array.isArray(professor)
          ? professor.join(", ")
          : professor,
        classroom,
        lab: Array.isArray(lab) ? lab.join(", ") : lab,
        isLab: subject.toLowerCase().includes("[lab]") || Boolean(lab),
        isEmpty: !subject || subject === "-" || subject.toLowerCase() === "free",
      };
    });
  }, [currentDivisionData, selectedDayIndex, course]);

  if (!rawTimetable || rawTimetable.length === 0) {
    return (
      <div className="p-6 md:p-10 max-w-4xl mx-auto text-center space-y-4">
        <div className="size-16 rounded-3xl bg-white/50 dark:bg-white/[0.06] border border-white/60 dark:border-white/[0.1] backdrop-blur-xl flex items-center justify-center mx-auto text-muted-foreground shadow-xs">
          <CalendarDays className="size-8" />
        </div>
        <h2 className="text-xl font-bold">Timetable Not Available</h2>
        <p className="text-sm text-muted-foreground max-w-md mx-auto">
          Timetable data is currently being updated for Semester {sem}. You can check back soon or review study materials.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-6xl mx-auto px-4 md:px-8 py-6 space-y-6">
      {/* Header Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 md:p-6 rounded-3xl bg-white/60 dark:bg-zinc-900/40 backdrop-blur-2xl backdrop-saturate-180 border border-white/60 dark:border-white/[0.08] shadow-[0_12px_36px_rgba(0,0,0,0.04),inset_0_1px_1px_rgba(255,255,255,0.85)] dark:shadow-[0_12px_36px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.12)]">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-primary/15 text-primary border border-primary/20 uppercase tracking-wide backdrop-blur-md">
              Semester {sem} • {course.toUpperCase()}
            </span>
            <span className="text-xs font-medium text-muted-foreground flex items-center gap-1">
              <Clock className="size-3" /> Live Schedule
            </span>
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-foreground">
            Class Time Table
          </h1>
          <p className="text-xs text-muted-foreground">
            View period-by-period schedules, classrooms, labs, and faculty assignments.
          </p>
        </div>

        {/* Division Selector & View Switcher */}
        <div className="flex items-center gap-2.5 flex-wrap">
          <div className="w-44">
            <Select
              value={selectedDivKey}
              onValueChange={(val) => {
                setSelectedDivKey(val);
                setStoreDivision(val);
              }}
            >
              <SelectTrigger className="rounded-xl h-10 bg-white/50 dark:bg-zinc-900/40 backdrop-blur-xl border-white/60 dark:border-white/[0.1] font-semibold text-xs">
                <SelectValue placeholder="Select Division" />
              </SelectTrigger>
              <SelectContent>
                {divisions.map((div) => (
                  <SelectItem key={div.value} value={div.value} className="text-xs">
                    {div.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center p-1 rounded-xl bg-white/50 dark:bg-white/[0.06] backdrop-blur-xl border border-white/50 dark:border-white/[0.08]">
            <button
              onClick={() => setViewMode("day")}
              className={cn(
                "px-3 py-1.5 rounded-lg text-xs font-semibold transition-all",
                viewMode === "day"
                  ? "bg-white/80 dark:bg-white/15 text-primary font-bold shadow-xs"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              Day View
            </button>
            <button
              onClick={() => setViewMode("week")}
              className={cn(
                "px-3 py-1.5 rounded-lg text-xs font-semibold transition-all",
                viewMode === "week"
                  ? "bg-white/80 dark:bg-white/15 text-primary font-bold shadow-xs"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              Week Grid
            </button>
          </div>
        </div>
      </div>

      {/* Weekdays Tabs for Day View */}
      {viewMode === "day" && (
        <div className="space-y-4">
          <div className="flex items-center overflow-x-auto gap-2 pb-1 scrollbar-none">
            {weekdays.map((day, idx) => {
              const isToday = idx === currentDayIndex;
              const isSelected = idx === selectedDayIndex;

              return (
                <button
                  key={day}
                  onClick={() => setSelectedDayIndex(idx)}
                  className={cn(
                    "flex flex-col items-center justify-center min-w-[100px] flex-1 py-2.5 px-3 rounded-2xl border backdrop-blur-xl transition-all text-center",
                    isSelected
                      ? "bg-primary text-primary-foreground border-primary/40 shadow-md font-bold scale-[1.02]"
                      : "bg-white/50 dark:bg-zinc-900/40 border-white/60 dark:border-white/[0.08] hover:border-primary/40 text-muted-foreground hover:text-foreground",
                  )}
                >
                  <span className="text-xs uppercase tracking-wider">
                    {day.slice(0, 3)}
                  </span>
                  <span className="text-sm font-bold mt-0.5">{day}</span>
                  {isToday && (
                    <span
                      className={cn(
                        "text-[9px] font-extrabold uppercase px-1.5 py-0.2 mt-1 rounded-full",
                        isSelected
                          ? "bg-white/20 text-white"
                          : "bg-primary/15 text-primary",
                      )}
                    >
                      Today
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Daily Schedule List */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center justify-between px-1">
              <h2 className="text-sm font-bold text-foreground flex items-center gap-2">
                <CalendarDays className="size-4 text-primary" />
                {weekdays[selectedDayIndex]} Schedule • {currentDivisionData?.title || "Division"}
              </h2>
              <span className="text-xs text-muted-foreground font-medium">
                {dailyLectures.filter((l: any) => !l.isEmpty).length} Active Classes
              </span>
            </div>

            {dailyLectures.length === 0 ? (
              <div className="p-8 text-center rounded-2xl border border-dashed border-white/60 dark:border-white/[0.1] bg-white/40 dark:bg-zinc-900/30 backdrop-blur-md text-muted-foreground">
                No classes scheduled for this day.
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
                {dailyLectures.map((item: any, idx: number) => (
                  <div
                    key={`${item.slot}_${idx}`}
                    className={cn(
                      "p-4 rounded-2xl border backdrop-blur-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden",
                      item.isEmpty
                        ? "bg-white/30 dark:bg-white/[0.02] border-dashed border-white/40 dark:border-white/[0.06] opacity-60"
                        : item.isLab
                        ? "bg-purple-500/10 dark:bg-purple-950/20 border-purple-500/30 hover:border-purple-500 shadow-xs"
                        : "bg-white/65 dark:bg-zinc-900/40 border-white/60 dark:border-white/[0.08] hover:border-primary/50 shadow-[0_8px_30px_rgb(0,0,0,0.04),inset_0_1px_1px_rgba(255,255,255,0.7)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.1)] hover:shadow-md",
                    )}
                  >
                    {/* Top slot pill */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-1.5">
                        <span className="size-6 rounded-lg bg-primary/10 text-primary border border-primary/20 backdrop-blur-md font-bold text-xs flex items-center justify-center">
                          {item.slot}
                        </span>
                        <span className="text-xs font-semibold text-muted-foreground flex items-center gap-1">
                          <Clock className="size-3" />
                          {item.time}
                        </span>
                      </div>
                      {item.isLab ? (
                        <Badge className="bg-purple-500/15 text-purple-600 dark:text-purple-400 hover:bg-purple-500/20 text-[10px] font-bold border-none backdrop-blur-md">
                          LAB PRACTICAL
                        </Badge>
                      ) : !item.isEmpty ? (
                        <Badge variant="secondary" className="text-[10px] font-bold">
                          THEORY
                        </Badge>
                      ) : (
                        <span className="text-[10px] text-muted-foreground font-semibold">
                          Free Slot
                        </span>
                      )}
                    </div>

                    {/* Subject info */}
                    <div className="space-y-1.5 my-1">
                      <h3
                        className={cn(
                          "font-bold text-base",
                          item.isEmpty
                            ? "text-muted-foreground/60"
                            : "text-foreground",
                        )}
                      >
                        {item.subject || "No Class Scheduled"}
                      </h3>

                      {item.professor && (
                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                          <User className="size-3 text-primary shrink-0" />
                          <span className="truncate">{item.professor}</span>
                        </div>
                      )}
                    </div>

                    {/* Location Badge (Room or Lab) */}
                    <div className="mt-3 pt-2.5 border-t border-white/40 dark:border-white/[0.06] flex items-center justify-between text-xs">
                      {item.classroom && (
                        <span className="flex items-center gap-1 font-semibold text-foreground">
                          <MapPin className="size-3 text-red-500" />
                          Room: {item.classroom}
                        </span>
                      )}
                      {item.lab && (
                        <span className="flex items-center gap-1 font-semibold text-purple-600 dark:text-purple-400">
                          <MapPin className="size-3 text-purple-500" />
                          Lab: {item.lab}
                        </span>
                      )}
                      {item.isEmpty && (
                        <span className="text-[11px] text-muted-foreground/70 italic">
                          Self-study or break
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Week Grid View */}
      {viewMode === "week" && (
        <div className="space-y-3">
          <div className="flex items-center justify-between px-1">
            <h2 className="text-sm font-bold text-foreground">
              Full Week Matrix • {currentDivisionData?.title}
            </h2>
            <span className="text-xs text-muted-foreground">
              Scroll horizontally if on mobile
            </span>
          </div>

          <div className="w-full overflow-x-auto rounded-3xl border border-white/60 dark:border-white/[0.08] shadow-[0_12px_36px_rgba(0,0,0,0.04),inset_0_1px_1px_rgba(255,255,255,0.85)] dark:shadow-[0_12px_36px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.12)] bg-white/65 dark:bg-zinc-900/40 backdrop-blur-2xl">
            <table className="w-full text-xs text-left border-collapse min-w-[750px]">
              <thead>
                <tr className="bg-white/40 dark:bg-white/[0.04] border-b border-white/40 dark:border-white/[0.08]">
                  <th className="p-3 font-bold text-center w-14">#</th>
                  <th className="p-3 font-bold text-left w-32">Time</th>
                  {weekdays.map((day, dIdx) => (
                    <th
                      key={day}
                      className={cn(
                        "p-3 font-bold text-center",
                        dIdx === currentDayIndex && "bg-primary/10 text-primary",
                      )}
                    >
                      {day}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/30 dark:divide-white/[0.04]">
                {currentDivisionData?.data?.slice(1).map((row: any[], rIdx: number) => (
                  <tr
                    key={rIdx}
                    className="hover:bg-white/40 dark:hover:bg-white/[0.04] transition-colors"
                  >
                    <td className="p-3 font-bold text-center text-muted-foreground bg-white/20 dark:bg-white/[0.02]">
                      {row[0]?.label || rIdx + 1}
                    </td>
                    <td className="p-3 font-semibold text-muted-foreground whitespace-nowrap">
                      {row[1]?.label}
                    </td>
                    {weekdays.map((_, dayIdx) => {
                      const cell = row[dayIdx + 2];
                      let label = cell?.label || "-";
                      let prof = cell?.professor || "";
                      let room = cell?.classroom || "";
                      let isLab = label.toLowerCase().includes("[lab]");

                      if (course === "mscit" && cell?.msc_it) {
                        label = cell.msc_it.label || label;
                        prof = cell.msc_it.professor || prof;
                        room = cell.msc_it.classroom || room;
                      }

                      return (
                        <td
                          key={dayIdx}
                          className={cn(
                            "p-2.5 text-center align-top border-l border-white/30 dark:border-white/[0.04]",
                            dayIdx === currentDayIndex && "bg-primary/5",
                            isLab && "bg-purple-500/5",
                          )}
                        >
                          {label !== "-" && label !== "" ? (
                            <div className="space-y-1">
                              <span
                                className={cn(
                                  "font-bold block text-xs",
                                  isLab
                                    ? "text-purple-600 dark:text-purple-400"
                                    : "text-foreground",
                                )}
                              >
                                {label}
                              </span>
                              {prof && (
                                <span className="block text-[10px] text-muted-foreground truncate max-w-[120px] mx-auto">
                                  {Array.isArray(prof) ? prof[0] : prof}
                                </span>
                              )}
                              {room && (
                                <span className="inline-block text-[9px] font-semibold px-1 py-0.2 rounded bg-white/50 dark:bg-white/[0.06] text-muted-foreground border border-white/40 dark:border-white/[0.08]">
                                  {room}
                                </span>
                              )}
                            </div>
                          ) : (
                            <span className="text-muted-foreground/30">-</span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
