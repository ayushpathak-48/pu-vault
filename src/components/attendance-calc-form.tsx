"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Calculator,
  CheckCircle2,
  AlertTriangle,
  RefreshCcw,
  Percent,
  CalendarCheck,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";

const FormSchema = z.object({
  total_slots: z
    .string()
    .min(1, { message: "Total lectures is required" })
    .refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
      message: "Must be a positive number",
    }),
  present_slots: z
    .string()
    .min(1, { message: "Attended lectures is required" })
    .refine((val) => !isNaN(Number(val)) && Number(val) >= 0, {
      message: "Cannot be negative",
    }),
});

export function AttendanceCalcForm() {
  const [targetPercent, setTargetPercent] = useState<number>(75);
  const [result, setResult] = useState<{
    currentPercentage: number;
    requiredSlots: number;
    canBunkSlots: number;
    totalSlots: number;
    presentSlots: number;
    isSafe: boolean;
  } | null>(null);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      total_slots: "",
      present_slots: "",
    },
  });

  function calculate(total: number, present: number, target: number) {
    if (total <= 0) return;
    const currentPercentage = (present / total) * 100;
    const targetDecimal = target / 100;

    let requiredSlots = 0;
    let canBunkSlots = 0;

    if (currentPercentage >= target) {
      canBunkSlots = Math.floor((present - targetDecimal * total) / targetDecimal);
      if (canBunkSlots < 0) canBunkSlots = 0;
    } else {
      requiredSlots = Math.ceil(
        (targetDecimal * total - present) / (1 - targetDecimal),
      );
      if (requiredSlots < 0) requiredSlots = 0;
    }

    setResult({
      currentPercentage,
      requiredSlots,
      canBunkSlots,
      totalSlots: total,
      presentSlots: present,
      isSafe: currentPercentage >= target,
    });
  }

  function onSubmit(data: z.infer<typeof FormSchema>) {
    const total = parseInt(data.total_slots);
    const present = parseInt(data.present_slots);

    if (present > total) {
      form.setError("present_slots", {
        message: "Attended lectures cannot exceed total lectures",
      });
      return;
    }

    calculate(total, present, targetPercent);
  }

  const handleTargetChange = (newTarget: number) => {
    setTargetPercent(newTarget);
    const total = parseInt(form.getValues("total_slots"));
    const present = parseInt(form.getValues("present_slots"));
    if (!isNaN(total) && !isNaN(present) && total > 0 && present <= total) {
      calculate(total, present, newTarget);
    }
  };

  const resetForm = () => {
    form.reset({ total_slots: "", present_slots: "" });
    setResult(null);
  };

  return (
    <div className="w-full max-w-xl mx-auto space-y-6">
      {/* Target Percentage Preset Selector */}
      <div className="flex items-center justify-between p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-white/50 dark:bg-white/[0.04] backdrop-blur-xl border border-white/60 dark:border-white/[0.08] shadow-xs">
        <span className="text-[11px] sm:text-xs font-bold text-muted-foreground uppercase flex items-center gap-1.5">
          <Percent className="size-3.5 text-primary" /> Target Goal
        </span>
        <div className="flex items-center gap-1 sm:gap-1.5">
          {[75, 80, 85, 90].map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => handleTargetChange(t)}
              className={cn(
                "px-2.5 sm:px-3 py-1 rounded-lg sm:rounded-xl text-[11px] sm:text-xs font-bold transition-all backdrop-blur-md",
                targetPercent === t
                  ? "bg-primary text-primary-foreground shadow-xs scale-105"
                  : "bg-white/60 dark:bg-white/[0.06] text-muted-foreground hover:text-foreground border border-white/50 dark:border-white/[0.08]",
              )}
            >
              {t}%
            </button>
          ))}
        </div>
      </div>

      {/* Main Calculation Glass Card */}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="p-4 sm:p-6 md:p-7 rounded-2xl sm:rounded-3xl bg-white/65 dark:bg-zinc-900/40 backdrop-blur-2xl backdrop-saturate-180 border border-white/60 dark:border-white/[0.08] shadow-[0_12px_36px_rgba(0,0,0,0.04),inset_0_1px_1px_rgba(255,255,255,0.85)] dark:shadow-[0_12px_36px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.12)] space-y-4 sm:space-y-5"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="total_slots"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs font-semibold text-foreground">
                    Total Delivered Lectures
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="e.g. 80"
                      className="rounded-xl h-11 bg-white/50 dark:bg-zinc-900/40 text-base font-bold"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="present_slots"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs font-semibold text-foreground">
                    Lectures You Attended
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="e.g. 62"
                      className="rounded-xl h-11 bg-white/50 dark:bg-zinc-900/40 text-base font-bold"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
          </div>

          <div className="flex items-center gap-2.5 pt-2">
            <Button
              type="submit"
              className="flex-1 rounded-xl h-11 font-bold shadow-xs gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Calculator className="size-4" />
              Calculate Status
            </Button>
            {result && (
              <Button
                type="button"
                variant="outline"
                onClick={resetForm}
                className="rounded-xl h-11 px-4 text-xs font-semibold gap-1.5"
              >
                <RefreshCcw className="size-3.5" />
                Reset
              </Button>
            )}
          </div>
        </form>
      </Form>

      {/* Results View */}
      {result && (
        <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-white/70 dark:bg-zinc-900/50 backdrop-blur-2xl backdrop-saturate-180 border border-white/60 dark:border-white/[0.08] shadow-[0_14px_40px_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,0.9)] dark:shadow-[0_14px_40px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.12)] space-y-4 sm:space-y-5 animate-in fade-in slide-in-from-bottom-3 duration-300">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 sm:gap-3 pb-3.5 sm:pb-4 border-b border-white/40 dark:border-white/[0.06]">
            <div>
              <span className="text-[11px] sm:text-xs uppercase font-extrabold tracking-wider text-muted-foreground">
                Current Attendance
              </span>
              <div className="flex items-baseline gap-2 mt-0.5">
                <span
                  className={cn(
                    "text-3xl sm:text-4xl font-extrabold tracking-tight",
                    result.isSafe
                      ? "text-emerald-600 dark:text-emerald-400"
                      : "text-destructive",
                  )}
                >
                  {result.currentPercentage.toFixed(1)}%
                </span>
                <span className="text-xs text-muted-foreground font-semibold">
                  ({result.presentSlots} / {result.totalSlots} Slots)
                </span>
              </div>
            </div>

            <div
              className={cn(
                "p-2.5 sm:p-3 rounded-xl sm:rounded-2xl border backdrop-blur-md flex items-center gap-1.5 sm:gap-2",
                result.isSafe
                  ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/25"
                  : "bg-destructive/10 text-destructive border-destructive/25",
              )}
            >
              {result.isSafe ? (
                <>
                  <CheckCircle2 className="size-4 sm:size-5" />
                  <span className="text-xs font-bold">Exam Eligible</span>
                </>
              ) : (
                <>
                  <AlertTriangle className="size-4 sm:size-5" />
                  <span className="text-xs font-bold">Shortage Warning</span>
                </>
              )}
            </div>
          </div>

          {/* Actionable Advice Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3.5">
            {result.isSafe ? (
              <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-emerald-500/10 dark:bg-emerald-950/20 border border-emerald-500/20 backdrop-blur-md space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-700 dark:text-emerald-400">
                  <Zap className="size-3.5 sm:size-4" /> Safe to Bunk
                </div>
                <div className="text-xl sm:text-2xl font-black text-emerald-800 dark:text-emerald-300">
                  {result.canBunkSlots} {result.canBunkSlots === 1 ? "Slot" : "Slots"}
                </div>
                <p className="text-[11px] text-emerald-700/80 dark:text-emerald-400/80 leading-relaxed">
                  You can safely miss up to {result.canBunkSlots} more lecture
                  {result.canBunkSlots === 1 ? "" : "s"} while still staying above your {targetPercent}% target.
                </p>
              </div>
            ) : (
              <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-destructive/10 dark:bg-destructive/20 border border-destructive/20 backdrop-blur-md space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-bold text-destructive">
                  <AlertTriangle className="size-4" /> Classes Required
                </div>
                <div className="text-2xl font-black text-destructive">
                  {result.requiredSlots} {result.requiredSlots === 1 ? "Slot" : "Slots"}
                </div>
                <p className="text-[11px] text-muted-foreground leading-relaxed">
                  You need to attend next {result.requiredSlots} consecutive lecture
                  {result.requiredSlots === 1 ? "" : "s"} without missing any to reach {targetPercent}%.
                </p>
              </div>
            )}

            <div className="p-4 rounded-2xl bg-white/50 dark:bg-white/[0.04] border border-white/50 dark:border-white/[0.08] backdrop-blur-md space-y-1 flex flex-col justify-between">
              <div className="flex items-center gap-1.5 text-xs font-bold text-muted-foreground">
                <CalendarCheck className="size-4 text-primary" /> Target Rule
              </div>
              <div className="text-xl font-bold text-foreground">
                {targetPercent}% Target
              </div>
              <p className="text-[11px] text-muted-foreground leading-relaxed">
                Parul University mandates minimum 75% attendance to sit for mid-sem and end-sem exams.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
