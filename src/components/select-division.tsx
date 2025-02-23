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

export const SelectDivision = ({
  onSelect,
  defaultValue,
}: {
  onSelect?: (data: string) => void;
  defaultValue?: string;
}) => {
  const setDivision = useDataStore((state) => state.setDivision);
  const division = useDataStore((state) => state.division);
  const handleSelect = (e: string) => {
    setDivision(e);
  };
  return (
    <>
      <Select
        defaultValue={defaultValue ? defaultValue : division ? division : ""}
        onValueChange={onSelect ? onSelect : handleSelect}
      >
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
