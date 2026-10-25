"use client";

import { cn } from "@/lib/utils";
import { useDataStore } from "@/stores/data.store";
import {
  House,
  Code2,
  Calculator,
  BookOpen,
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
      title: "Assignments",
      href: "/assignments",
      icon: BookOpen,
    },
    {
      title: "Attendance",
      href: "/attendance-calculator",
      icon: Calculator,
    },
    {
      title: "MCQs",
      href: "/mcqs",
      icon: ListTodo,
    },
  ];

  return (
    <nav className="z-[40] fixed md:hidden bottom-3 inset-x-3 max-w-md mx-auto h-15 rounded-3xl bg-white/70 dark:bg-zinc-950/70 backdrop-blur-2xl backdrop-saturate-180 border border-white/60 dark:border-white/[0.12] shadow-[0_12px_40px_rgba(0,0,0,0.12),inset_0_1px_1px_rgba(255,255,255,0.85)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.12)] px-2">
      <div className="flex items-center justify-around h-full w-full">
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
                "flex flex-col items-center justify-center flex-1 py-1 px-1 rounded-2xl transition-all duration-200 group relative",
                isActive
                  ? "text-primary font-bold"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              <div
                className={cn(
                  "p-1.5 rounded-xl transition-all duration-200",
                  isActive &&
                    "bg-primary/20 text-primary scale-105 border border-primary/30 backdrop-blur-md shadow-xs",
                )}
              >
                <Icon
                  className={cn(
                    "size-4.5 transition-transform group-active:scale-95",
                    isActive ? "text-primary" : "text-muted-foreground",
                  )}
                />
              </div>
              <span
                className={cn(
                  "text-[10px] tracking-tight truncate mt-0.5",
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
