"use client";

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
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
    const now = new Date();
    const istTime = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));

    const start = new Date(istTime);
    start.setHours(8, 45, 0, 0); // 8:45 AM
    const end = new Date(istTime);
    end.setHours(10, 0, 0, 0);   // 10:00 AM

    if (istTime >= start && istTime <= end) {
      return false;
    }
    return true;

  }

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

  return (
    <AlertDialog open={open}>
      <AlertDialogContent className="max-md:max-w-[93%] rounded-md">
        <AlertDialogHeader>
          <AlertDialogTitle className="flex items-center gap-1 text-lg font-semibold">
            Pu Vault
          </AlertDialogTitle>
        </AlertDialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 mt-2">
          {/* Name Field */}
          <div className="space-y-1">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="Enter your full name"
              {...register("name")}
            />
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>

          {/* Enrollment Field */}
          <div className="space-y-1">
            <Label htmlFor="enrollment">Enrollment No.</Label>
            <Input
              id="enrollment"
              placeholder="Enter enrollment number"
              {...register("enrollment")}
            />
            {errors.enrollment && (
              <p className="text-sm text-red-500">
                {errors.enrollment.message}
              </p>
            )}
          </div>

          {/* Course Select */}
          <CourseSelectBox />

          {/* Semester Select */}
          <SemSelectBox />

          <AlertDialogFooter>
            <Button type="submit" className="w-full">
              Save changes
            </Button>
          </AlertDialogFooter>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
};
