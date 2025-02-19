"use client";
import Cookies from "js-cookie";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { specializations } from "@/lib/constants";

export const SelectSpecialization = () => {
  const onSelect = (e: string) => {
    Cookies.set("specialization", e, { expires: 365 });
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
