/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { CustomErrorPage } from "@/components/custom-error-page";
import { HomePageAccordionList } from "@/components/tabs/home-accordion-list";
import { FeaturedAppsBanner } from "@/components/featured-apps-banner";
import { useDataGetters } from "@/hooks/use-data-getters";
import { useDataStore } from "@/stores/data.store";
import { alertContent } from "@/lib/constants";
import Link from "next/link";
import {
  Calculator,
  CalendarDays,
  Code2,
  ListTodo,
  Sparkles,
  BookOpen,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const { getMaterials, getSpecializationMaterials } = useDataGetters();
  const materials = getMaterials();
  const specializationMaterials = getSpecializationMaterials();

  const user = useDataStore((state) => state.user);
  const course = useDataStore((state) => state.course);
  const sem = useDataStore((state) => state.sem);
  const division = useDataStore((state) => state.division);

  const formattedDivision = division ? division.replace("div_", "").toUpperCase() : "";

  const quickActions = [
    {
      title: "Attendance",
      desc: "Calculate target & bunks",
      href: "/attendance-calculator",
      icon: Calculator,
      color: "from-blue-500/10 to-indigo-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
    },
    {
      title: "Source Codes",
      desc: "Lab practicals & solutions",
      href: "/code",
      icon: Code2,
      color: "from-purple-500/10 to-pink-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
    },
    {
      title: "Time Table",
      desc: "Daily lecture schedule",
      href: "/time-table",
      icon: CalendarDays,
      color: "from-emerald-500/10 to-teal-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    },
    {
      title: "MCQs Quiz",
      desc: "Unit practice & mock tests",
      href: "/mcqs",
      icon: ListTodo,
      color: "from-amber-500/10 to-orange-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
    },
  ];

  return (
    <div className="w-full h-full pb-10">
      {/* Hero Welcome Banner */}
      <div className="px-4 md:px-8 pt-4 pb-2">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/15 p-5 md:p-6 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-0.5 rounded-full bg-primary/20 text-primary uppercase tracking-wide">
                  {course} • Semester {sem}
                </span>
                {formattedDivision && (
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-muted text-muted-foreground border">
                    Division {formattedDivision}
                  </span>
                )}
              </div>
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                {user?.name ? `Welcome back, ${user.name.split(" ")[0]}!` : "Welcome to PU Vault"}
              </h1>
              <p className="text-sm text-muted-foreground max-w-xl leading-relaxed">
                Your one-stop academic companion. Access lecture notes, lab manuals, assignments, and exam preparation resources.
              </p>
            </div>

            <div className="flex items-center gap-2.5">
              <Button asChild size="sm" className="rounded-xl shadow-sm gap-1.5">
                <Link href="/time-table">
                  <CalendarDays className="size-4" />
                  View Schedule
                </Link>
              </Button>
              <Button asChild variant="outline" size="sm" className="rounded-xl gap-1.5">
                <Link href="/attendance-calculator">
                  <Calculator className="size-4" />
                  Attendance
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Access Utility Cards */}
      <div className="px-4 md:px-8 py-3">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {quickActions.map((action) => {
            const Icon = action.icon;
            return (
              <Link
                key={action.href}
                href={action.href}
                className={`p-3.5 rounded-2xl bg-gradient-to-br ${action.color} border hover:shadow-md hover:scale-[1.02] transition-all flex flex-col justify-between group`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="p-2 rounded-xl bg-background/80 shadow-xs">
                    <Icon className="size-5" />
                  </div>
                  <ArrowRight className="size-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-foreground">
                    {action.title}
                  </h3>
                  <p className="text-[11px] text-muted-foreground leading-tight mt-0.5 line-clamp-1">
                    {action.desc}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Featured Apps Showcase Banner */}
      <div className="px-4 md:px-8 py-2">
        <div className="flex items-center justify-between mb-2 px-1">
          <h2 className="text-xs font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5">
            <Sparkles className="size-3.5 text-amber-500" /> Featured Apps & Tools
          </h2>
          <Link
            href="/featured-apps"
            className="text-xs font-semibold text-primary hover:underline flex items-center gap-1"
          >
            Explore All <ArrowRight className="size-3" />
          </Link>
        </div>
        <FeaturedAppsBanner />
      </div>

      {/* Important Alerts & Links if available */}
      {alertContent && alertContent.length > 0 && (
        <div className="px-4 md:px-8 py-3">
          <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 space-y-2">
            <h3 className="text-sm font-bold text-amber-800 dark:text-amber-300 flex items-center gap-2">
              <span>🔔</span> Important Updates
            </h3>
            <div className="space-y-1.5">
              {alertContent.map((alert: any) => (
                <div
                  key={alert.id}
                  className="flex items-center justify-between p-2.5 rounded-xl bg-background/70 border border-border/50 text-sm"
                >
                  <span className="font-medium text-foreground">{alert.title}</span>
                  <Button asChild size="sm" variant="outline" className="rounded-lg h-7 text-xs">
                    <Link href={alert.href} target="_blank">
                      View <ExternalLink className="size-3 ml-1" />
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Subject Materials Section */}
      <div className="px-4 md:px-8 pt-4">
        <div className="flex items-center justify-between mb-3 px-1">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-primary/10 text-primary">
              <BookOpen className="size-4" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-foreground">
                Course Materials & Notes
              </h2>
              <p className="text-xs text-muted-foreground">
                Official syllabus, lecture presentations, practical journals & past exam papers
              </p>
            </div>
          </div>
        </div>

        {materials.length > 0 || specializationMaterials.length > 0 ? (
          <HomePageAccordionList
            tabData={materials}
            specializationTabData={specializationMaterials}
          />
        ) : (
          <CustomErrorPage errorText="Materials not available for this semester yet" />
        )}
      </div>
    </div>
  );
}
