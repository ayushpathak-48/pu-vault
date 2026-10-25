"use client";

import { cn } from "@/lib/utils";
import { useDataStore } from "@/stores/data.store";
import {
  House,
  Code2,
  Calculator,
  CalendarDays,
  ListTodo,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const BottomTabs = () => {
  const pathname = usePathname();
  const bottomTabsEnabled = useDataStore((state) => state.bottomTabsEnabled);

  if (!bottomTabsEnabled) return null;

  const mobileTabs = [
    {
      title: "Materials",
      href: "/",
      icon: House,
    },
    {
      title: "Codes",
      href: "/code",
      icon: Code2,
    },
    {
      title: "Attendance",
      href: "/attendance-calculator",
      icon: Calculator,
    },
    {
      title: "Timetable",
      href: "/time-table",
      icon: CalendarDays,
    },
    {
      title: "MCQs",
      href: "/mcqs",
      icon: ListTodo,
    },
  ];

  return (
    <nav className="z-[40] fixed md:hidden bottom-0 inset-x-0 h-16 bg-background/90 backdrop-blur-lg border-t border-border/60 shadow-lg px-2">
      <div className="flex items-center justify-around h-full max-w-lg mx-auto">
        {mobileTabs.map((tab) => {
          const isActive =
            (tab.href !== "/" && pathname.startsWith(tab.href)) ||
            pathname === tab.href;
          const Icon = tab.icon;

          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={cn(
                "flex flex-col items-center justify-center flex-1 py-1 px-2 rounded-xl transition-all duration-200 group relative",
                isActive
                  ? "text-primary font-semibold"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              <div
                className={cn(
                  "p-1 rounded-xl transition-all",
                  isActive && "bg-primary/10 scale-105",
                )}
              >
                <Icon
                  className={cn(
                    "size-5 transition-transform group-active:scale-95",
                    isActive ? "text-primary" : "text-muted-foreground",
                  )}
                />
              </div>
              <span
                className={cn(
                  "text-[10px] tracking-tight truncate",
                  isActive ? "text-primary font-bold" : "text-muted-foreground",
                )}
              >
                {tab.title}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
