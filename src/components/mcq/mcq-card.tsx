/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Checkbox } from "../ui/checkbox";
import { cn } from "@/lib/utils";
import { CheckCircle2, XCircle, HelpCircle } from "lucide-react";

const McqCard = ({
  que,
  index,
  onOptionSelect,
  selectedOptions,
  isSeeSolution,
  isSubmitted,
}: {
  que: any;
  index: number;
  onOptionSelect: any;
  selectedOptions: any;
  isSeeSolution: boolean;
  isSubmitted: boolean;
}) => {
  const [activeTrigger, setActiveTrigger] = useState("");

  const isSelected = (optIdx: number) => {
    if (Array.isArray(que.correct_option)) {
      return selectedOptions[que.id]?.includes(optIdx);
    }
    return selectedOptions[que.id] === optIdx;
  };

  const isCorrect = (optIdx: number) => {
    if (Array.isArray(que.correct_option)) {
      return que.correct_option.includes(optIdx);
    }
    return que.correct_option === optIdx;
  };

  return (
    <div className="rounded-3xl border border-white/60 dark:border-white/[0.08] bg-white/65 dark:bg-zinc-900/40 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.04),inset_0_1px_1px_rgba(255,255,255,0.7)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.1)] overflow-hidden transition-all">
      {/* Header bar */}
      <div className="w-full bg-white/50 dark:bg-zinc-900/60 border-b border-white/50 dark:border-white/[0.08] px-5 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="size-6 rounded-lg bg-primary/10 text-primary border border-primary/20 text-xs font-bold flex items-center justify-center">
            {index + 1}
          </span>
          <span className="text-xs font-bold text-foreground uppercase tracking-wide">
            Question {index + 1}
          </span>
        </div>

        {isSubmitted && (
          <div className="text-xs font-semibold">
            {selectedOptions[que.id] === undefined ? (
              <span className="text-muted-foreground bg-muted/50 px-2.5 py-0.5 rounded-full border border-border/50">
                Unattempted
              </span>
            ) : isCorrect(selectedOptions[que.id]) ? (
              <span className="text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20 flex items-center gap-1">
                <CheckCircle2 className="size-3.5" /> Correct Answer
              </span>
            ) : (
              <span className="text-red-600 dark:text-red-400 bg-red-500/10 px-2.5 py-0.5 rounded-full border border-red-500/20 flex items-center gap-1">
                <XCircle className="size-3.5" /> Incorrect
              </span>
            )}
          </div>
        )}
      </div>

      {/* Question & Options Content */}
      <div className="p-5 md:p-6 space-y-4">
        <h3 className="font-bold text-base md:text-lg text-foreground leading-snug">
          {que?.title}
        </h3>

        <div className="grid grid-cols-1 gap-2.5">
          {que?.options.map((option: string, i: number) => {
            const selected = isSelected(i);
            const correct = isCorrect(i);

            let statusClasses = "border-white/50 dark:border-white/[0.08] bg-white/40 dark:bg-white/[0.03] hover:bg-white/70 dark:hover:bg-white/[0.08] text-foreground";

            if (isSubmitted) {
              if (selected && correct) {
                statusClasses = "border-emerald-500/60 bg-emerald-500/15 text-emerald-800 dark:text-emerald-300 font-bold";
              } else if (selected && !correct) {
                statusClasses = "border-red-500/60 bg-red-500/15 text-red-800 dark:text-red-300 font-bold";
              } else if (!selected && correct) {
                statusClasses = "border-emerald-500/40 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 font-semibold";
              }
            } else if (selected) {
              statusClasses = "border-primary/50 bg-primary/10 text-primary font-bold shadow-2xs";
            }

            return (
              <div
                key={option}
                onClick={() => {
                  if (isSubmitted) return;
                  onOptionSelect(
                    que,
                    i,
                    Array.isArray(que.correct_option) ? "multiple" : "single",
                  );
                }}
                className={cn(
                  "flex items-center gap-3.5 px-4 py-3 rounded-2xl border transition-all cursor-pointer backdrop-blur-md select-none text-sm",
                  statusClasses,
                )}
              >
                {Array.isArray(que.correct_option) && (
                  <Checkbox
                    id={`que_${que.id}_opt_${i}`}
                    checked={selected}
                    className="rounded-md"
                  />
                )}
                <div
                  className={cn(
                    "size-7 rounded-xl border flex items-center justify-center text-xs font-bold shrink-0 transition-colors",
                    selected
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-white/60 dark:bg-zinc-800/60 border-white/60 dark:border-white/[0.1] text-muted-foreground",
                  )}
                >
                  {String.fromCharCode(65 + i)}
                </div>
                <span className="flex-1 leading-relaxed">{option}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Solution Section */}
      {isSeeSolution && que?.solution && (
        <div className="w-full bg-white/40 dark:bg-zinc-900/50 border-t border-white/50 dark:border-white/[0.08] px-5 py-2">
          <Accordion
            onValueChange={(e) => setActiveTrigger(e)}
            type="single"
            collapsible
          >
            <AccordionItem value={que.id} className="border-0">
              <AccordionTrigger className="py-2 hover:no-underline [&_svg]:hidden">
                <span className="text-xs font-bold text-primary flex items-center gap-1.5 uppercase tracking-wide">
                  <HelpCircle className="size-3.5" />
                  {activeTrigger !== que.id ? "View Explanation & Solution" : "Hide Explanation"}
                </span>
              </AccordionTrigger>
              <AccordionContent className="pt-2 pb-4 text-xs md:text-sm text-muted-foreground leading-relaxed">
                {que.solution}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      )}
    </div>
  );
};

export default McqCard;
