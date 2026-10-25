/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { CheckCircle2, XCircle, HelpCircle, Trophy, Sparkles } from "lucide-react";

const StatisticsContainer = ({ stats }: { stats: any }) => {
  const percentage =
    stats?.total_ques > 0
      ? Math.round((stats.correct_options / stats.total_ques) * 100)
      : 0;

  return (
    <div className="p-6 rounded-3xl bg-card border border-border/70 shadow-md space-y-5 animate-in fade-in-50 duration-300">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-border/40 pb-4">
        <div className="flex items-center gap-3 text-center sm:text-left">
          <div className="size-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
            <Trophy className="size-6" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">Quiz Results Summary</h2>
            <p className="text-xs text-muted-foreground">
              Review your performance and correct answers below
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-muted-foreground">Score:</span>
          <span className="text-2xl font-black text-primary px-3 py-1 rounded-xl bg-primary/10 border border-primary/20">
            {percentage}%
          </span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {/* Correct */}
        <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex flex-col items-center justify-center text-center">
          <CheckCircle2 className="size-5 text-emerald-600 dark:text-emerald-400 mb-1" />
          <span className="text-xs font-semibold text-emerald-800 dark:text-emerald-300">
            Correct
          </span>
          <span className="text-2xl md:text-3xl font-black text-emerald-600 dark:text-emerald-400 mt-1">
            {stats?.correct_options}
          </span>
        </div>

        {/* Incorrect */}
        <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/20 flex flex-col items-center justify-center text-center">
          <XCircle className="size-5 text-rose-600 dark:text-rose-400 mb-1" />
          <span className="text-xs font-semibold text-rose-800 dark:text-rose-300">
            Incorrect
          </span>
          <span className="text-2xl md:text-3xl font-black text-rose-600 dark:text-rose-400 mt-1">
            {stats?.incorrect_options}
          </span>
        </div>

        {/* Unattempted */}
        <div className="p-4 rounded-2xl bg-muted/40 border border-border/60 flex flex-col items-center justify-center text-center">
          <HelpCircle className="size-5 text-muted-foreground mb-1" />
          <span className="text-xs font-semibold text-muted-foreground">
            Unattempted
          </span>
          <span className="text-2xl md:text-3xl font-black text-muted-foreground mt-1">
            {stats?.unAttempted}
          </span>
        </div>
      </div>
    </div>
  );
};

export default StatisticsContainer;
