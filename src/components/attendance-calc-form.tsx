"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
import { useState } from "react";
import { Separator } from "./ui/separator";

const FormSchema = z.object({
  total_slots: z.string().min(1, {
    message: "Total Slots is required",
  }),
  present_slots: z.string().min(1, {
    message: "Present Slots is required",
  }),
});

export function AttendanceCalcForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      total_slots: "",
      present_slots: "",
    },
  });
  const [attendancePercentage, setAttendancePercentage] = useState(0);
  const [requiredSlots, setRequiredSlots] = useState(0);

  function onSubmit(data: z.infer<typeof FormSchema>) {
    const totalSlots = parseInt(data.total_slots);
    const presentSlots = parseInt(data.present_slots);
    const percentage = (presentSlots / totalSlots) * 100;
    setAttendancePercentage(percentage);
    const requiredSlots = Math.ceil((0.75 * totalSlots - presentSlots) / 0.25);
    console.log({ requiredSlots });
    setRequiredSlots(requiredSlots);
  }

  return (
    <Form {...form}>
      <div className="absolute inset-0 flex items-center justify-center">
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full md:w-1/3 space-y-6 rounded-lg border-2 p-2 md:p-5"
        >
          <FormField
            control={form.control}
            name="total_slots"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Total Slots</FormLabel>
                <FormControl>
                  <Input
                    className="h-10"
                    placeholder="Enter total no. of slots"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="present_slots"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Present Slots</FormLabel>
                <FormControl>
                  <Input
                    className="h-10"
                    placeholder="Enter total no. of present slots"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full" size={"lg"}>
            Calculate
          </Button>
          <Separator className={attendancePercentage == 0 ? "hidden" : ""} />
          <div className="flex flex-col gap-2">
            {attendancePercentage > 0 && (
              <div className="text-slate-600">
                Total Percentage:{" "}
                <span className="text-slate-900 font-bold text-md">
                  {attendancePercentage.toFixed(2)}%
                </span>
              </div>
            )}
            {requiredSlots > 0 && (
              <div className="text-slate-600">
                Required present slots to complete 75%:{" "}
                <span className="text-slate-900 font-bold text-md">
                  {requiredSlots}
                </span>
              </div>
            )}
          </div>
        </form>
      </div>
    </Form>
  );
}
