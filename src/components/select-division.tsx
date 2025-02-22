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
import { divisions } from "@/lib/constants";
import { useDataStore } from "@/stores/data.store";

export const SelectDivision = () => {
  const setDivision = useDataStore((state) => state.setDivision);
  const onSelect = (e: string) => {
    setDivision(e);
  };
  return (
    <>
      <Select onValueChange={onSelect}>
        <SelectTrigger className="w-full bg-gray-100">
          <SelectValue placeholder="Select Division" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {divisions.map((ele) => (
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
