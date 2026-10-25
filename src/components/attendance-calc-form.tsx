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
  Sparkles,
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
      // How many can I bunk?
      // (present) / (total + x) >= targetDecimal
      // present >= targetDecimal * (total + x)
      // present - targetDecimal * total >= targetDecimal * x
      // x <= (present - targetDecimal * total) / targetDecimal
      canBunkSlots = Math.floor((present - targetDecimal * total) / targetDecimal);
      if (canBunkSlots < 0) canBunkSlots = 0;
    } else {
      // How many do I need to attend consecutively?
      // (present + x) / (total + x) >= targetDecimal
      // present + x >= targetDecimal * total + targetDecimal * x
      // x * (1 - targetDecimal) >= targetDecimal * total - present
      // x >= (targetDecimal * total - present) / (1 - targetDecimal)
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
      <div className="flex items-center justify-between p-3 rounded-2xl bg-muted/40 border border-border/60">
        <span className="text-xs font-bold text-muted-foreground uppercase flex items-center gap-1.5">
          <Percent className="size-3.5 text-primary" /> Target Goal
        </span>
        <div className="flex items-center gap-1.5">
          {[75, 80, 85, 90].map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => handleTargetChange(t)}
              className={cn(
                "px-3 py-1 rounded-xl text-xs font-bold transition-all",
                targetPercent === t
                  ? "bg-primary text-primary-foreground shadow-xs scale-105"
                  : "bg-background text-muted-foreground hover:text-foreground border border-border/50",
              )}
            >
              {t}%
            </button>
          ))}
        </div>
      </div>

      {/* Main Calculation Card */}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="p-6 rounded-3xl bg-card border border-border/70 shadow-md space-y-5"
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
                      className="rounded-xl h-11 bg-background text-base font-semibold"
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
                      className="rounded-xl h-11 bg-background text-base font-semibold"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
          </div>

          <div className="flex items-center gap-2 pt-1">
            <Button
              type="submit"
              className="flex-1 rounded-xl h-11 font-bold text-sm shadow-sm gap-2"
            >
              <Calculator className="size-4" />
              Calculate Attendance & Bunk Limit
            </Button>
            {result && (
              <Button
                type="button"
                variant="outline"
                onClick={resetForm}
                className="rounded-xl size-11 p-0 shrink-0 border-border/70"
                title="Reset calculator"
              >
                <RefreshCcw className="size-4 text-muted-foreground" />
              </Button>
            )}
          </div>
        </form>
      </Form>

      {/* Results Dashboard */}
      {result && (
        <div className="space-y-4 animate-in fade-in-50 duration-300">
          {/* Main Percentage Card */}
          <div
            className={cn(
              "p-6 rounded-3xl border shadow-sm flex flex-col md:flex-row items-center justify-between gap-5 text-center md:text-left",
              result.isSafe
                ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-950 dark:text-emerald-100"
                : "bg-rose-500/10 border-rose-500/30 text-rose-950 dark:text-rose-100",
            )}
          >
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-background/80 shadow-xs">
                {result.isSafe ? (
                  <>
                    <CheckCircle2 className="size-3.5 text-emerald-600" />
                    <span className="text-emerald-700 dark:text-emerald-300">
                      Eligible for University Exams
                    </span>
                  </>
                ) : (
                  <>
                    <AlertTriangle className="size-3.5 text-rose-600" />
                    <span className="text-rose-700 dark:text-rose-300">
                      Attendance Shortage Warning
                    </span>
                  </>
                )}
              </div>
              <h3 className="text-sm font-semibold text-muted-foreground pt-1">
                Your Current Attendance
              </h3>
              <div className="text-4xl md:text-5xl font-black tracking-tight text-foreground">
                {result.currentPercentage.toFixed(1)}%
              </div>
              <p className="text-xs text-muted-foreground">
                Attended {result.presentSlots} out of {result.totalSlots} total sessions
              </p>
            </div>

            {/* Smart Action Result Badge */}
            <div className="p-4 rounded-2xl bg-background/90 border border-border/60 shadow-xs max-w-xs w-full space-y-1 text-center">
              {result.isSafe ? (
                <>
                  <div className="flex items-center justify-center gap-1 text-emerald-600 dark:text-emerald-400 font-bold text-xs uppercase">
                    <Zap className="size-3.5" /> Bunk Calculator
                  </div>
                  <div className="text-3xl font-extrabold text-foreground">
                    {result.canBunkSlots}
                  </div>
                  <p className="text-xs text-muted-foreground leading-snug">
                    You can safely miss up to{" "}
                    <strong className="text-foreground">
                      {result.canBunkSlots} lectures
                    </strong>{" "}
                    and still remain at {targetPercent}%+.
                  </p>
                </>
              ) : (
                <>
                  <div className="flex items-center justify-center gap-1 text-rose-600 dark:text-rose-400 font-bold text-xs uppercase">
                    <CalendarCheck className="size-3.5" /> Classes Required
                  </div>
                  <div className="text-3xl font-extrabold text-foreground">
                    {result.requiredSlots}
                  </div>
                  <p className="text-xs text-muted-foreground leading-snug">
                    You need to attend next{" "}
                    <strong className="text-foreground">
                      {result.requiredSlots} lectures
                    </strong>{" "}
                    without bunking to hit {targetPercent}%.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
