"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { specializations } from "@/lib/constants";
import { useDataStore } from "@/stores/data.store";
import { toast } from "sonner";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export const SelectSpecialization = ({
  className,
  showToast = true,
}: {
  className?: string;
  showToast?: boolean;
}) => {
  const setSpecialization = useDataStore((state) => state.setSpecialization);
  const specialization = useDataStore((state) => state.specialization);

  const onSelect = (e: string) => {
    setSpecialization(e);
    if (showToast) {
      const found = specializations.find((s) => s.value === e);
      toast.success(`Specialization set to ${found?.label || e.toUpperCase()}`);
    }
  };

  return (
    <Select onValueChange={onSelect} value={specialization || "ai"}>
      <SelectTrigger
        className={cn(
          "w-full h-9 rounded-xl bg-white/60 dark:bg-white/[0.06] backdrop-blur-md border border-white/60 dark:border-white/[0.1] text-xs font-semibold shadow-xs hover:border-primary/40 transition-colors",
          className,
        )}
      >
        <div className="flex items-center gap-1.5 truncate">
          <Sparkles className="size-3.5 text-primary shrink-0" />
          <SelectValue placeholder="Select Specialization" />
        </div>
      </SelectTrigger>
      <SelectContent className="rounded-2xl bg-white/80 dark:bg-zinc-950/80 backdrop-blur-2xl border border-white/60 dark:border-white/[0.12] shadow-2xl">
        <SelectGroup>
          {specializations.map((ele) => (
            <SelectItem
              key={ele.id}
              value={ele.value}
              className="text-xs font-medium py-2 rounded-xl cursor-pointer"
            >
              {ele.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
