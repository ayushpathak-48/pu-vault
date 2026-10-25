import { nptelAllWeeksAnswers } from "@/lib/constants/nptel-answers.constant";
import { redirect } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Award, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

/* eslint-disable @typescript-eslint/no-explicit-any */
const NptelWeekPage = async ({ params }: any) => {
  const { week } = await params;
  const answers = nptelAllWeeksAnswers.find(({ key }) => key === week);

  if (!answers) return redirect("/nptel-assignment-answers");

  return (
    <div className="w-full max-w-4xl mx-auto px-3 sm:px-6 lg:px-8 py-3.5 sm:py-6 md:py-8 space-y-3.5 sm:space-y-6">
      {/* Top Header */}
      <div className="flex items-center justify-between gap-3 p-3.5 sm:p-5 rounded-2xl sm:rounded-3xl bg-white/65 dark:bg-zinc-900/40 backdrop-blur-2xl border border-white/60 dark:border-white/[0.08] shadow-[0_8px_30px_rgb(0,0,0,0.04),inset_0_1px_1px_rgba(255,255,255,0.7)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.1)]">
        <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
          <Button
            asChild
            variant="ghost"
            size="icon"
            className="size-8 sm:size-9 rounded-xl shrink-0"
          >
            <Link href="/nptel-assignment-answers" title="Back to All Weeks">
              <ArrowLeft className="size-4" />
            </Link>
          </Button>
          <div className="min-w-0">
            <span className="text-[10px] sm:text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wide">
              NPTEL Course Solution Key
            </span>
            <h1 className="text-sm sm:text-base md:text-lg font-bold text-foreground truncate">
              {answers.title}
            </h1>
          </div>
        </div>

        <div className="text-[11px] sm:text-xs text-muted-foreground font-semibold shrink-0">
          {answers.answers.length} Questions
        </div>
      </div>

      {/* Answers List */}
      <div className="space-y-2.5 sm:space-y-3">
        {answers.answers.map((ans) => (
          <div
            key={`nptel_${ans.id}`}
            className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-card border border-border/70 shadow-xs hover:border-emerald-500/40 transition-colors flex items-start gap-3 sm:gap-3.5"
          >
            <div className="size-7 sm:size-8 rounded-lg sm:rounded-xl bg-muted/60 text-muted-foreground font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 border">
              Q{ans.id}
            </div>

            <div className="flex-1 space-y-1 sm:space-y-1.5 min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-[11px] sm:text-xs font-bold px-2 py-0.5 rounded-lg bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20">
                  Option:{" "}
                  {typeof ans.option === "number"
                    ? ans.option
                    : ans.option.join(", ")}
                </span>
              </div>
              <p className="text-xs sm:text-sm font-medium text-foreground leading-relaxed break-words">
                {ans.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NptelWeekPage;
