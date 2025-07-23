import { Separator } from "@/components/ui/separator";
import { nptelAllWeeksAnswers } from "@/lib/constants/nptel-answers.constant";
import { redirect } from "next/navigation";

/* eslint-disable @typescript-eslint/no-explicit-any */
const page = async ({ params }: any) => {
  const { week } = await params;

  const answers = nptelAllWeeksAnswers.find(({ key }) => key == week);

  if (!answers) return redirect("/nptel-assignment-answers");

  return (
    <div className="flex flex-col gap-3 p-2 md:p-5">
      <div className="text-center font-medium text-xl mb-2">
        NPTEL: {answers.title}
      </div>
      <Separator />
      {answers.answers.map((ans) => (
        <div key={ans.id} className="flex items-center gap-1">
          <div className="text-xs text-gray-500">Question : {ans.id}</div>
          <div
            key={ans.id}
            className="flex gap-2 bg-gray-100 dark:bg-[#181818] p-2 px-4 rounded-lg items-center"
          >
            <span className="text-primary text-sm border rounded-sm p-1">
              {typeof ans.option == "number"
                ? ans.option
                : ans.option.join(", ")}
            </span>
            <div className="text-sm dark:text-gray-300 text-gray-600 ">
              <span> {ans.answer}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default page;
