"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CourseSelectBox } from "../course-select-box";
import { SemSelectBox } from "../sem-select-box";
import { useEffect, useState } from "react";
import { useDataStore } from "@/stores/data.store";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { GraduationCap, Sparkles } from "lucide-react";

// 🧠 Zod Schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  enrollment: z
    .string()
    .min(1, { message: "Enrollment number is required." }),
});

export const DataDialog = () => {
  const [open, setOpen] = useState(false);
  const hydrated = useDataStore((state) => state.hydrated);
  const course = useDataStore((state) => state.course);
  const sem = useDataStore((state) => state.sem);
  const user = useDataStore((state) => state.user);
  const setUser = useDataStore((state) => state.setUser);

  // 🧾 React Hook Form setup
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: user?.name || "",
      enrollment: user?.enrollment || "",
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  const isShowDialog = () => {
    // Check if dismissed in this session
    if (sessionStorage.getItem("dataDialogDismissed")) {
      return false;
    }
    const now = new Date();
    const istTime = new Date(
      now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" }),
    );

    const start = new Date(istTime);
    start.setHours(8, 45, 0, 0); // 8:45 AM
    const end = new Date(istTime);
    end.setHours(10, 0, 0, 0); // 10:00 AM

    if (istTime >= start && istTime <= end) {
      return false;
    }
    return true;
  };

  useEffect(() => {
    if (hydrated) {
      if (!course || !sem || !user?.name || !user?.enrollment) {
        if (!isShowDialog()) return;
        setOpen(true);
      } else {
        setOpen(false);
      }
    }
  }, [hydrated, course, sem, user]);

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setUser({
      name: values.name,
      enrollment: values.enrollment,
    });
    setOpen(false);
  };

  const handleSkip = () => {
    sessionStorage.setItem("dataDialogDismissed", "true");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-md w-[92vw] rounded-2xl p-6 border shadow-2xl">
        <DialogHeader className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-primary/10 text-primary">
              <GraduationCap className="size-6" />
            </div>
            <div>
              <DialogTitle className="text-xl font-bold">
                Personalize PU Vault
              </DialogTitle>
              <DialogDescription className="text-xs text-muted-foreground">
                Set your details once to customize your materials, timetables, and assignments.
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-2">
          {/* Name Field */}
          <div className="space-y-1.5">
            <Label htmlFor="name" className="text-xs font-semibold">
              Full Name
            </Label>
            <Input
              id="name"
              placeholder="e.g. Rahul Sharma"
              className="rounded-xl h-10"
              {...register("name")}
            />
            {errors.name && (
              <p className="text-xs text-destructive">{errors.name.message}</p>
            )}
          </div>

          {/* Enrollment Field */}
          <div className="space-y-1.5">
            <Label htmlFor="enrollment" className="text-xs font-semibold">
              Enrollment Number
            </Label>
            <Input
              id="enrollment"
              placeholder="e.g. 230303126001"
              className="rounded-xl h-10"
              {...register("enrollment")}
            />
            {errors.enrollment && (
              <p className="text-xs text-destructive">
                {errors.enrollment.message}
              </p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-3 pt-1">
            {/* Course Select */}
            <div className="space-y-1.5">
              <Label className="text-xs font-semibold">Course</Label>
              <CourseSelectBox />
            </div>

            {/* Semester Select */}
            <div className="space-y-1.5">
              <Label className="text-xs font-semibold">Semester</Label>
              <SemSelectBox />
            </div>
          </div>

          <DialogFooter className="flex-col sm:flex-row gap-2 pt-2">
            <Button
              type="button"
              variant="ghost"
              onClick={handleSkip}
              className="rounded-xl text-xs text-muted-foreground hover:text-foreground"
            >
              Skip for now
            </Button>
            <Button type="submit" className="rounded-xl font-semibold gap-1.5">
              <Sparkles className="size-4" />
              Save & Continue
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
