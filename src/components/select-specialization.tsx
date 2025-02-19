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

export const SelectSpecialization = () => {
  const { setSpecialization } = useDataStore((state) => state);
  const onSelect = (e: string) => {
    setSpecialization(e);
    console.log(e);
  };
  return (
    <>
      <Select onValueChange={onSelect}>
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
