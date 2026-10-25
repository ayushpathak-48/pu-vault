import { nptelAllWeeksAnswers } from "@/lib/constants/nptel-answers.constant";
import { ArrowRight, Award, BookOpen, Layers } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "NPTEL Assignment Answers | PU Vault",
  description: "Week-by-week verified assignment answers and solutions for NPTEL Swayam online courses.",
};

export default function NptelAnswersPage() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8 space-y-6 md:space-y-8">
      {/* Header Banner */}
      <div className="p-6 md:p-7 rounded-3xl bg-white/60 dark:bg-zinc-900/40 backdrop-blur-2xl backdrop-saturate-180 border border-white/60 dark:border-white/[0.08] shadow-[0_12px_36px_rgba(0,0,0,0.04),inset_0_1px_1px_rgba(255,255,255,0.85)] dark:shadow-[0_12px_36px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.12)] flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 uppercase flex items-center gap-1">
              <Award className="size-3" /> Swayam / NPTEL Portal
            </span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">
            NPTEL Weekly Assignment Answers
          </h1>
          <p className="text-xs md:text-sm text-muted-foreground max-w-lg leading-relaxed">
            Verified answer keys and solutions for compulsory NPTEL certifications across all academic weeks.
          </p>
        </div>
      </div>

      {/* Weeks Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5">
        {nptelAllWeeksAnswers.map((week, idx) => (
          <Link key={week.key} href={`/nptel-assignment-answers/${week.key}`}>
            <div className="p-4 rounded-2xl bg-card border border-border/70 hover:border-emerald-500/40 shadow-xs hover:shadow-md transition-all flex items-center justify-between gap-4 group">
              <div className="flex items-center gap-3 min-w-0">
                <div className="size-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold text-sm flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  W{idx + 1}
                </div>
                <div className="min-w-0">
                  <h2 className="text-sm font-bold text-foreground group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors truncate">
                    {week.title}
                  </h2>
                  <span className="text-[11px] text-muted-foreground">
                    {week.answers?.length || 0} Questions Answered
                  </span>
                </div>
              </div>

              <ArrowRight className="size-4 text-muted-foreground group-hover:text-emerald-600 group-hover:translate-x-1 transition-all shrink-0" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
