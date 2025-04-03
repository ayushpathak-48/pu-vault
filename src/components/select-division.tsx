"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { divisions } from "@/lib/constants";
import { useDataStore } from "@/stores/data.store";
import { toast } from "sonner";

export const SelectDivision = ({
  onSelect,
  defaultValue,
}: {
  onSelect?: (data: string) => void;
  defaultValue?: string;
}) => {
  const setDivision = useDataStore((state) => state.setDivision);
  const division = useDataStore((state) => state.division);
  const course = useDataStore((state) => state.course);
  const setSpecialization = useDataStore((state) => state.setSpecialization);
  const handleSelect = (e: string) => {
    setDivision(e);
    const selectedDivision = divisions.find(({ value }) => value == e)!;
    setSpecialization(selectedDivision.specialization);
    toast.success("Division changed successfully");
  };

  return (
    <>
      <Select
        onValueChange={onSelect ? onSelect : handleSelect}
        disabled={!division}
        value={defaultValue ? defaultValue : division}
      >
        <SelectTrigger className="w-full ">
          <SelectValue placeholder="Select Division" />
        </SelectTrigger>
        <SelectContent className="max-h-60">
          <SelectGroup>
            {divisions.map((ele) => (
              <SelectItem
                key={ele.id}
                value={ele.value}
                className={
                  !ele?.courses?.includes(course) && ele.courses ? "hidden" : ""
                }
              >
                {ele.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  );
};
