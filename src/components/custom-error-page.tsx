import { useDataStore } from "@/stores/data.store";
import { TriangleAlert } from "lucide-react";

export const CustomErrorPage = ({ errorText }: { errorText: string }) => {
  const sem = useDataStore((state) => state.sem);
  return (
    <div className="flex flex-col gap-2 items-center justify-center h-96">
      <TriangleAlert className="text-amber-500 size-10" />
      <div className="font-medium">
        Sem {sem} {errorText}
      </div>
    </div>
  );
};
