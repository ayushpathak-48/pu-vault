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
  Code2,
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

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8 space-y-6 md:space-y-8">
      {/* Minimal Greeting Header Bar */}
      <div>
        <div className="relative overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-r from-primary/[0.08] via-white/65 dark:via-zinc-900/40 to-transparent backdrop-blur-2xl backdrop-saturate-180 border border-primary/25 dark:border-primary/20 px-4 py-3.5 sm:px-6 sm:py-4 shadow-[0_8px_30px_rgb(0,0,0,0.03),inset_0_1px_1px_rgba(255,255,255,0.85)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.12)]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 relative z-10">
            <div className="flex items-center gap-2.5 flex-wrap min-w-0">
              <h1 className="text-base sm:text-lg font-extrabold tracking-tight text-foreground truncate">
                {user?.name ? `Hey, ${user.name.split(" ")[0]}!` : "Welcome to PU Vault"}
              </h1>
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-primary/15 text-primary border border-primary/25 uppercase tracking-wide backdrop-blur-md">
                  {course} • Sem {sem}
                </span>
                {specialization && (
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-white/50 dark:bg-white/[0.06] text-muted-foreground border border-white/60 dark:border-white/[0.08] backdrop-blur-md uppercase">
                    {specialization}
                  </span>
                )}
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <Button asChild size="sm" className="rounded-xl h-9 px-3.5 text-xs font-semibold shadow-xs gap-1.5">
                <Link href="/code">
                  <Code2 className="size-3.5" />
                  Codes
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="rounded-xl h-9 px-3.5 text-xs font-medium border-white/60 dark:border-white/[0.1] bg-white/50 dark:bg-white/[0.06] backdrop-blur-md gap-1.5"
              >
                <Link href="/assignments">
                  <BookOpen className="size-3.5" />
                  Assignments
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Apps Showcase Banner */}
      <div>
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
        <div>
          <div className="p-5 md:p-6 rounded-3xl bg-amber-500/10 backdrop-blur-xl border border-amber-500/25 space-y-3 shadow-xs">
            <h3 className="text-sm font-bold text-amber-800 dark:text-amber-300 flex items-center gap-2">
              <span>🔔</span> Important Updates
            </h3>
            <div className="space-y-2">
              {alertContent.map((alert: any) => (
                <div
                  key={alert.id}
                  className="flex items-center justify-between p-3.5 rounded-xl bg-white/60 dark:bg-zinc-900/60 backdrop-blur-md border border-white/50 dark:border-white/[0.08] text-sm shadow-2xs"
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
      <div>
        <div className="flex items-center justify-between mb-4 px-1">
          <div className="flex items-center gap-2.5">
            <div className="p-2.5 rounded-xl bg-primary/10 text-primary border border-primary/20 backdrop-blur-md">
              <BookOpen className="size-5" />
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
