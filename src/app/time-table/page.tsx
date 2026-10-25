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
  GraduationCap,
  Sparkles,
  Layers,
  ChevronRight,
  BookOpen,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
  // Row 0 has headers: [Lecture No, Timing, Monday(2), Tuesday(3), Wednesday(4), Thursday(5), Friday(6), Saturday(7)]
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
        <div className="size-16 rounded-3xl bg-muted/50 border flex items-center justify-center mx-auto text-muted-foreground">
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
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20 shadow-xs">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-primary/20 text-primary uppercase">
              Semester {sem} • {course.toUpperCase()}
            </span>
            <span className="text-xs font-medium text-muted-foreground flex items-center gap-1">
              <Clock className="size-3" /> Live Schedule
            </span>
          </div>
          <h1 className="text-2xl font-bold text-foreground">
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
              <SelectTrigger className="rounded-xl h-10 bg-background border-border/70 font-semibold text-xs">
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

          <div className="flex items-center p-1 rounded-xl bg-muted/60 border border-border/50">
            <button
              onClick={() => setViewMode("day")}
              className={cn(
                "px-3 py-1.5 rounded-lg text-xs font-semibold transition-all",
                viewMode === "day"
                  ? "bg-background text-primary shadow-xs"
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
                  ? "bg-background text-primary shadow-xs"
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
                    "flex flex-col items-center justify-center min-w-[100px] flex-1 py-2.5 px-3 rounded-2xl border transition-all text-center",
                    isSelected
                      ? "bg-primary text-primary-foreground border-primary shadow-md font-bold scale-[1.02]"
                      : "bg-card border-border/60 hover:border-primary/40 text-muted-foreground hover:text-foreground",
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
                {dailyLectures.filter((l) => !l.isEmpty).length} Active Classes
              </span>
            </div>

            {dailyLectures.length === 0 ? (
              <div className="p-8 text-center rounded-2xl border border-dashed text-muted-foreground">
                No classes scheduled for this day.
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {dailyLectures.map((item, idx) => (
                  <div
                    key={`${item.slot}_${idx}`}
                    className={cn(
                      "p-4 rounded-2xl border transition-all flex flex-col justify-between relative overflow-hidden",
                      item.isEmpty
                        ? "bg-muted/15 border-dashed border-border/50 opacity-60"
                        : item.isLab
                        ? "bg-card border-purple-500/30 hover:border-purple-500 shadow-xs"
                        : "bg-card border-border/70 hover:border-primary/50 shadow-xs hover:shadow-md",
                    )}
                  >
                    {/* Top slot pill */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-1.5">
                        <span className="size-6 rounded-lg bg-primary/10 text-primary font-bold text-xs flex items-center justify-center">
                          {item.slot}
                        </span>
                        <span className="text-xs font-semibold text-muted-foreground flex items-center gap-1">
                          <Clock className="size-3" />
                          {item.time}
                        </span>
                      </div>
                      {item.isLab ? (
                        <Badge className="bg-purple-500/15 text-purple-600 dark:text-purple-400 hover:bg-purple-500/20 text-[10px] font-bold border-none">
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
                    <div className="mt-3 pt-2.5 border-t border-border/40 flex items-center justify-between text-xs">
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

          <div className="w-full overflow-x-auto rounded-2xl border border-border/70 shadow-sm bg-card">
            <table className="w-full text-xs text-left border-collapse min-w-[750px]">
              <thead>
                <tr className="bg-muted/50 border-b border-border/60">
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
              <tbody className="divide-y divide-border/40">
                {currentDivisionData?.data?.slice(1).map((row: any[], rIdx: number) => (
                  <tr
                    key={rIdx}
                    className="hover:bg-muted/30 transition-colors"
                  >
                    <td className="p-3 font-bold text-center text-muted-foreground bg-muted/20">
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
                            "p-2.5 text-center align-top border-l border-border/40",
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
                                <span className="inline-block text-[9px] font-semibold px-1 py-0.2 rounded bg-muted text-muted-foreground">
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
