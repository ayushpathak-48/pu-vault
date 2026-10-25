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
  const specialization = useDataStore((state) => state.specialization);

  const quickActions = [
    {
      title: "Attendance",
      desc: "Calculate target & bunks",
      href: "/attendance-calculator",
      icon: Calculator,
      iconColor: "text-blue-600 dark:text-blue-400 bg-blue-500/10 border-blue-500/20",
    },
    {
      title: "Source Codes",
      desc: "Lab practicals & solutions",
      href: "/code",
      icon: Code2,
      iconColor: "text-purple-600 dark:text-purple-400 bg-purple-500/10 border-purple-500/20",
    },
    {
      title: "Assignments",
      desc: "Course practical & theory tasks",
      href: "/assignments",
      icon: BookOpen,
      iconColor: "text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    },
    {
      title: "MCQs Quiz",
      desc: "Unit practice & mock tests",
      href: "/mcqs",
      icon: ListTodo,
      iconColor: "text-amber-600 dark:text-amber-400 bg-amber-500/10 border-amber-500/20",
    },
  ];

  return (
    <div className="w-full h-full pb-10">
      {/* Hero Welcome Glass Banner */}
      <div className="px-4 md:px-8 pt-4 pb-2">
        <div className="relative overflow-hidden rounded-3xl bg-white/60 dark:bg-zinc-900/40 backdrop-blur-2xl backdrop-saturate-180 border border-white/60 dark:border-white/[0.08] p-5 md:p-7 shadow-[0_12px_36px_rgba(0,0,0,0.04),inset_0_1px_1px_rgba(255,255,255,0.85)] dark:shadow-[0_12px_36px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.12)]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 relative z-10">
            <div className="space-y-2">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-0.5 rounded-full bg-primary/15 text-primary border border-primary/20 uppercase tracking-wide backdrop-blur-md">
                  {course} • Semester {sem}
                </span>
                {specialization && (
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-white/50 dark:bg-white/[0.06] text-muted-foreground border border-white/60 dark:border-white/[0.08] backdrop-blur-md uppercase">
                    Track: {specialization}
                  </span>
                )}
              </div>
              <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-foreground">
                {user?.name ? `Welcome back, ${user.name.split(" ")[0]}!` : "Welcome to PU Vault"}
              </h1>
              <p className="text-sm text-muted-foreground max-w-xl leading-relaxed">
                Your one-stop academic companion. Access lecture notes, lab manuals, assignments, and exam preparation resources.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Button asChild size="default" className="rounded-2xl shadow-xs gap-2 font-semibold">
                <Link href="/code">
                  <Code2 className="size-4" />
                  Source Codes
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="default"
                className="rounded-2xl gap-2 font-medium border-white/60 dark:border-white/[0.1] bg-white/50 dark:bg-white/[0.06] backdrop-blur-md"
              >
                <Link href="/assignments">
                  <BookOpen className="size-4" />
                  Assignments
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Access Glass Tiles */}
      <div className="px-4 md:px-8 py-3">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {quickActions.map((action) => {
            const Icon = action.icon;
            return (
              <Link
                key={action.href}
                href={action.href}
                className="p-5 rounded-3xl bg-white/65 dark:bg-zinc-900/40 backdrop-blur-xl backdrop-saturate-150 border border-white/60 dark:border-white/[0.08] shadow-[0_8px_24px_rgba(0,0,0,0.03),inset_0_1px_1px_rgba(255,255,255,0.7)] dark:shadow-[0_8px_24px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.1)] hover:shadow-lg hover:-translate-y-0.5 hover:border-primary/40 transition-all duration-300 flex flex-col justify-between group min-h-[140px]"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-2.5 rounded-2xl ${action.iconColor} border shadow-2xs backdrop-blur-md`}>
                    <Icon className="size-5" />
                  </div>
                  <ArrowRight className="size-4 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-muted-foreground group-hover:text-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-foreground">
                    {action.title}
                  </h3>
                  <p className="text-[11px] text-muted-foreground leading-tight mt-1 line-clamp-1">
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
        <div className="flex items-center justify-between mb-2.5 px-1">
          <h2 className="text-xs font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5">
            <Sparkles className="size-3.5 text-amber-500" /> Featured Apps &amp; Tools
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
          <div className="p-5 rounded-2xl bg-amber-500/10 backdrop-blur-xl border border-amber-500/25 space-y-3 shadow-xs">
            <h3 className="text-sm font-bold text-amber-800 dark:text-amber-300 flex items-center gap-2">
              <span>🔔</span> Important Updates
            </h3>
            <div className="space-y-2">
              {alertContent.map((alert: any) => (
                <div
                  key={alert.id}
                  className="flex items-center justify-between p-3 rounded-xl bg-white/60 dark:bg-zinc-900/60 backdrop-blur-md border border-white/50 dark:border-white/[0.08] text-sm shadow-2xs"
                >
                  <span className="font-semibold text-foreground">{alert.title}</span>
                  <Button asChild size="sm" variant="outline" className="rounded-xl h-9 text-xs font-semibold">
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
        <div className="flex items-center justify-between mb-3.5 px-1">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-primary/10 text-primary border border-primary/20 backdrop-blur-md">
              <BookOpen className="size-4.5" />
            </div>
            <div>
              <h2 className="text-lg md:text-xl font-extrabold text-foreground tracking-tight">
                Course Materials &amp; Notes
              </h2>
              <p className="text-xs text-muted-foreground">
                Official syllabus, lecture presentations, practical journals &amp; past exam papers
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
