"use client";
// import Cookies from "js-cookie";
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

export const SelectSpecialization = () => {
  // const { setSpecialization } = useDataStore((state) => state);
  const setSpecialization = useDataStore((state) => state.setSpecialization);

  const specialization = useDataStore((state) => state.specialization);

  const onSelect = (e: string) => {
    setSpecialization(e);
    toast.success("Specialization changed successfully");
  };
  return (
    <>
      <Select onValueChange={onSelect} value={specialization || ""}>
        <SelectTrigger className="w-full bg-gray-100">
          <SelectValue placeholder="Select Specialization" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {specializations.map((ele) => (
              <SelectItem key={ele.id} value={ele.value}>
                {ele.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  );
};
